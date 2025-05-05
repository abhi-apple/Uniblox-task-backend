const { cart, orders, discountCodes } = require("../data/store");

exports.checkingOut = async (req, res) => {
  const { userId, discountCode } = req.body;
  if (!userId) {
    return res.status(400).json({ message: "Bad request" });
  }

  const userCart = cart.get(userId);
  console.log(discountCodes)
  if (!userCart || userCart.length === 0)
    return res.status(400).json({ error: "Cart is empty" });
  let total = userCart.reduce(
    (sum, index) => sum + index.price * index.quantity,
    0
  );

  let discountApplied = 0;
  let discountCodeUsed = null;
  if (discountCode) {
    const codeEntry = discountCodes.find(
      (dc) => dc.code === discountCode && !dc.used
    );
    if (!codeEntry)
      return res.status(400).json({ error: "Invalid discount code" });
    discountApplied = (total * codeEntry.discountPercent) / 100;
    total -= discountApplied;
    discountCodeUsed = codeEntry.code;
    codeEntry.used = true;
  }
  const order = {
    userId,
    items: userCart,
    total,
    discountApplied,
    discountCodeUsed,
  };

  orders.push(order);
  cart.set(userId, []);
  res.status(200).json({ message: "Order placed", order });
};

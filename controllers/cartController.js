const { cart } = require("../data/store");

exports.addToCart = async (req, res) => {
  const { userId, item } = req.body;
  if (!userId || !item) {
    return res.status(400).json({ message: "Bad request" });
  }
  const userCart = cart.get(userId) || [];
  const existingItem = userCart.find((i) => i.name === item.name);

  if (existingItem) {
    existingItem.quantity += item.quantity || 1;
  } else {
    userCart.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1,
    });
  }

  cart.set(userId, userCart);
  return res.status(200).json({ message: "Item added to cart", cart: userCart });
};

exports.getCart = async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: "Bad request" });
  }
  const userCart = cart.get(userId) || [];
  return res.status(200).json({ message: "Cart retrieved successfully", cart: userCart });
};

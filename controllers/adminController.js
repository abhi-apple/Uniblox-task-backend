const { orders, discountCodes } = require("../data/store");
const { v4: uuidv4 } = require('uuid');
const N = 1; 
exports.generateDiscountCode = (req, res) => {
    const orderCount = orders.length;
    console.log(orderCount)
    if ((orderCount + 1) % N === 0) {
      const code = uuidv4().slice(0, 8);
      discountCodes.push({ code, used: false, orderNumber: orderCount + 1,discountPercent:10 });
      console.log(discountCodes)
      return res.json({ message: 'Discount code generated', code });
    }
  
    res.json({ message: `Next discount code will be available on order #${(Math.floor(orderCount / N) + 1) * N}` });
  };
  
  // Store stats
exports.getStats = (req, res) => {
    let totalItems = 0;
    let totalRevenue = 0;
    let totalDiscount = 0;
  
    for (const order of orders) {
      totalItems += order.items.reduce((sum, item) => sum + item.quantity, 0);
      totalRevenue += order.total;
      totalDiscount += order.discountApplied || 0;
    }
  
    res.json({
      totalOrders: orders.length,
      totalItems,
      totalRevenue,
      totalDiscount,
      discountCodes
    });
  };
  
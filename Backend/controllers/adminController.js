const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

// GET /api/admin/orders — all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

// GET /api/admin/stats — dashboard stats
exports.getDashboardStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalUsers = await User.countDocuments();

    const revenueResult = await Order.aggregate([
      { $match: { orderStatus: { $ne: "Cancelled" } } },
      { $group: { _id: null, total: { $sum: "$totalAmount" } } },
    ]);

    const revenue = revenueResult.length > 0 ? revenueResult[0].total : 0;

    res.json({ totalOrders, totalProducts, totalUsers, revenue });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch stats" });
  }
};

// PUT /api/admin/make-admin — promote current user to admin
exports.makeAdmin = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { role: "admin" });
    res.json({ message: "You are now an admin" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update role" });
  }
};

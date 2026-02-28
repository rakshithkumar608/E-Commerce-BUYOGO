const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder,
} = require("../controllers/orderController");

router.post("/create", protect, createOrder);
router.get("/my-orders", protect, getUserOrders);
router.get("/:id", protect, getOrderById);
router.put("/update/:id", protect, updateOrderStatus);
router.put("/cancel/:id", protect, cancelOrder);

module.exports = router;
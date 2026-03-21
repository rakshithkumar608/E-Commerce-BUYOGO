const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");
const { getAllOrders, getDashboardStats } = require("../controllers/adminController");
const { updateOrderStatus } = require("../controllers/orderController");


router.get("/orders", protect, admin, getAllOrders);
router.get("/stats", protect, admin, getDashboardStats);
router.put("/orders/:id", protect, admin, updateOrderStatus);

module.exports = router;

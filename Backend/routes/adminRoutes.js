const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");
const { getAllOrders, getDashboardStats, makeAdmin } = require("../controllers/adminController");
const { updateOrderStatus } = require("../controllers/orderController");

// This route only needs auth — lets a logged-in user become admin
router.put("/make-admin", protect, makeAdmin);

router.get("/orders", protect, admin, getAllOrders);
router.get("/stats", protect, admin, getDashboardStats);
router.put("/orders/:id", protect, admin, updateOrderStatus);

module.exports = router;

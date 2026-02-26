const express = require("express");
const router = express.Router();

const {
  getProducts,
  getSingleProduct,
  createProduct,
} = require("../controllers/productController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", getProducts);
router.get("/:id", getSingleProduct);

// Only admin can create product
router.post("/", auth, role("admin"), createProduct);

module.exports = router;
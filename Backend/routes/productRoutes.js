const express = require("express");
const router = express.Router();

const {
  getProducts,
  getSingleProduct,
  rateProduct,
  createProduct,
} = require("../controllers/ProductController");


router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", createProduct);

router.post("/:productId/rate", rateProduct);

module.exports = router;
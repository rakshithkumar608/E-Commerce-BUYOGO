const Product = require("../models/Product");

// GET PRODUCTS WITH FILTER + PAGINATION
exports.getProducts = async (req, res) => {
  try {
    const {
      category,
      brand,
      minPrice,
      maxPrice,
      sort,
      page = 1,
      limit = 8,
    } = req.query;

    let query = {};

    if (category) query.category = category;
    if (brand) query.brand = brand;

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    let sortOption = {};
    if (sort === "low") sortOption.price = 1;
    if (sort === "high") sortOption.price = -1;
    if (sort === "new") sortOption.createdAt = -1;

    const products = await Product.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Product.countDocuments(query);

    res.json({
      products,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });

    } catch (error) {
    res.status(500).json({ message: "Server error" });
    }
};

// GET SINGLE PRODUCT
exports.getSingleProduct = async (req, res) => {
    try {
    const product = await Product.findById(req.params.id);
    res.json(product);
    } catch {
    res.status(404).json({ message: "Product not found" });
    }
};

// ADMIN CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch {
    res.status(400).json({ message: "Invalid data" });
  }
};
const Product = require("../models/Product");


exports.getProducts = async (req, res) => {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      sort,
      page = 1,
      limit = 20,
    } = req.query;

    let query = {};

    if (category) query.category = category;

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    let sortOption = {};
    if (sort === "low") sortOption.price = 1;
    if (sort === "high") sortOption.price = -1;
    if (sort === "rating") sortOption.averageRating = -1;

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


exports.getSingleProduct = async (req, res) => {
    try {
    const product = await Product.findById(req.params.id);
    res.json(product);
    } catch {
    res.status(404).json({ message: "Product not found" });
    }
};

exports.rateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { value } = req.body;
    const userId = req.user.id; // assuming JWT middleware

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if user already rated
    const existingRating = product.ratings.find(
      (r) => r.user.toString() === userId
    );

    if (existingRating) {
      existingRating.value = value;
    } else {
      product.ratings.push({ user: userId, value });
    }

    // Calculate average
    const total = product.ratings.reduce((sum, r) => sum + r.value, 0);
    product.averageRating = total / product.ratings.length;

    await product.save();

    res.json({ message: "Rating updated", averageRating: product.averageRating });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch {
    res.status(400).json({ message: "Invalid data" });
  }
};
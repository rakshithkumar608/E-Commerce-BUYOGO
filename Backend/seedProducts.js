const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const menProducts = [
  {
    name: "Classic Black Leather Jacket",
    description: "Premium leather jacket with a slim-fit design, perfect for a rugged yet stylish look.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    category: "men",
    brand: "UrbanEdge",
    stock: 25,
    averageRating: 4.5,
  },
  {
    name: "Slim Fit Denim Jeans",
    description: "Comfortable stretch denim with a modern slim fit, available in dark wash.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    category: "men",
    brand: "DenimCo",
    stock: 50,
    averageRating: 4.2,
  },
  {
    name: "Casual Cotton Crew Neck T-Shirt",
    description: "Soft 100% cotton crew neck tee, everyday essential in multiple colors.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    category: "men",
    brand: "BasicWear",
    stock: 100,
    averageRating: 4.0,
  },
  {
    name: "Formal Navy Blue Blazer",
    description: "Tailored fit blazer in navy blue, ideal for business meetings and formal events.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    category: "men",
    brand: "EliteStyle",
    stock: 15,
    averageRating: 4.7,
  },
  {
    name: "Athletic Running Sneakers",
    description: "Lightweight mesh sneakers with cushioned sole for running and daily wear.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    category: "men",
    brand: "SprintX",
    stock: 40,
    averageRating: 4.4,
  },
  {
    name: "Hooded Zip-Up Sweatshirt",
    description: "Warm fleece-lined hoodie with front zip, perfect for casual outings.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    category: "men",
    brand: "ComfortZone",
    stock: 35,
    averageRating: 4.3,
  },
  {
    name: "Checkered Flannel Shirt",
    description: "Classic plaid flannel shirt, soft brushed cotton for a cozy, laid-back vibe.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
    category: "men",
    brand: "TimberStyle",
    stock: 30,
    averageRating: 4.1,
  },
  {
    name: "Chino Pants - Khaki",
    description: "Versatile khaki chinos with a straight fit, great for work and weekends.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
    category: "men",
    brand: "UrbanEdge",
    stock: 45,
    averageRating: 4.0,
  },
  {
    name: "Wool Overcoat - Charcoal",
    description: "Elegant charcoal wool overcoat, double-breasted with a modern cut.",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600",
    category: "men",
    brand: "EliteStyle",
    stock: 10,
    averageRating: 4.8,
  },
  {
    name: "Graphic Print Streetwear Tee",
    description: "Bold graphic print on premium cotton, oversized relaxed fit.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
    category: "men",
    brand: "StreetKing",
    stock: 60,
    averageRating: 4.2,
  },
  {
    name: "Aviator Sunglasses - Gold",
    description: "Classic aviator sunglasses with gold metal frame and UV400 protection.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
    category: "men",
    brand: "ShadeCraft",
    stock: 70,
    averageRating: 4.3,
  },
  {
    name: "Premium Leather Belt",
    description: "Genuine leather belt with a brushed steel buckle, 35mm width.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    category: "men",
    brand: "LeatherLux",
    stock: 55,
    averageRating: 4.1,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Remove existing men products to avoid duplicates
    await Product.deleteMany({});
    await Product.insertMany([
  ...menProducts,
  ...womenProducts,
  ...streetwearProducts,
  ...accessoriesProducts,
]);

    const created = await Product.insertMany(menProducts);
    console.log(`✅ Seeded ${created.length} men's products successfully!`);

    created.forEach((p) => {
      console.log(`  - ${p.name} ($${p.price})`);
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error.message);
    process.exit(1);
  }
};

seedProducts();

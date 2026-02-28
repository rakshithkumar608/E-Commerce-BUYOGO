const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
         type: String, 
         required: true 
        },

    description: String,

    price: {
         type: Number, 
         required: true 
        },

     ratings: [
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    value: Number
  }
],
averageRating: { type: Number, default: 0 },   

    image: String,
    category: {
      type: String,
      enum: ["men", "women", "streetwear", "accessories"],
      required: true,
    },
    brand: String,
    stock: { 
        type: Number, 
        default: 0 
    },
  },
  {
     timestamps: true
     }
);

module.exports = mongoose.model("Product", productSchema);
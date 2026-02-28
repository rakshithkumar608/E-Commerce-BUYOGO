import React, { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { addToCart as addToCartAPI } from "../../../api/cart";
import { getProducts } from "../../../api/product";

import heroBg from "../../../assets/images/men/herobg-1.avif";

const MenCollection = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("low");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts({ category: "men" });
    setProducts(data);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (minPrice)
      filtered = filtered.filter((p) => p.price >= Number(minPrice));

    if (maxPrice)
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));

    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);
    if (sort === "rating")
      filtered.sort((a, b) => b.averageRating - a.averageRating);

    return filtered;
  }, [products, sort, minPrice, maxPrice]);

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      await addToCartAPI(product._id, token);

      toast.success(`${product.name} added to cart 🛒`, {
        style: { background: "green", color: "white" },
      });

    } catch (error) {
      toast.error("Failed to add to cart");
      console.error(error);
    }
  };

  return (
    <div className="space-y-8">

      {/* HERO */}
      <div className="relative h-60 rounded-lg overflow-hidden">
        <img
          src={heroBg}
          alt="Men Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-7xl text-white font-bold">
            Men Collection
          </h1>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="flex gap-4 bg-white p-4 shadow rounded-xl">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border px-3 py-2 rounded w-32"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border px-3 py-2 rounded w-32"
        />
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />

            <h3 className="mt-3 font-semibold">{item.name}</h3>

            <p className="text-yellow-500">
              ⭐ {item.averageRating?.toFixed(1) || 0}
            </p>

            <p className="text-gray-600">${item.price}</p>

            <button
              onClick={() => handleAddToCart(item)}
              className="w-full bg-black text-white py-2 mt-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCollection;
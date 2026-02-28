import React, { useMemo, useState } from "react";
import { toast } from "sonner";

import heroBg from "../../../assets/images/men/herobg-1.avif";
import men1 from "../../../assets/images/men/men1.avif";
import men2 from "../../../assets/images/men/men2.avif";
import men3 from "../../../assets/images/men/men3.avif";
import men4 from "../../../assets/images/men/men4.avif";
import men5 from "../../../assets/images/men/men5.avif";
import men6 from "../../../assets/images/men/men6.avif";

const productsData = [
  { id: 1, name: "Classic White T-Shirt", price: 49, rating: 4.5, image: men1 },
  { id: 2, name: "Urban Street Hoodie", price: 89, rating: 4.2, image: men2 },
  { id: 3, name: "Minimal Black Jacket", price: 120, rating: 4.8, image: men3 },
  { id: 4, name: "Classic Men Jeans", price: 150, rating: 4.1, image: men4 },
  { id: 5, name: "Oversized Street T-Shirt", price: 65, rating: 4.6, image: men5 },
  { id: 6, name: "Modern Denim Jacket", price: 135, rating: 4.7, image: men6 },
];

const MenCollection = () => {
  const [sort, setSort] = useState("low");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [cart, setCart] = useState([]);

 
  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

   
    if (minPrice)
      filtered = filtered.filter((p) => p.price >= Number(minPrice));

    if (maxPrice)
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));

  
    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);
    if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

    return filtered;
  }, [sort, minPrice, maxPrice]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);

    toast.success(`${product.name} added to cart 🛒`, {
      style: { background: "#000", color: "#fff" },
      duration: 2000,
    });
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
      <div className="flex flex-wrap gap-4 items-center bg-white p-4 shadow rounded-xl">

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
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min Price"
          className="border px-3 py-2 rounded w-32"
        />

        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price"
          className="border px-3 py-2 rounded w-32"
        />

        {(minPrice || maxPrice) && (
          <button
            onClick={() => {
              setMinPrice("");
              setMaxPrice("");
            }}
            className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition"
          >
            Clear
          </button>
        )}
      </div>

     
      <div className="grid grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-white p-4 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 space-y-3">
                <h3 className="font-semibold">{item.name}</h3>

              
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < Math.round(item.rating) ? "★" : "☆"}
                    </span>
                  ))}
                  <span className="text-gray-400 ml-2 text-sm">
                    {item.rating}
                  </span>
                </div>

                <p className="text-gray-600">${item.price}</p>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MenCollection;
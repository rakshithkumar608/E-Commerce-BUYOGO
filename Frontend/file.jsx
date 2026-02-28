import React, { useEffect, useState } from "react";
import heroBg from "../../../assets/images/men/herobg-1.avif";
import { getProducts } from "../../../api/product";

const MenCollection = () => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("low");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [minPrice, maxPrice, sort]);

  const fetchProducts = async () => {
    const data = await getProducts({
      category: "men",
      minPrice,
      maxPrice,
      sort,
    });

    setProducts(data);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="space-y-10">

      {/* HERO */}
      <div className="relative h-72 rounded-xl overflow-hidden">
        <img
          src={heroBg}
          alt="Men Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold tracking-wide">
            MEN COLLECTION
          </h1>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4 items-center">

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

        {(minPrice || maxPrice) && (
          <button
            onClick={() => {
              setMinPrice("");
              setMaxPrice("");
            }}
            className="text-sm text-red-500"
          >
            Clear
          </button>
        )}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-3 gap-10">

        {products.length > 0 ? (
          products.map((item) => (
            <div
              key={item._id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <div className="flex text-yellow-400">
                  {"★".repeat(Math.floor(item.averageRating || 0))}
                  <span className="text-gray-400 ml-2 text-sm">
                    {item.averageRating || 0}
                  </span>
                </div>

                <p className="text-gray-600 text-md">${item.price}</p>

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
          <p className="col-span-3 text-center text-gray-500 text-lg">
            No products found in this price range.
          </p>
        )}

      </div>
    </div>
  );
};

export default MenCollection;
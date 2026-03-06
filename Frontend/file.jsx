import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Smartphones", icon: "📱", route: "/electronics/smartphones" },
  { name: "Laptops", icon: "💻", route: "/electronics/laptops" },
  { name: "Headphones", icon: "🎧", route: "/electronics/headphones" },
  { name: "Cameras", icon: "📷", route: "/electronics/cameras" },
  { name: "Gaming", icon: "🎮", route: "/electronics/gaming" },
  { name: "Smart Home", icon: "🏠", route: "/electronics/smart-home" }
];

const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Dell",
  "HP",
  "Canon"
];

const trending = [
  "iPhone 15 Pro",
  "MacBook Pro M3",
  "PlayStation 5",
  "Sony WH1000XM5",
  "DJI Pocket 3",
  "Galaxy Watch 6"
];

const deals = [
  { name: "Gaming Headset", discount: "20% OFF" },
  { name: "Laptop Stand", discount: "30% OFF" },
  { name: "Smartwatch", discount: "15% OFF" }
];

const TopCategories = () => {
  return (
    <div className="space-y-16">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-12 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Upgrade Your Tech Life
          </h1>
          <p className="text-gray-400 mb-6">
            Discover the latest electronics, gadgets, and smart devices.
          </p>

          <Link
            to="/electronics/trending"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Explore Gadgets
          </Link>
        </div>

        <div className="text-7xl">⚡</div>
      </section>

      {/* TOP CATEGORIES */}
      <section>
        <h2 className="text-3xl font-bold mb-8">
          Top Categories
        </h2>

        <div className="grid grid-cols-3 gap-6">

          {categories.map((cat, index) => (
            <Link
              key={index}
              to={cat.route}
              className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition text-center"
            >
              <div className="text-4xl mb-4">
                {cat.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {cat.name}
              </h3>
            </Link>
          ))}

        </div>
      </section>

      {/* FEATURED BRANDS */}
      <section>
        <h2 className="text-3xl font-bold mb-8">
          Featured Brands
        </h2>

        <div className="grid grid-cols-6 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800"
            >
              {brand}
            </div>
          ))}

        </div>
      </section>

      {/* TRENDING GADGETS */}
      <section>
        <h2 className="text-3xl font-bold mb-8">
          Trending Gadgets
        </h2>

        <div className="grid grid-cols-3 gap-6">

          {trending.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800"
            >
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* FLASH DEALS */}
      <section>
        <h2 className="text-3xl font-bold mb-8">
          Flash Deals
        </h2>

        <div className="grid grid-cols-3 gap-6">

          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-red-500 p-6 rounded-xl text-white"
            >
              <h3 className="text-lg font-semibold">
                {deal.name}
              </h3>

              <p className="text-sm">
                {deal.discount}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default TopCategories;
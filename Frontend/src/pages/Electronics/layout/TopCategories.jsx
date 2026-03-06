import React from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowUpRight, ShoppingCart } from "lucide-react";

const categories = [
  { name: "Smartphones", icon: "📱", route: "/electronics/smartphones" },
  { name: "Laptops", icon: "💻", route: "/electronics/laptops" },
  { name: "Headphones", icon: "🎧", route: "/electronics/headphones" },
  { name: "Cameras", icon: "📷", route: "/electronics/cameras" },
  { name: "Gaming", icon: "🎮", route: "/electronics/gaming" },
  { name: "Smart Home", icon: "🏠", route: "/electronics/smart-home" }
];

const brands = ["Apple", "Samsung", "Sony", "Dell", "HP", "Canon"];

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
    <div className="space-y-16 p-6 lg:p-10 text-slate-200">
      
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 to-indigo-100 border border-gray-200 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-lg transform transition-colors duration-300 hover:bg-linear-to-br hover:from-blue-100 hover:to-indigo-200">

  <div className="relative z-10 max-w-xl">

    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-blue-200">
      <Zap size={14} /> Flash Sale Live
    </div>

    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
      Upgrade Your <span className="text-blue-600">Tech Life</span>
    </h1>

    <p className="text-gray-600 text-lg mb-8">
      Discover the next generation of electronics and smart devices designed for modern lifestyles.
    </p>

    <Link
      to="/electronics/trending"
      className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-md transition-all duration-300 flex items-center gap-2 w-fit"
    >
      Explore Gadgets <ArrowUpRight size={20} />
    </Link>

  </div>

  {/* Decorative icon */}
  <div className="text-7xl opacity-20 select-none">
    ⚡
  </div>

</section>

      {/* TOP CATEGORIES - Card Grid */}
      <section>

  <h2 className="text-2xl font-semibold mb-10 flex items-center gap-3 text-gray-800">
    <span className="h-8 w-1 bg-blue-600 rounded-full"></span>
    Top Categories
  </h2>

  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

    {categories.map((cat, index) => (
      <Link
        key={index}
        to={cat.route}
        className="group relative bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center overflow-hidden"
      >

        {/* hover gradient glow */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-100/40 to-indigo-100/20 opacity-0 group-hover:opacity-100 transition"></div>

        {/* icon */}
        <div className="relative z-10 text-5xl mb-4 transform group-hover:scale-110 transition">
          {cat.icon}
        </div>

        {/* title */}
        <h3 className="relative z-10 text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition">
          {cat.name}
        </h3>

      </Link>
    ))}

  </div>

</section>

      {/* FEATURED BRANDS - Pill style */}
   <section>

  <h2 className="text-2xl font-semibold mb-10 flex items-center gap-3 text-gray-800">
    <span className="h-8 w-1 bg-blue-500 rounded-full"></span>
    Featured Brands
  </h2>

  <div className="grid grid-cols-3 md:grid-cols-6 gap-5">

    {brands.map((brand, index) => {

      const colors = [
        "from-blue-100 to-blue-50 text-blue-700",
        "from-indigo-100 to-indigo-50 text-indigo-700",
        "from-purple-100 to-purple-50 text-purple-700",
        "from-pink-100 to-pink-50 text-pink-700",
        "from-green-100 to-green-50 text-green-700",
        "from-orange-100 to-orange-50 text-orange-700"
      ];

      return (
        <div
          key={index}
          className={`group bg-linear-to-br ${colors[index % colors.length]} border border-gray-200 p-4 rounded-xl text-center font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
        >

          <span className="group-hover:scale-110 inline-block transition-transform">
            {brand}
          </span>

        </div>
      );

    })}

  </div>

</section>

      {/* TRENDING GADGETS & FLASH DEALS - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* TRENDING */}
        <section>

  <h2 className="text-2xl font-semibold mb-10 flex items-center gap-3 text-gray-800">
    <span className="h-8 w-1 bg-emerald-500 rounded-full"></span>
    Trending Gadgets
  </h2>

  <div className="space-y-4">

    {trending.map((item, index) => (

      <div
        key={index}
        className="group relative bg-white border border-gray-200 p-5 rounded-xl flex items-center justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
      >

        {/* gradient hover background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition"></div>

        {/* gadget name */}
        <span className="relative z-10 font-medium text-gray-700 group-hover:text-blue-600 transition">
          {item}
        </span>

        {/* arrow icon */}
        <ArrowUpRight
          size={18}
          className="relative z-10 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
        />

      </div>

    ))}

  </div>

</section>

        {/* FLASH DEALS */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
            <span className="h-8 w-1 bg-rose-500 rounded-full "></span>
            Flash Deals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-linear-to-br from-rose-500 to-orange-600 p-6 rounded-2xl text-white shadow-lg shadow-rose-500/20 group"
              >
                <div className="absolute -right-4 -bottom-4 bg-white/10 p-4 rounded-full group-hover:scale-125 transition-transform">
                    <ShoppingCart size={40} className="opacity-20" />
                </div>
                <h3 className="text-xl font-black mb-1">{deal.discount}</h3>
                <p className="text-rose-100 font-medium">{deal.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopCategories;
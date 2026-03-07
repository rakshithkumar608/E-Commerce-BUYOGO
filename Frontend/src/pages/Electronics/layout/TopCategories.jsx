import { Link } from "react-router-dom";
import { 
  Zap, 
  ArrowUpRight, 
  ShoppingCart, 
  Smartphone, 
  Laptop, 
  Headphones, 
  Camera, 
  Gamepad2, 
  Home, 
  TrendingUp, 
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const categories = [
  { 
    name: "Smartphones",
    route: "/electronics/smartphones",
    icon: <Smartphone size={20} />, 
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800" 
    },

  { 
    name: "Laptops", 
    route: "/electronics/laptops",
    icon: <Laptop size={20} />, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },
  { 
    name: "Headphones", 
    route: "/electronics/headphones",
    icon: <Headphones size={20} />, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800" },
  { 
    name: "Cameras", 
    route: "/electronics/cameras",
    icon: <Camera size={20} />, image: "https://images.unsplash.com/photo-1519183071298-a2962eadc2f7?w=800" },
  { 
    name: "Gaming", 
    route: "/electronics/laptops",
    icon: <Gamepad2 size={20} />, image: "https://images.unsplash.com/photo-1606813909355-d5f4d5a2f9f3?w=800" },
  { 
    name: "Smart Home", 
    route: "/electronics/smartphones",
    icon: <Home size={20} />, image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800" }
];

const brands = ["Apple", "Samsung", "Sony", "Dell", "HP", "Canon", "Logitech", "Asus"];

const trending = [
  { name: "iPhone 15 Pro", price: "$999", tag: "Hot" },
  { name: "MacBook Pro M3", price: "$1599", tag: "New" },
  { name: "PlayStation 5", price: "$499", tag: "Sold Out" },
  { name: "Sony WH1000XM5", price: "$349", tag: "Top Rated" },
  { name: "DJI Pocket 3", price: "$519", tag: "Trending" },
  { name: "Galaxy Watch 6", price: "$299", tag: "Sale" }
];

const deals = [
  { name: "Gaming Headset G-Pro", discount: "20% OFF", color: "from-blue-600 to-indigo-700" },
  { name: "Vertical Laptop Stand", discount: "30% OFF", color: "from-purple-600 to-pink-600" },
  { name: "Smartwatch Series X", discount: "15% OFF", color: "from-emerald-500 to-teal-700" }
];

// --- STYLES ---
const marqueeStyle = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 20s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`;



const  TopCategories = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <style>{marqueeStyle}</style>
      
 

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* HERO SECTION */}
        <section className="relative group">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 min-h-125 flex items-center shadow-2xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600" 
                className="w-full h-full object-cover opacity-40 scale-105 group-hover:scale-100 transition-transform duration-1000"
                alt="Tech background"
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
            </div>

            <div className="relative z-10 px-8 md:px-16 max-w-2xl space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              >
                <Zap size={14} className="fill-current" /> Next Gen Technology
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
              >
                Elevate Your <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Digital Realm</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed"
              >
                Experience the future today with our curated selection of high-performance gadgets and smart systems.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link
                to="/electronics/trending"
                 className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/20">
                  Shop Now <ArrowUpRight size={20} />
                </Link>
               
              </motion.div>
            </div>
          </div>
        </section>

        {/* MARQUEE CATEGORIES */}
    <section className="space-y-8">

  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
      <span className="h-8 w-1.5 bg-blue-600 rounded-full"></span>
      Browse Categories
    </h2>

    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
      View All 
      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
    </button>
  </div>

  <div className="overflow-hidden relative -mx-4 sm:-mx-6 lg:-mx-8">

    <div className="animate-marquee flex py-4">

      {[...categories, ...categories].map((cat, idx) => (

        <div key={idx} className="px-3">

          {/* Link wraps entire card */}
          <Link
            to={cat.route}
            className="relative block w-64 h-48 rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200"
          >

            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-5 left-5 text-white flex items-center gap-3">

              <div className="p-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
                {cat.icon}
              </div>

              <span className="font-bold text-lg">
                {cat.name}
              </span>

            </div>

          </Link>

        </div>

      ))}

    </div>

  </div>

</section>

        {/* BRANDS GRID */}
        <section className="relative bg-linear-to-br from-blue-50 to-white rounded-[2.5rem] p-12 border border-slate-200 shadow-lg overflow-hidden">

  {/* subtle background glow */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/30 blur-[120px] rounded-full"></div>
  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-200/30 blur-[120px] rounded-full"></div>

  <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-[0.25em] mb-12">
    Trusted by Global Leaders
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 relative z-10">

    {brands.map((brand) => (
      <div
        key={brand}
        className="
        group
        bg-white
        border border-slate-200
        rounded-xl
        py-4
        px-4
        text-center
        font-black
        text-lg
        text-slate-400
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        hover:text-blue-600
        hover:border-blue-200
        transition-all
        duration-300
        cursor-pointer
        select-none
        "
      >
        <span className="group-hover:scale-110 inline-block transition-transform duration-300">
          {brand}
        </span>
      </div>
    ))}

  </div>

</section>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* TRENDING GADGETS */}
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="h-8 w-1.5 bg-emerald-500 rounded-full"></span>
                Trending Now
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trending.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 rounded-3xl border border-slate-200 flex items-center justify-between group cursor-pointer hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">{item.tag}</span>
                      </div>
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <p className="text-blue-600 font-bold">{item.price}</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ChevronRight size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FLASH DEALS */}
          <section className="lg:col-span-4 space-y-6">
             <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="h-8 w-1.5 bg-rose-500 rounded-full"></span>
              Flash Deals
            </h2>

            <div className="space-y-4">
              {deals.map((deal, idx) => (
                <div 
                  key={idx} 
                  className={`relative overflow-hidden p-6 rounded-4xl text-white bg-linear-to-br ${deal.color} shadow-lg group cursor-pointer`}
                >
                  <div className="absolute right-[-10%] bottom-[-10%] opacity-20 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                    <ShoppingCart size={120} />
                  </div>
                  
                  <div className="relative z-10 space-y-1">
                    <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Limited Time</span>
                    <h3 className="text-3xl font-black">{deal.discount}</h3>
                    <p className="text-white/80 font-medium text-lg">{deal.name}</p>
                    
                    <button className="mt-4 text-xs font-bold flex items-center gap-1 hover:underline">
                      Shop Deal <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
             
            </div>
          </section>

        </div>
      </main>

    </div>
  );
};

export default TopCategories;
import React, { useMemo } from "react";
import { useProducts } from "../../../hooks/useProducts";
import SportsProductCard from "../components/SportsProductCard";
import { Tag, ArrowRight, Zap } from "lucide-react";

const dealBanners = [
  { label: "Running Gear", discount: "30% OFF", color: "#D02020", shape: "circle" },
  { label: "Gym Equipment", discount: "25% OFF", color: "#1040C0", shape: "square" },
  { label: "Outdoor Gear", discount: "20% OFF", color: "#F0C020", shape: "rotated" },
  { label: "Yoga Essentials", discount: "15% OFF", color: "#D02020", shape: "circle" },
];

const flashDeals = [
  { name: "Nike Air Zoom Pegasus 41", price: 129.99, originalPrice: 179.99, discount: "28%", color: "#D02020",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
  { name: "Adjustable Dumbbell Set", price: 349.99, originalPrice: 449.99, discount: "22%", color: "#1040C0",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600" },
  { name: "Trail Hiking Boots", price: 179.99, originalPrice: 239.99, discount: "25%", color: "#F0C020",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600" },
  { name: "Premium Yoga Mat 6mm", price: 49.99, originalPrice: 69.99, discount: "28%", color: "#D02020",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600" },
  { name: "GPS Running Watch", price: 249.99, originalPrice: 349.99, discount: "28%", color: "#1040C0",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
  { name: "Official Match Football", price: 49.99, originalPrice: 69.99, discount: "28%", color: "#F0C020",
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=600" },
];

const SportsDeals = () => {
  const { filteredProducts: runningProducts, handleAddToCart } = useProducts("running");
  const { filteredProducts: gymProducts } = useProducts("gym");

  const liveDeals = useMemo(() => {
    return [...runningProducts.slice(0, 3), ...gymProducts.slice(0, 3)];
  }, [runningProducts, gymProducts]);

  return (
    <div className="bh-bg bh-animate-entrance min-h-screen">

      {/* ── HERO ── */}
      <div className="relative h-64 overflow-hidden bh-section-divider">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600" alt="Deals" className="absolute inset-0 w-full h-full object-cover grayscale" />
        <div className="absolute inset-0" style={{ background: "#D02020", opacity: 0.85 }} />
        <div className="absolute inset-0 bh-dot-grid" />
        {/* Decorative shapes */}
        <div className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-20 bg-white" />
        <div className="absolute bottom-6 left-6 w-12 h-12 rotate-45 opacity-20 bg-white" />

        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="space-y-3 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-black bg-white" style={{ color: "#D02020" }}>
                <Zap size={22} fill="currentColor" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Flash Deals</span>
            </div>
            <h1 className="bh-section-title text-4xl md:text-6xl text-white">
              Grab the<br /><span style={{ color: "#F0C020" }}>Deal</span>
            </h1>
            <p className="text-xs font-bold uppercase tracking-widest opacity-70">Limited time — act fast</p>
          </div>
        </div>
      </div>

      {/* ── DEAL BANNERS ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dealBanners.map((d) => (
            <div
              key={d.label}
              className="relative overflow-hidden p-5 cursor-pointer group"
              style={{
                background: d.color,
                border: "2px solid #121212",
                boxShadow: "4px 4px 0px 0px #121212",
                color: d.color === "#F0C020" ? "#121212" : "white",
                transition: "transform 0.2s ease-out",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {/* Decorative corner */}
              <div className="absolute top-2 right-2">
                {d.shape === "circle" && <div className="w-3 h-3 rounded-full bg-white opacity-40" />}
                {d.shape === "square" && <div className="w-3 h-3 bg-white opacity-40" />}
                {d.shape === "rotated" && <div className="w-3 h-3 rotate-45 opacity-40" style={{ background: "#121212" }} />}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">{d.label}</p>
              <p className="font-black text-xl uppercase tracking-tighter">{d.discount}</p>
              <div className="flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                Shop <ArrowRight size={11} />
              </div>
            </div>
          ))}
        </div>

        {/* ── FLASH DEAL CARDS ── */}
        <div>
          <h2 className="bh-section-title text-2xl md:text-3xl mb-8">Today's Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashDeals.map((deal, idx) => (
              <div key={idx} className="bh-card group">
                {/* Discount badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1"
                    style={{
                      background: deal.color,
                      color: deal.color === "#F0C020" ? "#121212" : "white",
                      border: "2px solid #121212",
                    }}
                  >
                    -{deal.discount}
                  </span>
                </div>

                {/* Corner deco */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="w-3 h-3" style={{ background: deal.color, borderRadius: idx % 2 === 0 ? "50%" : "0" }} />
                </div>

                {/* Image */}
                <div className="overflow-hidden border-b-4 border-black" style={{ height: 180 }}>
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-sm uppercase tracking-tight">{deal.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xl" style={{ color: deal.color }}>
                      ${deal.price}
                    </span>
                    <span className="text-sm line-through" style={{ color: "#999" }}>
                      ${deal.originalPrice}
                    </span>
                  </div>
                  <button
                    className="bh-btn w-full justify-center"
                    style={{
                      background: deal.color,
                      color: deal.color === "#F0C020" ? "#121212" : "white",
                      border: "2px solid #121212",
                      boxShadow: "4px 4px 0px 0px #121212",
                    }}
                  >
                    <Tag size={13} />
                    Grab Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── LIVE DEALS FROM DB ── */}
        {liveDeals.length > 0 && (
          <div>
            <h2 className="bh-section-title text-2xl md:text-3xl mb-8">On Sale Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveDeals.map((item, i) => (
                <SportsProductCard key={item._id} item={item} handleAddToCart={handleAddToCart} index={i} accentColor={["#D02020", "#1040C0", "#F0C020"][i % 3]} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsDeals;

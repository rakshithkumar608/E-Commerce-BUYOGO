import React, { useMemo } from "react";
import { useProducts } from "../../../hooks/useProducts";
import StoreProductCard from "../components/StoreProductCard";
import { Tag, Zap, Clock, ArrowUpRight } from "lucide-react";

const deals = [
  { category: "men", label: "Men's Deals", accent: "#F7931A", discount: "UP TO 30% OFF" },
  { category: "women", label: "Women's Deals", accent: "#FFD600", discount: "UP TO 25% OFF" },
  { category: "streetwear", label: "Street Drops", accent: "#EA580C", discount: "UP TO 20% OFF" },
  { category: "accessories", label: "Accessories", accent: "#FFD600", discount: "UP TO 15% OFF" },
];

const flashDeals = [
  { name: "Oversized Graphic Hoodie", price: 79.99, originalPrice: 109.99, discount: "27%", accent: "#EA580C",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600" },
  { name: "Classic Leather Watch", price: 129.99, originalPrice: 179.99, discount: "27%", accent: "#FFD600",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600" },
  { name: "High-Top Sneakers - White", price: 119.99, originalPrice: 159.99, discount: "25%", accent: "#F7931A",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600" },
  { name: "Distressed Denim Jacket", price: 109.99, originalPrice: 149.99, discount: "26%", accent: "#EA580C",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600" },
  { name: "Sterling Silver Bracelet", price: 59.99, originalPrice: 89.99, discount: "33%", accent: "#FFD600",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600" },
  { name: "Windbreaker - Neon", price: 89.99, originalPrice: 129.99, discount: "30%", accent: "#F7931A",
    image: "https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?w=600" },
];

// Use the men category as a "deals" data source (reusing hook)
const DealsSection = () => {
  const { filteredProducts: menProducts, handleAddToCart } = useProducts("men");
  const { filteredProducts: womenProducts } = useProducts("women");

  // Pick a few top-rated from each for the "deals" grid
  const dealsProducts = useMemo(() => {
    const men = menProducts.slice(0, 3);
    const women = womenProducts.slice(0, 3);
    return [...men, ...women];
  }, [menProducts, womenProducts]);

  return (
    <div className="store-bg store-animate-entrance min-h-screen">

      {/* ── HERO ──────────────────────────────────────── */}
      <div className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600"
          alt="Flash Deals"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(3,3,4,0.97), rgba(3,3,4,0.7), rgba(3,3,4,0.3))",
          }}
        />
        <div className="absolute inset-0 store-grid-bg opacity-40" />
        {/* Multiple glows */}
        <div className="absolute left-1/4 top-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "#F7931A", filter: "blur(60px)" }} />
        <div className="absolute right-1/4 bottom-0 w-48 h-48 rounded-full opacity-10"
          style={{ background: "#FFD600", filter: "blur(50px)" }} />
        <div className="store-corner-tl" />
        <div className="store-corner-br" />

        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(247,147,26,0.15)",
                  border: "1px solid rgba(247,147,26,0.4)",
                  color: "#F7931A",
                }}
              >
                <Zap size={22} fill="currentColor" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: "#F7931A" }}>
                Flash Deals
              </span>
            </div>
            <h1
              className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              Limited Time{" "}
              <span className="store-gradient-text">Offers</span>
            </h1>
            <div className="flex items-center gap-2">
              <Clock size={14} style={{ color: "#F7931A" }} />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#F7931A" }}>
                Deal of the day — ends soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── DEAL BANNERS ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map((d) => (
            <div
              key={d.category}
              className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between cursor-pointer group"
              style={{
                background: `linear-gradient(135deg, ${d.accent}15 0%, #0F1115 100%)`,
                border: `1px solid ${d.accent}25`,
                minHeight: 120,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${d.accent}50`;
                e.currentTarget.style.boxShadow = `0 0 24px -8px ${d.accent}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${d.accent}25`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="absolute right-0 bottom-0 w-24 h-24 rounded-full opacity-10"
                style={{ background: d.accent, filter: "blur(20px)" }}
              />
              <div>
                <p
                  className="font-mono text-[9px] font-bold uppercase tracking-widest mb-1"
                  style={{ color: d.accent }}
                >
                  {d.label}
                </p>
                <p
                  className="font-heading font-bold text-xl text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {d.discount}
                </p>
              </div>
              <div
                className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider mt-2 group-hover:gap-2 transition-all"
                style={{ color: d.accent }}
              >
                Shop <ArrowUpRight size={11} />
              </div>
            </div>
          ))}
        </div>

        {/* ── FLASH DEAL PRODUCT CARDS (static) ──────── */}
        <div>
          <h2 className="store-section-title text-2xl mb-8">Today's Flash Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashDeals.map((deal, idx) => (
              <div
                key={idx}
                className="store-card group relative overflow-hidden"
              >
                {/* Discount badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background: `${deal.accent}20`,
                      border: `1px solid ${deal.accent}50`,
                      color: deal.accent,
                    }}
                  >
                    -{deal.discount}
                  </span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(15,17,21,1) 0%, rgba(15,17,21,0.2) 50%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <h3
                    className="font-heading font-semibold text-base text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {deal.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono font-bold text-xl"
                      style={{
                        background: `linear-gradient(to right, ${deal.accent}, #FFD600)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      ${deal.price}
                    </span>
                    <span
                      className="font-mono text-sm line-through"
                      style={{ color: "rgba(148,163,184,0.5)" }}
                    >
                      ${deal.originalPrice}
                    </span>
                  </div>
                  <button
                    className="store-btn w-full justify-center"
                    style={{
                      background: `linear-gradient(to right, ${deal.accent}dd, ${deal.accent})`,
                      boxShadow: `0 0 16px -5px ${deal.accent}60`,
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

        {/* ── LIVE PRODUCT DEALS ──────────────────────── */}
        {dealsProducts.length > 0 && (
          <div>
            <h2 className="store-section-title text-2xl mb-8">
              On Sale Now
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealsProducts.map((item) => (
                <StoreProductCard
                  key={item._id}
                  item={item}
                  handleAddToCart={handleAddToCart}
                  accentColor="#F7931A"
                  accentGold="#FFD600"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealsSection;

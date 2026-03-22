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

/* ─── DATA ─────────────────────────────────────────── */
const categories = [
  {
    name: "Smartphones",
    route: "/electronics/smartphones",
    icon: <Smartphone size={20} />,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    accent: "var(--accent-cyan)",
  },
  {
    name: "Laptops",
    route: "/electronics/laptops",
    icon: <Laptop size={20} />,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    accent: "var(--accent-green)",
  },
  {
    name: "Headphones",
    route: "/electronics/headphones",
    icon: <Headphones size={20} />,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    accent: "var(--accent-amber)",
  },
  {
    name: "Cameras",
    route: "/electronics/cameras",
    icon: <Camera size={20} />,
    image: "https://images.unsplash.com/photo-1519183071298-a2962eadc2f7?w=800",
    accent: "var(--accent-magenta)",
  },
  {
    name: "Gaming",
    route: "/electronics/laptops",
    icon: <Gamepad2 size={20} />,
    image: "https://images.unsplash.com/photo-1606813909355-d5f4d5a2f9f3?w=800",
    accent: "var(--accent-red)",
  },
  {
    name: "Smart Home",
    route: "/electronics/smartphones",
    icon: <Home size={20} />,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    accent: "var(--accent-blue)",
  },
];

const brands = [
  "Apple", "Samsung", "Sony", "Dell", "HP", "Canon", "Logitech", "Asus",
];

const trending = [
  { name: "iPhone 15 Pro", price: "$999", tag: "Hot" },
  { name: "MacBook Pro M3", price: "$1599", tag: "New" },
  { name: "PlayStation 5", price: "$499", tag: "Sold Out" },
  { name: "Sony WH1000XM5", price: "$349", tag: "Top Rated" },
  { name: "DJI Pocket 3", price: "$519", tag: "Trending" },
  { name: "Galaxy Watch 6", price: "$299", tag: "Sale" },
];

const deals = [
  { name: "Gaming Headset G-Pro", discount: "20% OFF", accent: "var(--accent-blue)" },
  { name: "Vertical Laptop Stand", discount: "30% OFF", accent: "var(--accent-magenta)" },
  { name: "Smartwatch Series X", discount: "15% OFF", accent: "var(--accent-green)" },
];

/* ─── MARQUEE KEYFRAMES ──────────────────────────── */
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

/* ─── COMPONENT ──────────────────────────────────── */
const TopCategories = () => {
  return (
    <div className="min-h-screen industrial-bg">
      <style>{marqueeStyle}</style>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 sm:space-y-16 animate-entrance">

        {/* ─── HERO SECTION ──────────────────────────── */}
        <section className="relative group">
          <div
            className="relative overflow-hidden rounded-2xl min-h-[280px] sm:min-h-[360px] md:min-h-[420px] flex items-center"
            style={{
              boxShadow: "var(--shadow-floating)",
              border: "1px solid var(--elec-border)",
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600"
                className="w-full h-full object-cover opacity-30 scale-105 group-hover:scale-100 transition-transform duration-1000"
                alt="Tech background"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(10,10,15,0.97), rgba(10,10,15,0.8), rgba(10,10,15,0.4))",
                }}
              />
            </div>

            {/* Scanline */}
            <div className="absolute inset-0 scanline-screen pointer-events-none z-[1] opacity-30" />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                animation: "heroPulse 4s ease-in-out infinite",
              }}
            />

            <div className="relative z-10 px-6 sm:px-8 md:px-16 py-8 sm:py-12 max-w-2xl space-y-4 sm:space-y-6">
              <div className="elec-badge">
                <Zap size={14} fill="currentColor" />
                Next Gen Technology
              </div>

              <h1
                className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight"
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                  letterSpacing: "-0.03em",
                }}
              >
                Elevate Your <br />
                <span className="elec-gradient-text">Digital Realm</span>
              </h1>

              <p
                className="text-sm sm:text-lg md:text-xl max-w-md leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Experience the future today with our curated selection of
                high-performance gadgets and smart systems.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 sm:pt-4">
                <Link
                  to="/electronics/trending"
                  className="mechanical-key px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2"
                  style={{
                    background: "var(--accent-cyan)",
                    boxShadow: "0 4px 20px rgba(0,210,255,0.3)",
                    fontSize: "12px",
                    borderRadius: "14px",
                  }}
                >
                  Shop Now <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MARQUEE CATEGORIES ──────────────────────── */}
        <section className="space-y-6 sm:space-y-8">
          <div className="flex items-center justify-between">
            <h2
              className="text-xl sm:text-2xl font-bold flex items-center gap-3"
              style={{ color: "var(--elec-text)" }}
            >
              <span
                className="h-6 sm:h-8 w-1.5 rounded-full"
                style={{ background: "var(--accent-cyan)" }}
              />
              Browse Categories
            </h2>

            <button
              className="text-xs sm:text-sm font-bold flex items-center gap-1 group font-mono uppercase tracking-wider"
              style={{ color: "var(--accent-cyan)" }}
            >
              View All
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="overflow-hidden relative -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="animate-marquee flex py-4">
              {[...categories, ...categories].map((cat, idx) => (
                <div key={idx} className="px-2 sm:px-3">
                  <Link
                    to={cat.route}
                    className="relative block w-48 sm:w-64 h-36 sm:h-48 rounded-2xl overflow-hidden group cursor-pointer"
                    style={{
                      border: "1px solid var(--elec-border)",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    {/* Image */}
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(10,10,15,0.95), rgba(10,10,15,0.3), transparent)",
                      }}
                    />

                    {/* Content */}
                    <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 text-white flex items-center gap-3">
                      <div
                        className="p-2 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {cat.icon}
                      </div>
                      <span className="font-bold text-sm sm:text-lg">{cat.name}</span>
                    </div>

                    {/* Accent dot */}
                    <div
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 rounded-full animate-led-pulse"
                      style={{
                        background: cat.accent,
                        boxShadow: `0 0 8px ${cat.accent}`,
                      }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BRANDS GRID ────────────────────────────── */}
        <section
          className="relative rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden"
          style={{
            background: "var(--elec-card)",
            border: "1px solid var(--elec-border)",
          }}
        >
          <p
            className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-8 sm:mb-12 font-mono"
            style={{ color: "var(--elec-text-muted)" }}
          >
            Trusted by Global Leaders
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6 relative z-10">
            {brands.map((brand) => (
              <div
                key={brand}
                className="group py-3 sm:py-4 px-3 sm:px-4 text-center font-black text-sm sm:text-lg cursor-pointer select-none rounded-xl transition-all duration-300"
                style={{
                  background: "var(--elec-surface)",
                  border: "1px solid var(--elec-border)",
                  color: "var(--elec-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,210,255,0.3)";
                  e.currentTarget.style.color = "var(--accent-cyan)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(0,210,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--elec-border)";
                  e.currentTarget.style.color = "var(--elec-text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="inline-block transition-transform duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── TWO COLUMN GRID ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* TRENDING GADGETS */}
          <section className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <h2
                className="text-xl sm:text-2xl font-bold flex items-center gap-3"
                style={{ color: "var(--elec-text)" }}
              >
                <span
                  className="h-6 sm:h-8 w-1.5 rounded-full"
                  style={{ background: "var(--accent-green)" }}
                />
                Trending Now
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {trending.map((item, idx) => (
                <div
                  key={idx}
                  className="industrial-panel p-4 sm:p-5 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        background: "var(--elec-surface)",
                        border: "1px solid var(--elec-border)",
                        color: "var(--elec-text-muted)",
                      }}
                    >
                      <TrendingUp size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded font-mono"
                          style={{
                            background: "rgba(0,210,255,0.1)",
                            border: "1px solid rgba(0,210,255,0.15)",
                            color: "var(--accent-cyan)",
                          }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <h3
                        className="font-bold text-sm sm:text-base truncate"
                        style={{ color: "var(--elec-text)" }}
                      >
                        {item.name}
                      </h3>
                      <p className="font-bold font-mono text-sm" style={{ color: "var(--accent-cyan)" }}>
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div
                    className="p-2 rounded-full transition-all shrink-0"
                    style={{
                      background: "var(--elec-surface)",
                      border: "1px solid var(--elec-border)",
                    }}
                  >
                    <ChevronRight size={16} style={{ color: "var(--elec-text-muted)" }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FLASH DEALS */}
          <section className="lg:col-span-4 space-y-4 sm:space-y-6">
            <h2
              className="text-xl sm:text-2xl font-bold flex items-center gap-3"
              style={{ color: "var(--elec-text)" }}
            >
              <span
                className="h-6 sm:h-8 w-1.5 rounded-full"
                style={{ background: "var(--accent-red)" }}
              />
              Flash Deals
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {deals.map((deal, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden p-5 sm:p-6 rounded-2xl text-white group cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${deal.accent}, rgba(10,10,15,0.95))`,
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Background icon */}
                  <div className="absolute right-[-10%] bottom-[-10%] opacity-10 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                    <ShoppingCart size={100} />
                  </div>

                  <div className="relative z-10 space-y-1">
                    <span
                      className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full font-mono"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      Limited Time
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black">{deal.discount}</h3>
                    <p className="text-white/80 font-medium text-base sm:text-lg">{deal.name}</p>

                    <button className="mt-3 sm:mt-4 text-xs font-bold flex items-center gap-1 hover:underline font-mono uppercase">
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
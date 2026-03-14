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

// --- DATA ---
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
  "Apple",
  "Samsung",
  "Sony",
  "Dell",
  "HP",
  "Canon",
  "Logitech",
  "Asus",
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

const TopCategories = () => {
  return (
    <div className="min-h-screen industrial-bg">
      <style>{marqueeStyle}</style>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 animate-entrance">
        {/* ─── HERO SECTION ───────────────────────────────────────── */}
        <section className="relative group">
          <div
            className="relative overflow-hidden rounded-2xl min-h-112 flex items-center"
            style={{ boxShadow: "var(--shadow-floating)" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600"
                className="w-full h-full object-cover opacity-40 grayscale scale-105 group-hover:scale-100 transition-transform duration-1000"
                alt="Tech background"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, rgba(45,52,54,0.95), rgba(45,52,54,0.7), transparent)" }}
              />
            </div>

            {/* Scanline */}
            <div className="absolute inset-0 scanline-screen pointer-events-none z-1" />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-1"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                animation: "heroPulse 4s ease-in-out infinite",
              }}
            />

            <div className="relative z-10 px-8 md:px-16 max-w-2xl space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-mono"
                style={{
                  background: "rgba(0,210,255,0.1)",
                  border: "1px solid rgba(0,210,255,0.2)",
                  color: "var(--accent-cyan)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Zap size={14} fill="currentColor" />
                Next Gen Technology
              </div>

              <h1
                className="text-5xl md:text-7xl font-black text-white leading-tight"
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  letterSpacing: "-0.03em",
                }}
              >
                Elevate Your <br />
                <span style={{ color: "var(--accent-cyan)" }}>Digital Realm</span>
              </h1>

              <p
                className="text-lg md:text-xl max-w-md leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Experience the future today with our curated selection of
                high-performance gadgets and smart systems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/electronics/trending"
                  className="mechanical-key px-8 py-4 flex items-center gap-2"
                  style={{
                    background: "var(--accent-cyan)",
                    boxShadow: "4px 4px 12px rgba(0,210,255,0.3), -2px -2px 4px rgba(255,255,255,0.1)",
                    fontSize: "13px",
                    borderRadius: "14px",
                  }}
                >
                  Shop Now <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MARQUEE CATEGORIES ─────────────────────────────────── */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
              <span
                className="h-8 w-1.5 rounded-full"
                style={{ background: "var(--accent-cyan)" }}
              />
              Browse Categories
            </h2>

            <button
              className="text-sm font-bold flex items-center gap-1 group font-mono uppercase tracking-wider"
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
                <div key={idx} className="px-3">
                  <Link
                    to={cat.route}
                    className="relative block w-64 h-48 rounded-2xl overflow-hidden group cursor-pointer industrial-panel"
                  >
                    {/* Image */}
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(45,52,54,0.9), rgba(45,52,54,0.2), transparent)",
                      }}
                    />

                    {/* Content */}
                    <div className="absolute bottom-5 left-5 text-white flex items-center gap-3">
                      <div
                        className="p-2 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      >
                        {cat.icon}
                      </div>
                      <span className="font-bold text-lg">{cat.name}</span>
                    </div>

                    {/* Accent dot */}
                    <div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full animate-led-pulse"
                      style={{
                        background: cat.accent,
                        boxShadow: `0 0 6px ${cat.accent}`,
                      }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BRANDS GRID ────────────────────────────────────────── */}
        <section
          className="relative rounded-2xl p-12 overflow-hidden"
          style={{
            background: "var(--chassis)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <p
            className="text-center text-sm font-bold uppercase tracking-[0.25em] mb-12 font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            Trusted by Global Leaders
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 relative z-10">
            {brands.map((brand) => (
              <div
                key={brand}
                className="group py-4 px-4 text-center font-black text-lg cursor-pointer select-none rounded-xl transition-all duration-300"
                style={{
                  background: "var(--chassis)",
                  boxShadow: "var(--shadow-card)",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-recessed)";
                  e.currentTarget.style.color = "var(--accent-cyan)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span className="inline-block transition-transform duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── TWO COLUMN GRID ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TRENDING GADGETS */}
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
                <span
                  className="h-8 w-1.5 rounded-full"
                  style={{ background: "var(--accent-green)" }}
                />
                Trending Now
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trending.map((item, idx) => (
                <div
                  key={idx}
                  className="industrial-panel p-5 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors"
                      style={{
                        background: "var(--recessed)",
                        boxShadow: "var(--shadow-recessed)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded font-mono"
                          style={{
                            background: "var(--recessed)",
                            boxShadow: "var(--shadow-recessed)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {item.name}
                      </h3>
                      <p className="font-bold font-mono" style={{ color: "var(--accent-cyan)" }}>
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div
                    className="p-2 rounded-full transition-all"
                    style={{
                      background: "var(--chassis)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <ChevronRight size={18} style={{ color: "var(--text-muted)" }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FLASH DEALS */}
          <section className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
              <span
                className="h-8 w-1.5 rounded-full"
                style={{ background: "var(--accent-red)" }}
              />
              Flash Deals
            </h2>

            <div className="space-y-4">
              {deals.map((deal, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden p-6 rounded-2xl text-white group cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${deal.accent}, rgba(45,52,54,0.9))`,
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  {/* Background icon */}
                  <div className="absolute right-[-10%] bottom-[-10%] opacity-10 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                    <ShoppingCart size={120} />
                  </div>

                  <div className="relative z-10 space-y-1">
                    <span
                      className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full font-mono"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      Limited Time
                    </span>
                    <h3 className="text-3xl font-black">{deal.discount}</h3>
                    <p className="text-white/80 font-medium text-lg">{deal.name}</p>

                    <button className="mt-4 text-xs font-bold flex items-center gap-1 hover:underline font-mono uppercase">
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
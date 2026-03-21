import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Zap,
  User,
  Users,
  Shirt,
  ShoppingBasket,
  Cpu,
  Tag,
  TrendingUp,
  ShieldCheck,
  Truck,
  RefreshCw,
} from "lucide-react";

const categories = [
  {
    label: "Men",
    route: "/store/men",
    icon: <User size={22} />,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    accent: "#F7931A",
    desc: "Classic & contemporary menswear",
  },
  {
    label: "Women",
    route: "/store/women",
    icon: <Users size={22} />,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    accent: "#FFD600",
    desc: "Elegant styles for every occasion",
  },
  {
    label: "Streetwear",
    route: "/store/streetwear",
    icon: <Shirt size={22} />,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
    accent: "#EA580C",
    desc: "Urban drops for bold personalities",
  },
  {
    label: "Accessories",
    route: "/store/accessories",
    icon: <ShoppingBasket size={22} />,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
    accent: "#FFD600",
    desc: "Watches, bags, jewellery & more",
  },
  {
    label: "Electronics",
    route: "/store/electronics",
    icon: <Cpu size={22} />,
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800",
    accent: "#F7931A",
    desc: "Phones, laptops & cutting-edge gear",
  },
  {
    label: "Flash Deals",
    route: "/store/deals",
    icon: <Tag size={22} />,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
    accent: "#EA580C",
    desc: "Time-limited offers & discounts",
  },
];

const brands = [
  "Apple", "Samsung", "Nike", "Adidas", "Sony", "Gucci", "Zara", "Prada", "Asus",
  "Levis", "H&M", "Canon", "Dell", "Rolex", "Versace",
];

const features = [
  {
    icon: <Truck size={20} />,
    title: "Free Shipping",
    desc: "On orders above $99",
    accent: "#F7931A",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Secure Payments",
    desc: "256-bit encryption",
    accent: "#FFD600",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Easy Returns",
    desc: "30-day hassle-free policy",
    accent: "#EA580C",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Top Quality",
    desc: "Curated premium products",
    accent: "#F7931A",
  },
];

const MainStore = () => {
  return (
    <div className="store-bg store-animate-entrance">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Ambient glows */}
        <div
          className="store-glow-blob"
          style={{ width: 600, height: 600, top: "-20%", right: "-10%", opacity: 0.09 }}
        />
        <div
          className="store-glow-blob"
          style={{ width: 400, height: 400, bottom: "0%", left: "-5%", background: "#FFD600", opacity: 0.05 }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 store-grid-bg opacity-60" />

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1800"
            alt="Store Hero"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #030304 50%, rgba(3,3,4,0.7) 80%, rgba(3,3,4,0.3) 100%)",
            }}
          />
        </div>

        {/* Spinning orb */}
        <div
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none"
          style={{ width: 380, height: 380 }}
        >
          {/* Outer ring */}
          <div
            className="store-animate-spin-slow absolute inset-0 rounded-full"
            style={{
              border: "1px solid rgba(247,147,26,0.2)",
              boxShadow: "0 0 40px rgba(247,147,26,0.1)",
            }}
          />
          {/* Mid ring */}
          <div
            className="store-animate-spin-rev absolute inset-10 rounded-full"
            style={{
              border: "1px dashed rgba(247,147,26,0.35)",
              boxShadow: "inset 0 0 30px rgba(247,147,26,0.05)",
            }}
          />
          {/* Inner glow core */}
          <div
            className="store-animate-float absolute inset-20 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle, rgba(247,147,26,0.25) 0%, rgba(234,88,12,0.1) 50%, transparent 100%)",
              boxShadow: "0 0 60px rgba(247,147,26,0.3)",
            }}
          >
            <Zap
              size={52}
              style={{
                color: "#F7931A",
                filter: "drop-shadow(0 0 16px rgba(247,147,26,0.8))",
              }}
            />
          </div>
          {/* Orbiting dots */}
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: "#F7931A",
                boxShadow: "0 0 8px #F7931A",
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateX(165px) translate(-50%, -50%)`,
              }}
            />
          ))}
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <div className="max-w-2xl space-y-8">
            <div className="store-badge">
              <Zap size={10} fill="currentColor" />
              New Season Drop — 2026
            </div>

            <h1
              className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Shop the{" "}
              <span className="store-gradient-text block">
                Future of Fashion
              </span>
            </h1>

            <p
              className="font-body text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--muted)" }}
            >
              Premium collections across fashion, electronics &amp; accessories.
              Curated for those who demand excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/store/men" className="store-btn text-sm">
                Shop Now <ArrowUpRight size={16} />
              </Link>
              <Link to="/store/deals" className="store-btn-outline text-sm">
                View Deals
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                ["10K+", "Products"],
                ["50+", "Brands"],
                ["4.9★", "Rating"],
              ].map(([val, label]) => (
                <div key={label}>
                  <p
                    className="font-mono font-bold text-2xl"
                    style={{
                      background: "linear-gradient(to right, #F7931A, #FFD600)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {val}
                  </p>
                  <p
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ─────────────────────────────────────────── */}
      <section
        className="border-y"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0F1115" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${f.accent}18`,
                    border: `1px solid ${f.accent}40`,
                    color: f.accent,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {f.title}
                  </p>
                  <p className="font-mono text-[10px]" style={{ color: "var(--muted)" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="store-section-title text-2xl md:text-3xl">
            Browse Collections
          </h2>
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            {categories.length} Sections
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.route}
              className="group relative overflow-hidden rounded-2xl block"
              style={{
                height: "240px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,3,4,0.95) 0%, rgba(3,3,4,0.5) 60%, transparent 100%)",
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at bottom left, ${cat.accent}18 0%, transparent 70%)`,
                }}
              />

              {/* Corner accents */}
              <div className="store-corner-tl" style={{ borderColor: `${cat.accent}50` }} />
              <div className="store-corner-br" style={{ borderColor: `${cat.accent}50` }} />

              {/* Live dot */}
              <div
                className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
                style={{
                  background: cat.accent,
                  boxShadow: `0 0 8px ${cat.accent}`,
                  animation: "store-ping 2s ease-out infinite",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${cat.accent}20`,
                      border: `1px solid ${cat.accent}40`,
                      color: cat.accent,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3
                    className="font-heading font-bold text-xl text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {cat.label}
                  </h3>
                </div>
                <p
                  className="font-mono text-[11px]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {cat.desc}
                </p>
                <div
                  className="flex items-center gap-1.5 mt-3 font-mono text-[10px] uppercase tracking-wider font-bold group-hover:gap-2.5 transition-all duration-300"
                  style={{ color: cat.accent }}
                >
                  Shop Now <ArrowUpRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BRANDS MARQUEE ─────────────────────────────────────────── */}
      <section
        className="border-y overflow-hidden py-6"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0F1115" }}
      >
        <div className="store-animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="font-heading font-bold text-sm px-8 whitespace-nowrap"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: i % 3 === 0 ? "#F7931A" : "rgba(255,255,255,0.25)",
              }}
            >
              {brand}
              <span
                className="mx-8"
                style={{ color: "rgba(247,147,26,0.3)" }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* ── FULL CTA BANNER ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div
          className="relative overflow-hidden rounded-2xl p-12 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, #0F1115 0%, #1a0f00 100%)",
            border: "1px solid rgba(247,147,26,0.2)",
            boxShadow: "0 0 60px -20px rgba(247,147,26,0.3)",
          }}
        >
          {/* Glow blobs */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full opacity-20"
            style={{ background: "#F7931A", filter: "blur(60px)" }}
          />
          <div className="store-corner-tl" style={{ width: 32, height: 32 }} />
          <div className="store-corner-tr" style={{ width: 32, height: 32 }} />
          <div className="store-corner-bl" style={{ width: 32, height: 32 }} />
          <div className="store-corner-br" style={{ width: 32, height: 32 }} />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{ color: "#F7931A" }}
            >
              Limited Time Offer
            </p>
            <h2
              className="font-heading font-bold text-3xl md:text-5xl text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get{" "}
              <span className="store-gradient-text">20% OFF</span>{" "}
              Your First Order
            </h2>
            <p
              className="font-body text-base"
              style={{ color: "var(--muted)" }}
            >
              Use code{" "}
              <span
                className="font-mono font-bold px-2 py-1 rounded"
                style={{ color: "#F7931A", background: "rgba(247,147,26,0.1)" }}
              >
                BUYOGO20
              </span>{" "}
              at checkout
            </p>
            <Link to="/store/deals" className="store-btn inline-flex mx-auto">
              Claim Offer <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainStore;

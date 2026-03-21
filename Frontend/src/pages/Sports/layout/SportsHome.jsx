import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Dumbbell,
  Mountain,
  Trophy,
  Heart,
  Tag,
  Star,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";

const categories = [
  { label: "Running", route: "/sports/running", icon: <Zap size={24} />, color: "#D02020", shape: "circle",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800", desc: "Shoes, gear & apparel" },
  { label: "Gym", route: "/sports/gym", icon: <Dumbbell size={24} />, color: "#1040C0", shape: "square",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800", desc: "Weights, gear & accessories" },
  { label: "Outdoor", route: "/sports/outdoor", icon: <Mountain size={24} />, color: "#F0C020", shape: "rotated",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800", desc: "Hiking, camping & climbing" },
  { label: "Team Sports", route: "/sports/team-sports", icon: <Trophy size={24} />, color: "#D02020", shape: "circle",
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800", desc: "Football, basketball & more" },
  { label: "Yoga", route: "/sports/yoga", icon: <Heart size={24} />, color: "#1040C0", shape: "square",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", desc: "Mats, props & wellness" },
  { label: "Flash Deals", route: "/sports/deals", icon: <Tag size={24} />, color: "#F0C020", shape: "rotated",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800", desc: "Limited-time offers" },
];

const brands = ["Nike", "Adidas", "Under Armour", "Puma", "Reebok", "ASICS", "New Balance", "Columbia", "Salomon", "Manduka"];

const features = [
  { icon: <Truck size={20} />, title: "Free Shipping", desc: "On orders over $75", color: "#D02020" },
  { icon: <Shield size={20} />, title: "Quality Guarantee", desc: "100% authentic products", color: "#1040C0" },
  { icon: <RefreshCw size={20} />, title: "Easy Returns", desc: "30-day return policy", color: "#F0C020" },
  { icon: <Star size={20} />, title: "Pro Picks", desc: "Curated by athletes", color: "#D02020" },
];

const SportsHome = () => {
  return (
    <div className="bh-bg bh-animate-entrance">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] bh-section-divider overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 bh-dot-grid" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* Left text */}
          <div className="flex-1 space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2"
              style={{
                background: "#F0C020",
                border: "2px solid #121212",
                boxShadow: "3px 3px 0px 0px #121212",
              }}
            >
              <Zap size={14} />
              <span className="text-[11px] font-bold uppercase tracking-wider">New Season 2026</span>
            </div>

            <h1 className="bh-section-title text-5xl sm:text-6xl md:text-8xl">
              Gear Up
              <br />
              <span style={{ color: "#D02020" }}>Play Hard</span>
            </h1>

            <p className="text-lg font-medium leading-relaxed max-w-lg" style={{ color: "#555" }}>
              Premium sports equipment, apparel &amp; accessories for every athlete.
              From running tracks to mountain peaks.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/sports/running" className="bh-btn bh-btn-red">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/sports/deals" className="bh-btn bh-btn-outline">
                View Deals
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-col sm:flex-row sm:divide-x-2 divide-black border-2 border-black sm:inline-flex"
              style={{ boxShadow: "4px 4px 0px 0px #121212" }}
            >
              {[["200+", "Products"], ["15+", "Brands"], ["4.8★", "Rating"]].map(([val, label], i) => (
                <div key={label} className="px-6 py-3 text-center" style={{ background: i === 1 ? "#F0C020" : "white" }}>
                  <p className="font-black text-xl" style={{ color: ["#D02020", "#121212", "#1040C0"][i] }}>
                    {val}
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#888" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right geometric composition - hidden on mobile */}
          <div className="flex-1 items-center justify-center relative hidden lg:flex" style={{ minHeight: 400 }}>
            {/* Blue background panel */}
            <div
              className="absolute w-80 h-96"
              style={{
                background: "#1040C0",
                border: "4px solid #121212",
                boxShadow: "8px 8px 0px 0px #121212",
                right: 0,
                top: 20,
              }}
            />

            {/* Overlapping circle */}
            <div
              className="absolute w-48 h-48 rounded-full"
              style={{
                background: "#D02020",
                border: "4px solid #121212",
                top: 0,
                left: "10%",
                zIndex: 2,
              }}
            />

            {/* Rotated yellow square */}
            <div
              className="absolute w-32 h-32 rotate-45"
              style={{
                background: "#F0C020",
                border: "4px solid #121212",
                bottom: 30,
                left: "5%",
                zIndex: 1,
              }}
            />

            {/* Center image */}
            <div
              className="relative z-10 w-60 h-72 overflow-hidden"
              style={{
                border: "4px solid #121212",
                boxShadow: "8px 8px 0px 0px #121212",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
                alt="Sports hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small decorative triangle */}
            <div
              className="absolute"
              style={{
                width: 0, height: 0,
                borderLeft: "30px solid transparent",
                borderRight: "30px solid transparent",
                borderBottom: "52px solid #121212",
                right: "8%",
                bottom: 0,
                zIndex: 3,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP (Yellow block) ─────────────────────── */}
      <section className="bh-section-divider" style={{ background: "#F0C020" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center border-2 border-black"
                  style={{ background: "white" }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-tight">{f.title}</p>
                  <p className="text-[11px] font-medium" style={{ color: "#444" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="bh-section-title text-3xl md:text-4xl">
            Shop by Sport
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#888" }}>
            {categories.length} Sections
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              to={cat.route}
              className="group block relative overflow-hidden bh-card"
              style={{ minHeight: 240 }}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />

              {/* Overlay color */}
              <div
                className="absolute inset-0 opacity-80 group-hover:opacity-70 transition-opacity duration-300"
                style={{ background: cat.color }}
              />

              {/* Corner deco */}
              <div className="absolute top-4 right-4 z-10">
                {cat.shape === "circle" && <div className="w-4 h-4 rounded-full bg-white" />}
                {cat.shape === "square" && <div className="w-4 h-4 bg-white" />}
                {cat.shape === "rotated" && <div className="w-4 h-4 bg-white rotate-45" />}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 z-10 text-white">
                <div
                  className="w-12 h-12 flex items-center justify-center border-2 border-black mb-3"
                  style={{ background: "white", color: cat.color }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-black text-2xl uppercase tracking-tight">
                  {cat.label}
                </h3>
                <p className="text-[11px] font-medium opacity-80 mt-1">
                  {cat.desc}
                </p>
                <div className="flex items-center gap-2 mt-3 text-[11px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-200">
                  Shop Now <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BRANDS STRIP (Blue block) ─────────────────────────── */}
      <section className="bh-section-divider" style={{ background: "#1040C0" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-8">
            Trusted by Athletes Worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {brands.map((brand, i) => (
              <span
                key={brand}
                className="font-black text-lg md:text-xl uppercase tracking-tighter cursor-default"
                style={{
                  color: i % 3 === 0 ? "#F0C020" : "rgba(255,255,255,0.4)",
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER (Red block) ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div
          className="relative overflow-hidden p-10 md:p-16 text-center text-white"
          style={{
            background: "#D02020",
            border: "4px solid #121212",
            boxShadow: "8px 8px 0px 0px #121212",
          }}
        >
          {/* Decorative shapes */}
          <div className="absolute top-6 left-6 w-16 h-16 rounded-full opacity-30" style={{ background: "#F0C020" }} />
          <div className="absolute bottom-6 right-6 w-20 h-20 rotate-45 opacity-20" style={{ background: "#1040C0" }} />
          <div
            className="absolute top-8 right-8 w-0 h-0"
            style={{
              borderLeft: "16px solid transparent",
              borderRight: "16px solid transparent",
              borderBottom: "28px solid rgba(255,255,255,0.2)",
            }}
          />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "#F0C020" }}>
              Limited Time
            </p>
            <h2 className="bh-section-title text-4xl md:text-6xl text-white">
              Get 25% OFF
            </h2>
            <p className="font-medium text-base" style={{ color: "rgba(255,255,255,0.8)" }}>
              Use code{" "}
              <span
                className="font-black px-2 py-1 inline-block"
                style={{ background: "#F0C020", color: "#121212", border: "2px solid #121212" }}
              >
                SPORT25
              </span>{" "}
              at checkout
            </p>
            <Link to="/sports/deals" className="bh-btn bh-btn-yellow inline-flex mx-auto">
              Claim Offer <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsHome;

import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  ArrowUpRight,
  Zap,
} from "lucide-react";

const elecCategories = [
  {
    label: "Smartphones",
    route: "/electronics/smartphones",
    icon: <Smartphone size={28} />,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    accent: "#F7931A",
    desc: "Latest flagship phones from top brands",
    tag: "Hot",
  },
  {
    label: "Laptops",
    route: "/electronics/laptops",
    icon: <Laptop size={28} />,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    accent: "#FFD600",
    desc: "High-performance machines for every need",
    tag: "Trending",
  },
  {
    label: "Headphones",
    route: "/electronics/headphones",
    icon: <Headphones size={28} />,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    accent: "#EA580C",
    desc: "Premium audio for the discerning ear",
    tag: "New",
  },
  {
    label: "Cameras",
    route: "/electronics/cameras",
    icon: <Camera size={28} />,
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962eadc2f7?w=800",
    accent: "#F7931A",
    desc: "Capture every moment in stunning detail",
    tag: "Pro",
  },
];

const ElectronicsSection = () => {
  return (
    <div className="store-bg store-animate-entrance min-h-screen">

      {/* ── HERO ──────────────────────────────────────── */}
      <div className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600"
          alt="Electronics"
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
        <div
          className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "#F7931A", filter: "blur(80px)" }}
        />
        <div className="store-corner-tl" />
        <div className="store-corner-br" />

        {/* Spinning tech orb */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none"
          style={{ width: 160, height: 160 }}
        >
          <div
            className="store-animate-spin-slow absolute inset-0 rounded-full"
            style={{ border: "1px solid rgba(247,147,26,0.3)" }}
          />
          <div
            className="store-animate-spin-rev absolute inset-5 rounded-full"
            style={{ border: "1px dashed rgba(247,147,26,0.5)" }}
          />
          <div
            className="absolute inset-10 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(247,147,26,0.1)",
              color: "#F7931A",
            }}
          >
            <Cpu size={36} />
          </div>
        </div>

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
                <Cpu size={22} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: "#F7931A" }}>
                Electronics Hub
              </span>
            </div>
            <h1
              className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              Next-Gen{" "}
              <span className="store-gradient-text">Technology</span>
            </h1>
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              4 categories · 30+ products
            </p>
          </div>
        </div>
      </div>

      {/* ── CATEGORY CARDS ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="store-section-title text-2xl">
            Shop by Category
          </h2>
          <Link
            to="/electronics"
            className="font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300"
            style={{ color: "#F7931A" }}
          >
            Full Electronics Store <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {elecCategories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.route}
              className="group relative overflow-hidden rounded-2xl flex items-end"
              style={{
                height: "280px",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${cat.accent}40`;
                e.currentTarget.style.boxShadow = `0 0 30px -10px ${cat.accent}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Bg image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,3,4,1) 0%, rgba(3,3,4,0.6) 50%, transparent 100%)",
                }}
              />

              {/* Accent hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at bottom center, ${cat.accent}15 0%, transparent 70%)`,
                }}
              />

              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span
                  className="font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    background: `${cat.accent}20`,
                    border: `1px solid ${cat.accent}40`,
                    color: cat.accent,
                  }}
                >
                  {cat.tag}
                </span>
              </div>

              {/* Corner deco */}
              <div className="store-corner-tl" style={{ borderColor: `${cat.accent}30` }} />

              {/* Content */}
              <div className="relative p-6 w-full">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${cat.accent}15`,
                      border: `1px solid ${cat.accent}35`,
                      color: cat.accent,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2"
                    style={{
                      background: `${cat.accent}20`,
                      border: `1px solid ${cat.accent}40`,
                      color: cat.accent,
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <h3
                  className="font-heading font-bold text-2xl text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cat.label}
                </h3>
                <p
                  className="font-mono text-[11px]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Redirect CTA */}
        <div
          className="relative overflow-hidden rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #0F1115, #1a0a00)",
            border: "1px solid rgba(247,147,26,0.2)",
          }}
        >
          <div
            className="absolute right-0 top-0 w-60 h-60 rounded-full opacity-10"
            style={{ background: "#F7931A", filter: "blur(60px)" }}
          />
          <div className="relative z-10 space-y-2">
            <div className="store-badge">
              <Zap size={9} fill="currentColor" />
              Full Electronics Store
            </div>
            <h3
              className="font-heading font-bold text-2xl text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Explore All Electronics
            </h3>
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              Trending picks, deals, and more in the dedicated electronics hub
            </p>
          </div>
          <Link to="/electronics" className="store-btn relative z-10 whitespace-nowrap">
            Go to Electronics <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsSection;

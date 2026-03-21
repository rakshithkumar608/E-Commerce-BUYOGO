import { useProducts } from "../../../hooks/useProducts";
import StoreProductCard from "../components/StoreProductCard";
import { User, Shield } from "lucide-react";

const MenSection = () => {
  const {
    filteredProducts,
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    handleAddToCart,
  } = useProducts("men");

  return (
    <div className="store-bg store-animate-entrance min-h-screen">

      {/* ── HERO ──────────────────────────────────────── */}
      <div className="relative h-72 overflow-hidden">
        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1600"
          alt="Men Collection"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(3,3,4,0.95), rgba(3,3,4,0.7), rgba(3,3,4,0.4))",
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 store-grid-bg opacity-40" />
        {/* Glow blob */}
        <div
          className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "#F7931A", filter: "blur(80px)" }}
        />
        {/* Corner accents */}
        <div className="store-corner-tl" />
        <div className="store-corner-br" />

        {/* Hero content */}
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
                <User size={22} />
              </div>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "#F7931A" }}
              >
                Men's Collection
              </span>
            </div>
            <h1
              className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              Crafted for{" "}
              <span className="store-gradient-text">Excellence</span>
            </h1>
            <p
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              {filteredProducts.length} units available
            </p>
          </div>
        </div>
      </div>

      {/* ── FILTERS ───────────────────────────────────── */}
      <div
        className="sticky top-0 z-20 border-b px-6 md:px-12 py-4"
        style={{
          background: "rgba(15,17,21,0.95)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex flex-wrap items-center gap-4 max-w-7xl mx-auto">
          <Shield size={15} style={{ color: "#F7931A" }} />
          <span
            className="font-mono text-[10px] uppercase tracking-widest mr-2"
            style={{ color: "var(--muted)" }}
          >
            Filters
          </span>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="store-select"
            >
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="#94A3B8"
            >
              <path d="M2 4l4 4 4-4" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Price inputs */}
          <input
            type="number"
            placeholder="MIN $"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="store-input w-28"
          />
          <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>—</span>
          <input
            type="number"
            placeholder="MAX $"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="store-input w-28"
          />

          <span
            className="ml-auto font-mono text-[10px] uppercase tracking-wider"
            style={{ color: "var(--muted)" }}
          >
            {filteredProducts.length} Results
          </span>
        </div>
      </div>

      {/* ── PRODUCTS ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {filteredProducts.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-32 rounded-2xl"
            style={{
              background: "#0F1115",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <User size={48} style={{ color: "rgba(247,147,26,0.3)" }} />
            <p
              className="font-mono text-sm font-bold uppercase tracking-widest mt-4"
              style={{ color: "var(--muted)" }}
            >
              No products found
            </p>
            <p className="font-mono text-xs mt-2" style={{ color: "rgba(148,163,184,0.5)" }}>
              Try adjusting your filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <StoreProductCard
                key={item._id}
                item={item}
                handleAddToCart={handleAddToCart}
                accentColor="#F7931A"
                accentGold="#FFD600"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenSection;

import { useProducts } from "../../../hooks/useProducts";
import StoreProductCard from "../components/StoreProductCard";
import { Shirt, Flame } from "lucide-react";

const StreetWearSection = () => {
  const {
    filteredProducts,
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    handleAddToCart,
  } = useProducts("streetwear");

  return (
    <div className="store-bg store-animate-entrance min-h-screen">

      {/* ── HERO ──────────────────────────────────────── */}
      <div className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1600"
          alt="Streetwear"
          className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(3,3,4,0.97), rgba(10,5,0,0.75), rgba(3,3,4,0.3))",
          }}
        />
        {/* Diagonal lines texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(234,88,12,0.03) 0px, rgba(234,88,12,0.03) 1px, transparent 1px, transparent 20px)",
          }}
        />
        {/* Burnt orange glow */}
        <div
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "#EA580C", filter: "blur(60px)" }}
        />
        <div className="store-corner-tl" style={{ borderColor: "rgba(234,88,12,0.5)" }} />
        <div className="store-corner-br" style={{ borderColor: "rgba(234,88,12,0.5)" }} />

        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(234,88,12,0.15)",
                  border: "1px solid rgba(234,88,12,0.4)",
                  color: "#EA580C",
                }}
              >
                <Shirt size={22} />
              </div>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "#EA580C" }}
              >
                Streetwear
              </span>
            </div>
            <h1
              className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              Born on the{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #EA580C, #F7931A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Streets
              </span>
            </h1>
            <p
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              {filteredProducts.length} drops available
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
          <Flame size={15} style={{ color: "#EA580C" }} />
          <span className="font-mono text-[10px] uppercase tracking-widest mr-2" style={{ color: "var(--muted)" }}>
            Filters
          </span>
          <div className="relative">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="store-select">
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 12 12">
              <path d="M2 4l4 4 4-4" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <input type="number" placeholder="MIN $" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="store-input w-28" />
          <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>—</span>
          <input type="number" placeholder="MAX $" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="store-input w-28" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            {filteredProducts.length} Results
          </span>
        </div>
      </div>

      {/* ── PRODUCTS ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 rounded-2xl"
            style={{ background: "#0F1115", border: "1px solid rgba(255,255,255,0.06)" }}>
            <Shirt size={48} style={{ color: "rgba(234,88,12,0.3)" }} />
            <p className="font-mono text-sm font-bold uppercase tracking-widest mt-4" style={{ color: "var(--muted)" }}>
              No drops found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <StoreProductCard
                key={item._id}
                item={item}
                handleAddToCart={handleAddToCart}
                accentColor="#EA580C"
                accentGold="#F7931A"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StreetWearSection;

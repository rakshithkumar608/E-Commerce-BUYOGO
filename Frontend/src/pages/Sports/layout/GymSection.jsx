import { useProducts } from "../../../hooks/useProducts";
import SportsProductCard from "../components/SportsProductCard";
import { Dumbbell, Filter } from "lucide-react";

const GymSection = () => {
  const { filteredProducts, sort, setSort, minPrice, setMinPrice, maxPrice, setMaxPrice, handleAddToCart } = useProducts("gym");

  return (
    <div className="bh-bg bh-animate-entrance min-h-screen">
      {/* ── HERO ── */}
      <div className="relative h-64 overflow-hidden bh-section-divider">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600" alt="Gym" className="absolute inset-0 w-full h-full object-cover grayscale" />
        <div className="absolute inset-0" style={{ background: "#1040C0", opacity: 0.85 }} />
        <div className="absolute inset-0 bh-dot-grid" />
        <div className="absolute top-6 left-6 w-6 h-6 bg-white opacity-60" />
        <div className="absolute bottom-6 right-6 w-6 h-6 rounded-full bg-white opacity-60" />

        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="space-y-3 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-black bg-white" style={{ color: "#1040C0" }}>
                <Dumbbell size={22} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Gym & Fitness</span>
            </div>
            <h1 className="bh-section-title text-4xl md:text-6xl text-white">
              Build Your<br /><span style={{ color: "#F0C020" }}>Strength</span>
            </h1>
            <p className="text-xs font-bold uppercase tracking-widest opacity-70">{filteredProducts.length} products</p>
          </div>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="bh-section-divider px-6 md:px-12 py-4" style={{ background: "#D02020" }}>
        <div className="flex flex-wrap items-center gap-4 max-w-7xl mx-auto text-white">
          <Filter size={15} />
          <span className="text-[10px] font-bold uppercase tracking-widest mr-2">Filters</span>
          <div className="relative">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="bh-select">
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="#121212" strokeWidth="2" fill="none" /></svg>
          </div>
          <input type="number" placeholder="MIN $" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="bh-input w-28" />
          <span className="font-bold">—</span>
          <input type="number" placeholder="MAX $" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="bh-input w-28" />
          <span className="ml-auto text-[10px] font-bold uppercase tracking-wider">{filteredProducts.length} Results</span>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32" style={{ background: "white", border: "4px solid #121212", boxShadow: "8px 8px 0px 0px #121212" }}>
            <Dumbbell size={48} style={{ color: "#1040C0", opacity: 0.3 }} />
            <p className="font-bold text-sm uppercase tracking-widest mt-4" style={{ color: "#888" }}>No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item, i) => (
              <SportsProductCard key={item._id} item={item} handleAddToCart={handleAddToCart} index={i} accentColor="#1040C0" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GymSection;

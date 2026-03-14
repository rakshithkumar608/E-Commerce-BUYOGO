import { Terminal } from 'lucide-react';
import { useProducts } from '../../../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../../../component/ProductFilter';

const Laptops = () => {
  const {
    filteredProducts,
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    handleAddToCart,
  } = useProducts("laptops");

  return (
    <div className="min-h-screen industrial-bg">
      <main className="max-w-7xl mx-auto py-10 px-6 space-y-12 animate-entrance">

        {/* ─── Hero Banner — Terminal/Tech Theme ───────────────────── */}
        <div className="relative h-72 rounded-2xl overflow-hidden industrial-panel">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600"
            alt="Laptops"
            className="w-full h-full object-cover grayscale opacity-40"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(45,52,54,0.88)' }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              animation: 'heroPulse 4s ease-in-out infinite',
            }}
          />

          {/* Terminal decoration */}
          <div className="absolute top-6 left-6 flex items-center gap-2 opacity-40">
            <Terminal size={14} style={{ color: 'var(--accent-green)' }} />
            <span
              className="text-[10px] font-mono font-bold tracking-widest"
              style={{ color: 'var(--accent-green)' }}
            >
              ~/shop/laptops $
            </span>
            <div
              className="w-2 h-4 animate-pulse"
              style={{ background: 'var(--accent-green)' }}
            />
          </div>

          {/* Scanline */}
          <div className="absolute inset-0 scanline-screen pointer-events-none" />

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <h1
              className="text-6xl md:text-7xl font-black uppercase tracking-tight text-white"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                letterSpacing: '-0.03em',
              }}
            >
              LAPTOPS
            </h1>

            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />
              <div
                className="h-1 w-10 rounded-full"
                style={{
                  background: 'var(--accent-green)',
                  boxShadow: '0 0 8px 2px rgba(34,197,94,0.6)',
                }}
              />
              <div className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />
            </div>

            <p
              className="text-xs tracking-widest uppercase mt-1 font-mono"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {filteredProducts.length} UNITS AVAILABLE
            </p>
          </div>
        </div>

       
        <ProductFilters
          sort={sort}
          setSort={setSort}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

       
        {filteredProducts.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24 rounded-2xl"
            style={{
              background: 'var(--chassis)',
              boxShadow: 'var(--shadow-recessed)',
            }}
          >
            <span className="text-5xl mb-4">💻</span>
            <p
              className="text-sm font-bold uppercase tracking-widest font-mono"
              style={{ color: 'var(--text-muted)' }}
            >
              NO UNITS FOUND
            </p>
            <p className="text-xs mt-1" style={{ color: '#636e72' }}>
              Adjust filters to see results
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item._id}
                item={item}
                handleAddToCart={handleAddToCart}
                showRating={true}
                showCartButton={true}
                accentColor="var(--accent-green)"
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Laptops;
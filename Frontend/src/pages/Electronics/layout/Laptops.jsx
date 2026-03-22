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
      <main className="max-w-7xl mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 space-y-8 sm:space-y-10 md:space-y-12 animate-entrance">

       
        <div
          className="relative h-48 sm:h-60 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--elec-border)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600"
            alt="Laptops"
            className="w-full h-full object-cover opacity-25"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(10,10,15,0.95), rgba(10,10,15,0.88))' }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              animation: 'heroPulse 4s ease-in-out infinite',
            }}
          />

          {/* Terminal decoration */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2 opacity-40">
            <Terminal size={12} style={{ color: 'var(--accent-green)' }} />
            <span
              className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest"
              style={{ color: 'var(--accent-green)' }}
            >
              ~/shop/laptops $
            </span>
            <div
              className="w-1.5 sm:w-2 h-3 sm:h-4 animate-pulse"
              style={{ background: 'var(--accent-green)' }}
            />
          </div>

          {/* Scanline */}
          <div className="absolute inset-0 scanline-screen pointer-events-none opacity-20" />

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 px-4">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-white text-center"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                letterSpacing: '-0.03em',
              }}
            >
              LAPTOPS
            </h1>

            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-10 sm:w-16 bg-white/20" />
              <div
                className="h-1 w-8 sm:w-10 rounded-full"
                style={{
                  background: 'var(--accent-green)',
                  boxShadow: '0 0 10px rgba(34,197,94,0.6)',
                }}
              />
              <div className="h-px w-10 sm:w-16 bg-white/20" />
            </div>

            <p
              className="text-[10px] sm:text-xs tracking-widest uppercase mt-1 font-mono"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              {filteredProducts.length} UNITS AVAILABLE
            </p>
          </div>
        </div>

        {/* ─── Filter Controls ──────────────────────────── */}
        <ProductFilters
          sort={sort}
          setSort={setSort}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* ─── Product Grid ────────────────────────────── */}
        {filteredProducts.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-16 sm:py-24 rounded-xl sm:rounded-2xl"
            style={{
              background: 'var(--elec-card)',
              border: '1px solid var(--elec-border)',
            }}
          >
            <span className="text-4xl sm:text-5xl mb-4">💻</span>
            <p
              className="text-xs sm:text-sm font-bold uppercase tracking-widest font-mono"
              style={{ color: 'var(--elec-text-muted)' }}
            >
              NO UNITS FOUND
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--elec-text-muted)' }}>
              Adjust filters to see results
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-10">
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
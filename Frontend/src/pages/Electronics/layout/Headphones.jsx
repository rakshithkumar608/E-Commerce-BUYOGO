import { useProducts } from '../../../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../../../component/ProductFilter';

const Headphones = () => {
  const {
    filteredProducts,
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    handleAddToCart,
  } = useProducts("headPhones");

  return (
    <div className="min-h-screen industrial-bg">
      <main className="max-w-7xl mx-auto py-10 px-6 space-y-12 animate-entrance">

        
        <div className="relative h-72 rounded-2xl overflow-hidden industrial-panel">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600"
            alt="Headphones"
            className="w-full h-full object-cover grayscale opacity-50"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(45,52,54,0.85)' }}
          />

          {/* Audio waveform decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-0.75 px-8 pb-4 opacity-30">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: '3px',
                  height: `${8 + Math.sin(i * 0.5) * 20 + (i % 7) * 2}px`,
                  background: 'var(--accent-amber)',
                  opacity: 0.4 + ((i % 5) * 0.12),
                }}
              />
            ))}
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: 'heroPulse 4s ease-in-out infinite',
            }}
          />

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
              HEADPHONES
            </h1>

            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />
              <div
                className="h-1 w-10 rounded-full"
                style={{
                  background: 'var(--accent-amber)',
                  boxShadow: '0 0 8px 2px rgba(245,158,11,0.6)',
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
            <span className="text-5xl mb-4">🎧</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item._id}
                item={item}
                handleAddToCart={handleAddToCart}
                showRating={true}
                showCartButton={true}
                accentColor="var(--accent-amber)"
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Headphones;
import { Aperture } from 'lucide-react';
import { useProducts } from '../../../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../../../component/ProductFilter';

const CameraSection = () => {
  const {
    filteredProducts,
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    handleAddToCart,
  } = useProducts("camera");

  return (
    <div className="min-h-screen industrial-bg">
      <main className="max-w-7xl mx-auto py-10 px-6 space-y-12 animate-entrance">

        {/* ─── Hero Banner — Aperture/Shutter Theme ────────────────── */}
        <div className="relative h-72 rounded-2xl overflow-hidden industrial-panel">
          <img
            src="https://images.unsplash.com/photo-1519183071298-a2962eadc2f7?w=1600"
            alt="Cameras"
            className="w-full h-full object-cover grayscale opacity-45"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(45,52,54,0.88)' }}
          />

          {/* Aperture ring decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="rounded-full opacity-[0.06]"
              style={{
                width: '300px',
                height: '300px',
                border: '2px solid var(--accent-magenta)',
                boxShadow: 'inset 0 0 60px rgba(232,67,147,0.1), 0 0 60px rgba(232,67,147,0.05)',
              }}
            />
            <div
              className="absolute rounded-full opacity-[0.04]"
              style={{
                width: '220px',
                height: '220px',
                border: '1px solid var(--accent-magenta)',
              }}
            />
            <div
              className="absolute rounded-full opacity-[0.08]"
              style={{
                width: '140px',
                height: '140px',
                border: '1px dashed var(--accent-magenta)',
              }}
            />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(232,67,147,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,67,147,0.04) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              animation: 'heroPulse 4s ease-in-out infinite',
            }}
          />

          {/* Viewfinder corners */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 opacity-20" style={{ borderColor: 'var(--accent-magenta)' }} />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 opacity-20" style={{ borderColor: 'var(--accent-magenta)' }} />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 opacity-20" style={{ borderColor: 'var(--accent-magenta)' }} />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 opacity-20" style={{ borderColor: 'var(--accent-magenta)' }} />

          {/* Scanline */}
          <div className="absolute inset-0 scanline-screen pointer-events-none" />

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3">
              <Aperture
                size={36}
                className="opacity-30"
                style={{ color: 'var(--accent-magenta)' }}
              />
              <h1
                className="text-6xl md:text-7xl font-black uppercase tracking-tight text-white"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  letterSpacing: '-0.03em',
                }}
              >
                CAMERAS
              </h1>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />
              <div
                className="h-1 w-10 rounded-full"
                style={{
                  background: 'var(--accent-magenta)',
                  boxShadow: '0 0 8px 2px rgba(232,67,147,0.6)',
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
            <span className="text-5xl mb-4">📷</span>
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
                accentColor="var(--accent-magenta)"
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CameraSection;
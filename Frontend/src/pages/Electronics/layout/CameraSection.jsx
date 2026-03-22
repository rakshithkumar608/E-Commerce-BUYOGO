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
      <main className="max-w-7xl mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 space-y-8 sm:space-y-10 md:space-y-12 animate-entrance">

        {/* ─── Hero Banner — Aperture/Shutter Theme ───── */}
        <div
          className="relative h-48 sm:h-60 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--elec-border)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1519183071298-a2962eadc2f7?w=1600"
            alt="Cameras"
            className="w-full h-full object-cover opacity-25"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(10,10,15,0.95), rgba(10,10,15,0.88))' }}
          />

          {/* Aperture ring decoration — hidden on small mobile */}
          <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none">
            <div
              className="rounded-full opacity-[0.06]"
              style={{
                width: '220px',
                height: '220px',
                border: '2px solid var(--accent-magenta)',
                boxShadow: 'inset 0 0 60px rgba(232,67,147,0.1), 0 0 60px rgba(232,67,147,0.05)',
              }}
            />
            <div
              className="absolute rounded-full opacity-[0.04]"
              style={{
                width: '160px',
                height: '160px',
                border: '1px solid var(--accent-magenta)',
              }}
            />
            <div
              className="absolute rounded-full opacity-[0.08]"
              style={{
                width: '100px',
                height: '100px',
                border: '1px dashed var(--accent-magenta)',
              }}
            />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(232,67,147,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,67,147,0.03) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              animation: 'heroPulse 4s ease-in-out infinite',
            }}
          />

          {/* Viewfinder corners — hidden on mobile */}
          <div className="hidden sm:block">
            <div className="absolute top-6 left-6 w-6 md:w-8 h-6 md:h-8 border-t-2 border-l-2 opacity-20" style={{ borderColor: 'var(--accent-magenta)' }} />
            <div className="absolute top-6 right-6 w-6 md:w-8 h-6 md:h-8 border-t-2 border-r-2 opacity-20" style={{ borderColor: 'var(--accent-magenta)' }} />
            <div className="absolute bottom-6 left-6 w-6 md:w-8 h-6 md:h-8 border-b-2 border-l-2 opacity-20" style={{ borderColor: 'var(--accent-magenta)' }} />
            <div className="absolute bottom-6 right-6 w-6 md:w-8 h-6 md:h-8 border-b-2 border-r-2 opacity-20" style={{ borderColor: 'var(--accent-magenta)' }} />
          </div>

          {/* Scanline */}
          <div className="absolute inset-0 scanline-screen pointer-events-none opacity-20" />

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 px-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Aperture
                size={28}
                className="opacity-30 hidden sm:block"
                style={{ color: 'var(--accent-magenta)' }}
              />
              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-white text-center"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                  letterSpacing: '-0.03em',
                }}
              >
                CAMERAS
              </h1>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-10 sm:w-16 bg-white/20" />
              <div
                className="h-1 w-8 sm:w-10 rounded-full"
                style={{
                  background: 'var(--accent-magenta)',
                  boxShadow: '0 0 10px rgba(232,67,147,0.6)',
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
            <span className="text-4xl sm:text-5xl mb-4">📷</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-10">
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
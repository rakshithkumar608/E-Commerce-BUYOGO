
import { Filter, ChevronDown} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../../../hooks/useProducts';
import ProductFilters from '../../../component/ProductFilter';

const IndustrialStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&family=Playfair+Display:wght@700;900&display=swap');

    :root {
      --chassis: #e0e5ec;
      --panel: #f0f2f5;
      --recessed: #d1d9e6;
      --text-primary: #2d3436;
      --text-muted: #4a5568;
      --accent-orange: #ff4757;
      --accent-cyan: #00d2ff;
      
      --shadow-card: 8px 8px 16px #babecc, -8px -8px 16px #ffffff;
      --shadow-floating: 12px 12px 24px #babecc, -12px -12px 24px #ffffff;
      --shadow-pressed: inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff;
      --shadow-recessed: inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff;
    }

    body {
      background-color: var(--chassis);
      color: var(--text-primary);
      font-family: 'Inter', sans-serif;
      margin: 0;
    }

    .font-mono { font-family: 'JetBrains Mono', monospace; }
    
    .font-bespoke { 
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      letter-spacing: -0.01em;
    }

    .industrial-bg {
      background-color: var(--chassis);
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
    }

    .industrial-panel {
      background: var(--chassis);
      box-shadow: var(--shadow-card);
      border-radius: 16px;
      position: relative;
      transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .industrial-panel::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      pointer-events: none;
      border-radius: 16px;
      background-image: 
        radial-gradient(circle at 12px 12px, rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at calc(100% - 12px) 12px, rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at 12px calc(100% - 12px), rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), rgba(0,0,0,0.1) 2px, transparent 3px);
    }

    .mechanical-key {
      background: var(--accent-orange);
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 700;
      border-radius: 8px;
      box-shadow: 4px 4px 8px rgba(166,50,60,0.3), -2px -2px 4px rgba(255,255,255,0.2);
      transition: all 150ms ease;
    }

    .mechanical-key:active {
      transform: translateY(2px);
      box-shadow: inset 4px 4px 8px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.1);
    }

    .led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 8px currentColor;
    }

    .animate-led-pulse {
      animation: led-pulse 2s infinite;
    }

    @keyframes led-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.9); }
    }

    .scanline-screen {
      background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.1) 50%);
      background-size: 100% 4px;
    }

    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-entrance { animation: slideUpFade 0.6s ease-out forwards; }

    .industrial-input {
      background: var(--chassis);
      box-shadow: var(--shadow-recessed);
      border: none;
      outline: none;
      border-radius: 12px;
      transition: all 0.3s ease;
    }
    .industrial-input:focus {
      box-shadow: var(--shadow-recessed), 0 0 0 2px var(--accent-cyan);
    }

    .heading-gradient {
      background: linear-gradient(135deg, var(--accent-orange) 0%, var(--accent-cyan) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(2px 2px 0px rgba(255,255,255,0.8));
    }
  `}</style>
);

const Headphones = () => {
 
  const {
    filteredProducts,
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    handleAddToCart
} = useProducts("headPhones")

  return (
    <div className="min-h-screen industrial-bg">
      <IndustrialStyles />
      
      {/* Main Content Area - Full Width */}
      <main className="max-w-7xl mx-auto py-10 px-6 space-y-12 animate-entrance">
        
        {/* Banner Section - Only h1 uses Bespoke Serif */}
        <div className="relative h-72 rounded-4xl overflow-hidden industrial-panel">
          <img 
            src="https://png.pngtree.com/background/20210711/original/pngtree-double-eleven-mobile-phones-promote-atmospheric-black-banner-picture-image_1112228.jpg"
            alt="SmartPhone"
            className="w-full h-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 scanline-screen pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-8 text-center">
            <div className="flex items-center gap-3 mb-4">
            </div>
            <h1 className="text-6xl md:text-8xl font-bespoke heading-gradient drop-shadow-2xl">
              HeadPhones
            </h1>
          </div>
        </div>

        {/* Controls Bar - Recessed Mechanical Panels */}
        <ProductFilters
  sort={sort}
  setSort={setSort}
  minPrice={minPrice}
  setMinPrice={setMinPrice}
  maxPrice={maxPrice}
  setMaxPrice={setMaxPrice}
/>
        {/* Product Grid - Staggered Bolted Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredProducts.map((item) => (
  <ProductCard
    key={item._id}
    item={item}
    handleAddToCart={handleAddToCart}
    showRating={true}
    showCartButton={true}
  />
))}
        </div>
      </main>
    </div>
  );
};

export default Headphones;
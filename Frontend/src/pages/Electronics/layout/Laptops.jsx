import React, { useEffect, useMemo, useState } from 'react'
import { getProducts } from '../../../api/product';
import { toast } from 'sonner';
import { addToCart as addToCartAPI } from "../../../api/cart";


const Screw = ({ className = "" }) => (
  <div
    className={`w-3 h-3 rounded-full shrink-0 ${className}`}
    style={{
      background: `radial-gradient(circle at 38% 35%, rgba(255,255,255,0.6) 0%, rgba(180,190,204,0.4) 40%, rgba(163,177,198,0.8) 100%)`,
      boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.7), inset -1px -1px 2px rgba(0,0,0,0.15)`,
    }}
  >
    {/* Crosshead slot */}
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[1.5px] bg-[rgba(0,0,0,0.25)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5px] h-[55%] bg-[rgba(0,0,0,0.25)]" />
    </div>
  </div>
);


const VentSlots = () => (
  <div className="flex gap-1 items-center">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="w-1 h-5 rounded-full"
        style={{
          background: '#d1d9e6',
          boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.15), inset -1px -1px 1px rgba(255,255,255,0.5)',
        }}
      />
    ))}
  </div>
);

const LED = ({ color = "green", label = "ONLINE" }) => {
  const colors = {
    green: { bg: '#22c55e', glow: 'rgba(34,197,94,0.7)' },
    red:   { bg: '#ff4757', glow: 'rgba(255,71,87,0.7)' },
    amber: { bg: '#f59e0b', glow: 'rgba(245,158,11,0.7)' },
  };
  const c = colors[color];
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ background: c.bg, boxShadow: `0 0 8px 2px ${c.glow}` }}
      />
      <span
        className="text-[10px] font-bold tracking-widest uppercase"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: '#4a5568' }}
      >
        {label}
      </span>
    </div>
  );
};

// ─── Star Rating ──────────────────────────────────────────────────────────────
const StarRating = ({ rating }) => {
  const val = parseFloat(rating) || 0;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map((s) => (
          <svg key={s} className="w-3 h-3" viewBox="0 0 12 12">
            <polygon
              points="6,1 7.5,4.5 11,4.5 8.5,7 9.5,11 6,8.5 2.5,11 3.5,7 1,4.5 4.5,4.5"
              fill={s <= Math.round(val) ? '#ff4757' : '#babecc'}
            />
          </svg>
        ))}
      </div>
      <span
        className="text-[11px] font-bold"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: '#4a5568' }}
      >
        {val.toFixed(1)}
      </span>
    </div>
  );
};

// ─── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ item, onAddToCart, index }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <div
      className="relative rounded-2xl p-4 flex flex-col gap-3 group"
      style={{
        background: '#e0e5ec',
        boxShadow: '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
        animationDelay: `${index * 80}ms`,
        animation: 'cardEntrance 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both',
      }}
    >
      {/* Corner Screws */}
      <Screw className="absolute top-2.5 left-2.5" />
      <Screw className="absolute top-2.5 right-2.5" />
      <Screw className="absolute bottom-2.5 left-2.5" />
      <Screw className="absolute bottom-2.5 right-2.5" />

      {/* Vent slots top-right */}
      <div className="absolute top-3 right-8">
        <VentSlots />
      </div>

      {/* Image — recessed well */}
      <div
        className="relative w-full h-44 rounded-xl overflow-hidden"
        style={{
          boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
          background: '#d1d9e6',
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 4px)',
          }}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1 px-1 mt-1">
        {/* Label stamp */}
        <div className="flex items-center justify-between">
          <span
            className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#4a5568',
              background: '#d1d9e6',
              boxShadow: 'inset 2px 2px 4px #babecc, inset -2px -2px 4px #ffffff',
            }}
          >
            LAPTOP
          </span>
          <LED color="green" label="IN STOCK" />
        </div>

        <h3
          className="font-bold text-sm leading-tight mt-1"
          style={{
            color: '#2d3436',
            textShadow: '0 1px 0 #ffffff',
          }}
        >
          {item.name}
        </h3>

        <StarRating rating={item.averageRating} />

        <p
          className="text-xl font-bold mt-1"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#2d3436',
            textShadow: '0 1px 0 #ffffff',
          }}
        >
          ${item.price}
          <span className="text-xs font-normal text-[#4a5568] ml-1">USD</span>
        </p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart(item)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest text-white transition-all duration-150 mt-auto"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          background: '#ff4757',
          boxShadow: pressed
            ? 'inset 4px 4px 8px rgba(166,50,60,0.5), inset -4px -4px 8px rgba(255,100,110,0.3)'
            : '4px 4px 8px rgba(166,50,60,0.4), -2px -2px 6px rgba(255,120,130,0.3)',
          transform: pressed ? 'translateY(2px)' : 'translateY(0)',
          border: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        + Add to Cart
      </button>
    </div>
  );
};

// ─── Main Laptops Component ───────────────────────────────────────────────────
const Laptops = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("low");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ category: "laptops" });
        console.log("Products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (minPrice) filtered = filtered.filter((p) => p.price >= Number(minPrice));
    if (maxPrice) filtered = filtered.filter((p) => p.price <= Number(maxPrice));
    if (sort === "low")    filtered.sort((a, b) => a.price - b.price);
    if (sort === "high")   filtered.sort((a, b) => b.price - a.price);
    if (sort === "rating") filtered.sort((a, b) => b.averageRating - a.averageRating);
    return filtered;
  }, [products, sort, minPrice, maxPrice]);

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      return;
    }
    try {
      await addToCartAPI(product._id, token);
      toast.success(`${product.name} added to cart 🛒`, {
        style: { background: "green", color: "white" },
      });
    } catch (error) {
      toast.error("Failed to add to cart");
      console.error(error);
    }
  };

  return (
    <>
      {/* Inject keyframes + font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700;800&display=swap');

        @keyframes cardEntrance {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.06; }
          50%       { opacity: 0.12; }
        }
        .industrial-input:focus {
          outline: none;
          box-shadow: inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff, 0 0 0 2px #ff4757 !important;
        }
        .industrial-select:focus {
          outline: none;
          box-shadow: inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff, 0 0 0 2px #ff4757 !important;
        }
      `}</style>

      <div
        className="space-y-8 min-h-screen p-6"
        style={{
          background: '#e0e5ec',
          fontFamily: "'Inter', sans-serif",
        }}
      >
       
        <div
          className="relative h-60 rounded-2xl overflow-hidden"
          style={{ boxShadow: '8px 8px 16px #babecc, -8px -8px 16px #ffffff' }}
        >
          <img
            src="https://img.freepik.com/premium-photo/top-view-laptop-concept-with-blue-desk-concept-background-3d-rendering_626958-393.jpg"
            alt="Laptops"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ background: 'rgba(45,52,54,0.82)' }} />

          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: 'heroPulse 4s ease-in-out infinite',
            }}
          />

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            {/* Top status bar */}
            

            <h1
              className="text-6xl md:text-7xl font-black uppercase tracking-tight text-white"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.1)',
                letterSpacing: '-0.03em',
              }}
            >
              LAPTOPS
            </h1>

            {/* Accent underline */}
            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />
              <div className="h-1 w-10 rounded-full bg-[#ff4757]" style={{ boxShadow: '0 0 8px 2px rgba(255,71,87,0.6)' }} />
              <div className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />
            </div>

            <p
              className="text-xs tracking-widest text-[rgba(255,255,255,0.45)] uppercase mt-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {products.length} UNITS AVAILABLE
            </p>
          </div>

          {/* Corner screws on hero */}
          <Screw className="absolute top-3 left-3 opacity-60" />
          <Screw className="absolute top-3 right-3 opacity-60" />
          <Screw className="absolute bottom-3 left-3 opacity-60" />
          <Screw className="absolute bottom-3 right-3 opacity-60" />
        </div>

      
        <div
          className="flex flex-wrap items-center gap-4 p-4 rounded-2xl"
          style={{
            background: '#e0e5ec',
            boxShadow: '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
          }}
        >
          {/* Panel label */}
          <div className="flex items-center gap-2 mr-2">
            <div
              className="w-1 h-6 rounded-full"
              style={{ background: '#ff4757', boxShadow: '0 0 6px rgba(255,71,87,0.5)' }}
            />
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#4a5568' }}
            >
              FILTERS
            </span>
          </div>

          {/* Sort select */}
          <div className="flex flex-col gap-1">
            <label
              className="text-[9px] font-bold uppercase tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#4a5568' }}
            >
              SORT BY
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="industrial-select px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: '#e0e5ec',
                color: '#2d3436',
                border: 'none',
                boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
                minWidth: '180px',
              }}
            >
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block self-stretch w-px my-1"
            style={{ background: 'linear-gradient(to bottom, transparent, #babecc, transparent)' }}
          />

          {/* Min Price */}
          <div className="flex flex-col gap-1">
            <label
              className="text-[9px] font-bold uppercase tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#4a5568' }}
            >
              MIN $
            </label>
            <input
              type="number"
              placeholder="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="industrial-input px-4 py-2.5 rounded-xl text-sm font-semibold w-28"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: '#e0e5ec',
                color: '#2d3436',
                border: 'none',
                boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
              }}
            />
          </div>

          {/* Max Price */}
          <div className="flex flex-col gap-1">
            <label
              className="text-[9px] font-bold uppercase tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#4a5568' }}
            >
              MAX $
            </label>
            <input
              type="number"
              placeholder="9999"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="industrial-input px-4 py-2.5 rounded-xl text-sm font-semibold w-28"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: '#e0e5ec',
                color: '#2d3436',
                border: 'none',
                boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
              }}
            />
          </div>

          {/* Result count pill */}
          <div className="ml-auto">
            <span
              className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: '#e0e5ec',
                color: '#4a5568',
                boxShadow: 'inset 2px 2px 4px #babecc, inset -2px -2px 4px #ffffff',
              }}
            >
              {filteredProducts.length} RESULTS
            </span>
          </div>
        </div>

      
        {filteredProducts.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24 rounded-2xl"
            style={{
              background: '#e0e5ec',
              boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
            }}
          >
            <span className="text-5xl mb-4">💻</span>
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#4a5568' }}
            >
              NO UNITS FOUND
            </p>
            <p className="text-xs text-[#636e72] mt-1">Adjust filters to see results</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item, index) => (
              <ProductCard
                key={item._id}
                item={item}
                onAddToCart={handleAddToCart}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Laptops;
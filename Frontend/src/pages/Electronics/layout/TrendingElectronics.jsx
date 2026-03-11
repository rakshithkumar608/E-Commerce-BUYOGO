import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Rocket, Sparkles, Heart, Zap } from 'lucide-react';
import { toast } from "sonner";
import { addToCart as addToCartAPI } from "../../../api/cart";
import { getProducts } from "../../../api/product";


const IndustrialStyles = () => (
<style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&family=Playfair+Display:wght@700;900&display=swap');

    :root {
      --chassis: #e0e5ec;
      --panel: #f0f2f5;
      --recessed: #d1d9e6;
      --text-primary: #2d3436;
      --text-muted: #4a5568;
      --accent-orange: #ff4757;
      
      /* Neumorphic Shadow Stacks */
      --shadow-card: 8px 8px 16px #babecc, -8px -8px 16px #ffffff;
      --shadow-floating: 12px 12px 24px #babecc, -12px -12px 24px #ffffff;
      --shadow-pressed: inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff;
      --shadow-recessed: inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff;
    }

    body {
      background-color: var(--chassis);
      color: var(--text-primary);
      font-family: 'Inter', sans-serif;
    }

    .font-mono { font-family: 'JetBrains Mono', monospace; }
    
    /* Bespoke Serif for Main Headings */
    .font-bespoke { 
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      letter-spacing: -0.01em;
    }

    /* Noise Texture Overlay */
    .industrial-bg {
      background-color: var(--chassis);
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3仿真%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
    }

    /* Mechanical Panel */
    .industrial-panel {
      background: var(--chassis);
      box-shadow: var(--shadow-card);
      border-radius: 16px;
      position: relative;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .industrial-panel::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      pointer-events: none;
      border-radius: 16px;
      /* Corner Screws */
      background-image: 
        radial-gradient(circle at 12px 12px, rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at calc(100% - 12px) 12px, rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at 12px calc(100% - 12px), rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), rgba(0,0,0,0.1) 2px, transparent 3px);
    }

    /* Mechanical Key (Button) */
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

    .mechanical-key:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }

    .mechanical-key:active {
      transform: translateY(2px);
      box-shadow: inset 4px 4px 8px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.1);
    }

    /* LED Indicator */
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
  `}</style>


);

const fallbackProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1695048133149-4fcd4c06c2cb?q=80&w=800",
    color: "#3b82f6"
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    price: 1999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
    color: "#a855f7"
  },
  {
    id: 3,
    name: "PlayStation 5",
    price: 499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800",
    color: "#ec4899"
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 349,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231698?q=80&w=800",
    color: "#10b981"
  },
  {
    id: 5,
    name: "DJI Pocket 3",
    price: 519,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=800",
    color: "#f59e0b"
  },
  {
    id: 6,
    name: "Galaxy Watch 9",
    price: 299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1518441902110-3e7c83b65fdf?q=80&w=800",
    color: "#0ea5e9"
  }
];

const techLaunches = [
  { name: "Apple Vision Pro", icon: <Rocket size={20} /> },
  { name: "Samsung Galaxy S24", icon: <Sparkles size={20} /> },
  { name: "Asus ROG Ally", icon: <Zap size={20} /> },
  { name: "Meta Quest 3", icon: <Star size={20} /> }
];

const favorites = [
  "AirPods Pro",
  "Logitech MX Master",
  "Anker Power Bank",
  "Steam Deck"
];

const TrendingElectronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ category: "electronics" });
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(fallbackProducts);
        }
      } catch (error) {
        console.error("Failed to fetch electronics products:", error);
        setProducts(fallbackProducts);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    if (!product._id) {
      toast.error("This product is not available for purchase yet");
      return;
    }

    try {
      await addToCartAPI(product._id, token);

      toast.success(`${product.name} added to cart 🛒`, {
        style: {background: "green", color: "white"},
      })
    } catch (error) {
      toast.error("Failed to add to cart ❌");
      console.error(error);
      
    }
  };

  return (
    <div className="min-h-screen industrial-bg py-20 px-6 overflow-x-hidden">
      <IndustrialStyles />
      
      <div className="max-w-7xl mx-auto space-y-24">
        
        <section className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bespoke tracking-tight text-text-primary drop-shadow-[0_1px_0_#ffffff] justify-center items-center flex">
              TRENDING RIGHT NOW
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product._id || product.id}
                className="industrial-panel group overflow-hidden"
              >
                
                <div className="p-4">
                  <div className="relative overflow-hidden rounded-lg shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] bg-recessed aspect-square">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 scanline-screen pointer-events-none" />
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 rounded-full bg-chassis shadow-card flex items-center justify-center text-accent-orange active:shadow-recessed transition-all">
                        <Heart size={18} fill={index === 0 ? "currentColor" : "none"} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-2xl text-text-primary leading-tight">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-accent-orange mb-1">
                        <Star size={14} fill="currentColor" />
                        <span className="font-mono font-bold text-sm">{product.rating}</span>
                      </div>
                      <span className="font-mono text-xs text-text-muted">Verified</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-2xl font-bold text-text-primary">${product.price}</span>
                    <button 
                    onClick={() => handleAddToCart(product)}
                    className="mechanical-key flex-1 h-14 flex items-center justify-center gap-3">
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>

            
                <div className="absolute top-8 right-8 flex gap-1 pointer-events-none opacity-20">
                  <div className="h-6 w-1 rounded-full bg-text-muted shadow-[inset_1px_1px_1px_rgba(0,0,0,0.2)]" />
                  <div className="h-6 w-1 rounded-full bg-text-muted shadow-[inset_1px_1px_1px_rgba(0,0,0,0.2)]" />
                  <div className="h-6 w-1 rounded-full bg-text-muted shadow-[inset_1px_1px_1px_rgba(0,0,0,0.2)]" />
                </div>
              </div>
            ))}
          </div>
        </section>

    
        <section className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-accent-orange rounded-full animate-led-pulse shadow-[0_0_8px_#ff4757]" />
            <h2 className="text-3xl font-bespoke tracking-tight text-text-primary uppercase">LATEST TECH LAUNCHES</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {techLaunches.map((item, index) => (
              <div 
                key={index}
                className="industrial-panel p-8 flex flex-col items-center justify-center text-center gap-6 cursor-pointer hover:-translate-y-1 active:shadow-recessed transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-recessed shadow-recessed flex items-center justify-center text-text-muted">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <span className="font-mono font-bold text-sm tracking-tight text-text-primary uppercase">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10 pb-20">
          <h2 className="text-3xl font-bespoke tracking-tight text-text-primary uppercase">COMMUNITY FAVORITES</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((item, index) => (
              <div
                key={index}
                className="industrial-panel p-6 flex items-center justify-between gap-4 cursor-pointer bg-panel/50 border-l-4 border-accent-orange"
              >
                <span className="font-bold text-text-primary">{item}</span>
            
              </div>
            ))}
          </div>
        </section>
      </div>
      
      
    </div>
  );
};

export default TrendingElectronics;
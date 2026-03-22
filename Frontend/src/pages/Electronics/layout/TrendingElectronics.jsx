import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Rocket, Sparkles, Heart, Zap } from 'lucide-react';
import { toast } from "sonner";
import { addToCart as addToCartAPI } from "../../../api/cart";
import { getProducts } from "../../../api/product";

const fallbackProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1695048133149-4fcd4c06c2cb?q=80&w=800",
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    price: 1999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
  },
  {
    id: 3,
    name: "PlayStation 5",
    price: 499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 349,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231698?q=80&w=800",
  },
  {
    id: 5,
    name: "DJI Pocket 3",
    price: 519,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=800",
  },
  {
    id: 6,
    name: "Galaxy Watch 9",
    price: 299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1518441902110-3e7c83b65fdf?q=80&w=800",
  },
];

const techLaunches = [
  { name: "Apple Vision Pro", icon: <Rocket size={20} /> },
  { name: "Samsung Galaxy S24", icon: <Sparkles size={20} /> },
  { name: "Asus ROG Ally", icon: <Zap size={20} /> },
  { name: "Meta Quest 3", icon: <Star size={20} /> },
];

const favorites = [
  "AirPods Pro",
  "Logitech MX Master",
  "Anker Power Bank",
  "Steam Deck",
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
        style: { background: "green", color: "white" },
      });
    } catch (error) {
      toast.error("Failed to add to cart ❌");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen industrial-bg py-10 sm:py-16 md:py-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24 animate-entrance">

        {/* ─── Section Title ──────────────────────────── */}
        <section className="space-y-8 sm:space-y-12">
          <div className="space-y-4 text-center">
            <h1
              className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight"
              style={{
                color: 'var(--elec-text)',
                letterSpacing: '-0.03em',
              }}
            >
              TRENDING RIGHT NOW
            </h1>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={product._id || product.id}
                className="industrial-panel group overflow-hidden"
              >
                {/* Image */}
                <div className="p-3 sm:p-4">
                  <div
                    className="relative overflow-hidden rounded-lg aspect-square"
                    style={{
                      background: 'var(--elec-surface)',
                      border: '1px solid var(--elec-border)',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 scanline-screen pointer-events-none opacity-20" />

                    {/* Favorite button */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <button
                        className="w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center"
                        style={{
                          background: 'var(--elec-card)',
                          border: '1px solid var(--elec-border)',
                          color: 'var(--accent-red)',
                        }}
                      >
                        <Heart
                          size={16}
                          fill={index === 0 ? "currentColor" : "none"}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="px-4 sm:px-8 pb-5 sm:pb-8 pt-1 sm:pt-2 space-y-4 sm:space-y-6">
                  <div className="flex justify-between items-start gap-3">
                    <div className="min-w-0">
                      <h3
                        className="font-bold text-xl sm:text-2xl leading-tight truncate"
                        style={{ color: 'var(--elec-text)' }}
                      >
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <div
                        className="flex items-center gap-1 mb-1"
                        style={{ color: 'var(--accent-red)' }}
                      >
                        <Star size={14} fill="currentColor" />
                        <span className="font-mono font-bold text-sm">
                          {product.rating || product.averageRating || "N/A"}
                        </span>
                      </div>
                      <span
                        className="font-mono text-xs"
                        style={{ color: 'var(--elec-text-muted)' }}
                      >
                        Verified
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <span
                      className="font-mono text-xl sm:text-2xl font-bold"
                      style={{ color: 'var(--elec-text)' }}
                    >
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mechanical-key flex-1 h-12 sm:h-14 flex items-center justify-center gap-2 sm:gap-3"
                    >
                      <ShoppingCart size={16} />
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Latest Tech Launches ─────────────────────── */}
        <section className="space-y-6 sm:space-y-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="w-3 h-3 rounded-full animate-led-pulse"
              style={{
                background: 'var(--accent-red)',
                boxShadow: '0 0 10px var(--accent-red)',
              }}
            />
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase"
              style={{ color: 'var(--elec-text)' }}
            >
              LATEST TECH LAUNCHES
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {techLaunches.map((item, index) => (
              <div
                key={index}
                className="industrial-panel p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 cursor-pointer"
              >
                <div
                  className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'var(--elec-surface)',
                    border: '1px solid var(--elec-border)',
                    color: 'var(--elec-text-muted)',
                  }}
                >
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <span
                  className="font-mono font-bold text-xs sm:text-sm tracking-tight uppercase"
                  style={{ color: 'var(--elec-text)' }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Community Favorites ────────────────────── */}
        <section className="space-y-6 sm:space-y-10 pb-10 sm:pb-20">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase"
            style={{ color: 'var(--elec-text)' }}
          >
            COMMUNITY FAVORITES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {favorites.map((item, index) => (
              <div
                key={index}
                className="industrial-panel p-4 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                style={{ borderLeft: '3px solid var(--accent-cyan)' }}
              >
                <span
                  className="font-bold text-sm sm:text-base"
                  style={{ color: 'var(--elec-text)' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrendingElectronics;
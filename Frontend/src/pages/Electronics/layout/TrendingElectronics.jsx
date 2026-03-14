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
    <div className="min-h-screen industrial-bg py-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-24 animate-entrance">
        {/* ─── Section Title ──────────────────────────────────────── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h1
              className="text-5xl md:text-7xl font-black tracking-tight justify-center items-center flex"
              style={{
                color: 'var(--text-primary)',
                textShadow: '0 1px 0 #ffffff',
                letterSpacing: '-0.03em',
              }}
            >
              TRENDING RIGHT NOW
            </h1>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product._id || product.id}
                className="industrial-panel group overflow-hidden"
              >
                {/* Image */}
                <div className="p-4">
                  <div
                    className="relative overflow-hidden rounded-lg aspect-square"
                    style={{
                      background: 'var(--recessed)',
                      boxShadow: 'var(--shadow-recessed)',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 scanline-screen pointer-events-none" />

                    {/* Favorite button */}
                    <div className="absolute top-4 right-4">
                      <button
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          background: 'var(--chassis)',
                          boxShadow: 'var(--shadow-card)',
                          color: 'var(--accent-red)',
                        }}
                      >
                        <Heart
                          size={18}
                          fill={index === 0 ? "currentColor" : "none"}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="px-8 pb-8 pt-2 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className="font-bold text-2xl leading-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end">
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
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Verified
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="font-mono text-2xl font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mechanical-key flex-1 h-14 flex items-center justify-center gap-3"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Latest Tech Launches ───────────────────────────────── */}
        <section className="space-y-10">
          <div className="flex items-center gap-4">
            <div
              className="w-3 h-3 rounded-full animate-led-pulse"
              style={{
                background: 'var(--accent-red)',
                boxShadow: '0 0 8px var(--accent-red)',
              }}
            />
            <h2
              className="text-3xl font-black tracking-tight uppercase"
              style={{ color: 'var(--text-primary)' }}
            >
              LATEST TECH LAUNCHES
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {techLaunches.map((item, index) => (
              <div
                key={index}
                className="industrial-panel p-8 flex flex-col items-center justify-center text-center gap-6 cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'var(--recessed)',
                    boxShadow: 'var(--shadow-recessed)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <span
                  className="font-mono font-bold text-sm tracking-tight uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Community Favorites ────────────────────────────────── */}
        <section className="space-y-10 pb-20">
          <h2
            className="text-3xl font-black tracking-tight uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            COMMUNITY FAVORITES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((item, index) => (
              <div
                key={index}
                className="industrial-panel p-6 flex items-center justify-between gap-4 cursor-pointer"
                style={{ borderLeft: '4px solid var(--accent-red)' }}
              >
                <span
                  className="font-bold"
                  style={{ color: 'var(--text-primary)' }}
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
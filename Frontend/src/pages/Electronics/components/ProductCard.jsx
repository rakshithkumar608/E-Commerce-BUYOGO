import React from "react";
import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({
  item,
  handleAddToCart,
  showRating = true,
  showCartButton = true,
  accentColor = "var(--accent-red)",
}) => {
  return (
    <div className="industrial-panel group flex flex-col">
      {/* Image well */}
      <div className="p-4">
        <div
          className="relative overflow-hidden rounded-xl aspect-square"
          style={{
            background: "var(--recessed)",
            boxShadow: "var(--shadow-recessed)",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline-screen pointer-events-none opacity-30" />
        </div>
      </div>

      {/* Product details */}
      <div className="p-6 pt-2 space-y-4 flex-1 flex flex-col">
        <h3
          className="font-bold text-lg leading-tight"
          style={{
            color: "var(--text-primary)",
            textShadow: "0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          {item.name}
        </h3>

        {/* Rating */}
        {showRating && (
          <div className="flex items-center gap-1.5">
            <Star size={14} fill={accentColor} stroke="none" />
            <span
              className="font-mono text-sm font-bold"
              style={{ color: "var(--text-muted)" }}
            >
              {item.averageRating?.toFixed(1) || "0.0"}
            </span>
          </div>
        )}

        {/* Price */}
        <div>
          <p
            className="text-[8px] font-bold uppercase tracking-widest mb-0.5 font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            PRICE
          </p>
          <span
            className="font-mono text-xl font-bold"
            style={{
              color: "var(--text-primary)",
              textShadow: "0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            ${item.price}
            <span
              className="text-[10px] font-normal ml-1"
              style={{ color: "var(--text-muted)" }}
            >
              USD
            </span>
          </span>
        </div>

        {/* Add to Cart */}
        {showCartButton && (
          <button
            onClick={() => handleAddToCart(item)}
            className="mechanical-key w-full h-12 flex items-center justify-center gap-2 mt-auto"
            style={{ background: accentColor }}
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
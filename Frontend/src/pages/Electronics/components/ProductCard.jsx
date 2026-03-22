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
      <div className="p-3 sm:p-4">
        <div
          className="relative overflow-hidden rounded-xl aspect-square"
          style={{
            background: "var(--elec-surface)",
            boxShadow: "var(--shadow-recessed)",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline-screen pointer-events-none opacity-20" />
        </div>
      </div>

      {/* Product details */}
      <div className="p-4 sm:p-6 pt-1 sm:pt-2 space-y-3 sm:space-y-4 flex-1 flex flex-col">
        <h3
          className="font-bold text-base sm:text-lg leading-tight"
          style={{ color: "var(--elec-text)" }}
        >
          {item.name}
        </h3>

        {/* Rating */}
        {showRating && (
          <div className="flex items-center gap-1.5">
            <Star size={14} fill={accentColor} stroke="none" />
            <span
              className="font-mono text-sm font-bold"
              style={{ color: "var(--elec-text-muted)" }}
            >
              {item.averageRating?.toFixed(1) || "0.0"}
            </span>
          </div>
        )}

        {/* Price */}
        <div>
          <p
            className="text-[8px] font-bold uppercase tracking-widest mb-0.5 font-mono"
            style={{ color: "var(--elec-text-muted)" }}
          >
            PRICE
          </p>
          <span
            className="font-mono text-lg sm:text-xl font-bold"
            style={{ color: "var(--elec-text)" }}
          >
            ${item.price}
            <span
              className="text-[10px] font-normal ml-1"
              style={{ color: "var(--elec-text-muted)" }}
            >
              USD
            </span>
          </span>
        </div>

        {/* Add to Cart */}
        {showCartButton && (
          <button
            onClick={() => handleAddToCart(item)}
            className="mechanical-key w-full h-11 sm:h-12 flex items-center justify-center gap-2 mt-auto"
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
import React from "react";
import { ShoppingCart, Star, Zap } from "lucide-react";

const StoreProductCard = ({
  item,
  handleAddToCart,
  showRating = true,
  showCartButton = true,
  accentColor = "#F7931A",
  accentGold = "#FFD600",
}) => {
  return (
    <div
      className="store-card group flex flex-col relative overflow-hidden cursor-pointer"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Corner accents (visible on hover) */}
      <div
        className="absolute top-3 left-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          borderTop: `2px solid ${accentColor}`,
          borderLeft: `2px solid ${accentColor}`,
        }}
      />
      <div
        className="absolute top-3 right-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          borderTop: `2px solid ${accentColor}`,
          borderRight: `2px solid ${accentColor}`,
        }}
      />

      {/* Image container */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,17,21,1) 0%, rgba(15,17,21,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Rating badge overlaid on image */}
        {showRating && item.averageRating && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full z-10"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Star
              size={11}
              fill={accentColor}
              stroke="none"
              style={{ color: accentColor }}
            />
            <span
              className="font-mono text-xs font-bold"
              style={{ color: accentColor }}
            >
              {item.averageRating?.toFixed(1) || "0.0"}
            </span>
          </div>
        )}

        {/* Live indicator */}
        <div className="absolute top-3 right-3 z-10">
          <div className="relative w-2.5 h-2.5">
            <div
              className="store-ping"
              style={{
                background: accentColor,
                opacity: 0.4,
              }}
            />
            <div
              className="relative w-2.5 h-2.5 rounded-full"
              style={{
                background: accentColor,
                boxShadow: `0 0 6px ${accentColor}`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Brand label */}
        {item.brand && (
          <span
            className="font-mono text-[10px] font-bold uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            {item.brand}
          </span>
        )}

        {/* Name */}
        <h3
          className="font-heading font-semibold text-base leading-snug text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {item.name}
        </h3>

        {/* Price gradient */}
        <div className="mt-auto">
          <p
            className="font-mono text-[9px] font-bold uppercase tracking-widest mb-0.5"
            style={{ color: "var(--muted)" }}
          >
            Price
          </p>
          <span
            className="font-mono text-xl font-bold"
            style={{
              background: `linear-gradient(to right, ${accentColor}, ${accentGold})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ${item.price}
            <span
              className="text-[10px] font-normal ml-1"
              style={{
                background: "none",
                WebkitTextFillColor: "var(--muted)",
                color: "var(--muted)",
              }}
            >
              USD
            </span>
          </span>
        </div>

        {/* Add to Cart */}
        {showCartButton && (
          <button
            onClick={() => handleAddToCart(item)}
            className="store-btn w-full justify-center mt-1"
            style={{
              background: `linear-gradient(to right, ${accentColor === "#F7931A" ? "#EA580C" : accentColor}, ${accentColor})`,
              boxShadow: `0 0 20px -5px ${accentColor}80`,
            }}
          >
            <ShoppingCart size={14} />
            Add to Cart
          </button>
        )}
      </div>

      {/* Glow blob on hover */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: accentColor,
          filter: "blur(40px)",
          opacity: 0,
        }}
      />
    </div>
  );
};

export default StoreProductCard;

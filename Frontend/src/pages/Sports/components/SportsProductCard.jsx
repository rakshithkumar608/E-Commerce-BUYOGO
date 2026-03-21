import React from "react";
import { ShoppingCart, Star } from "lucide-react";

const shapeColors = ["#D02020", "#1040C0", "#F0C020"];
const shapes = ["circle", "square", "rotated"];

const SportsProductCard = ({
  item,
  handleAddToCart,
  index = 0,
  accentColor = "#D02020",
}) => {
  const shapeType = shapes[index % 3];
  const decoColor = shapeColors[index % 3];

  return (
    <div className="bh-card group flex flex-col">
      {/* Decorative corner shape */}
      <div className="absolute top-3 right-3 z-10">
        {shapeType === "circle" && (
          <div className="w-3 h-3 rounded-full" style={{ background: decoColor }} />
        )}
        {shapeType === "square" && (
          <div className="w-3 h-3" style={{ background: decoColor }} />
        )}
        {shapeType === "rotated" && (
          <div className="w-3 h-3 rotate-45" style={{ background: decoColor }} />
        )}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden border-b-4 border-black" style={{ height: 200 }}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Brand */}
        {item.brand && (
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#888" }}
          >
            {item.brand}
          </span>
        )}

        {/* Name */}
        <h3 className="font-bold text-base uppercase tracking-tight leading-tight">
          {item.name}
        </h3>

        {/* Rating */}
        {item.averageRating && (
          <div className="flex items-center gap-1.5">
            <Star size={13} fill={accentColor} stroke="none" />
            <span className="text-xs font-bold" style={{ color: "#666" }}>
              {item.averageRating?.toFixed(1)}
            </span>
          </div>
        )}

        {/* Price */}
        <div className="mt-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>
            Price
          </p>
          <span className="font-black text-xl" style={{ color: accentColor }}>
            ${item.price}
            <span className="text-xs font-medium ml-1" style={{ color: "#999" }}>
              USD
            </span>
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => handleAddToCart(item)}
          className="bh-btn w-full justify-center mt-1"
          style={{
            background: accentColor,
            color: accentColor === "#F0C020" ? "#121212" : "white",
            border: "2px solid #121212",
            boxShadow: "4px 4px 0px 0px #121212",
          }}
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SportsProductCard;

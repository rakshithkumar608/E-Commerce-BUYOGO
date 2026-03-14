import React from "react";
import { ShoppingCart, Star } from "lucide-react";



const ProductCard = ({
    item,
    handleAddToCart,
    showRating = true,
    showCartButton = true
}) => {

    return (
        <div className="industrial-panel group flex flex-col hover:-translate-y-2 hover:shadow-floating">

            <div className="p-4">
                <div className="relative overflow-hidden rounded-xl shadow-recessed bg-recessed aspect-square">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                </div>
            </div>

            {/* Product details */}
            <div className="p-6 pt-2 space-y-4 flex-1 flex flex-col">
                <h3 className="font-black text-lg text-text-primary">
                    {item.name}
                </h3>

                {/* Conditional Rating */}
                {showRating && (
                    <div className="flex items-center gap-1.5">
                        <Star size={14} className="text-yellow-500" fill="currentColor"/>
                        <span className="font-mono text-sm">
                            {item.averageRating?.toFixed(1) || 0}
                        </span>
                    </div>
                )}

                {/* Price */}
                <span className="font-mono text-lg font-black text-text-primary">
                    ${item.price}
                </span>

                {/* Conditional Cart Button */}
          {showCartButton && (
          <button
            onClick={() => handleAddToCart(item)}
            className="mechanical-key w-full h-12 flex items-center justify-center gap-2 mt-auto"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        )}
            </div>
        </div>
    )
}

export default ProductCard
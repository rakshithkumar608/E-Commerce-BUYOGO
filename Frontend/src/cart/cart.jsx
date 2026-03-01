import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/cartSlice";
import { getCart, updateQuantityAPI, removeFromCart } from "../api/cart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);

  const fetchCart = useCallback(async () => {
    try {
      const data = await getCart();
      dispatch(setCart(data?.items || []));
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleQuantityChange = async (productId, quantity) => {
    await updateQuantityAPI(productId, quantity);
    fetchCart();
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      fetchCart();
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 min-h-screen">
      <div className="border-b border-gray-200 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Shopping Cart
        </h2>
        <button
          onClick={() => navigate("/fashion")}
          className="group flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors "
        >
          <svg 
            className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
          <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-xl font-medium mb-8">
            Your cart is currently empty
          </p>
          <button
            onClick={() => navigate("/fashion")}
            className="bg-black text-white px-8 py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-md"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items List */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div
                key={item.product._id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 bg-white border border-gray-200 rounded-2xl hover:shadow-sm transition-shadow"
              >
                {/* Product Image */}
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                      {item.product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 font-medium">
                      Fashion Collection
                    </p>
                  </div>
                  <p className="mt-3 text-xl font-bold text-gray-900">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    Quantity
                  </span>
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden focus-within:ring-2 focus-within:ring-black">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(
                          item.product._id,
                          Number(e.target.value)
                        )
                      }
                      className="w-20 h-10 text-center text-gray-900 bg-transparent border-none focus:ring-0 sm:text-base font-semibold appearance-none outline-none"
                    />
                  </div>
                  <button
                    onClick={() => handleRemove(item.product._id)}
                    className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-96 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 h-fit sticky top-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6">
              Order Summary
            </h3>
            
            <div className="space-y-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Shipping</span>
                <span className="text-emerald-600 font-semibold">
                  Calculated at checkout
                </span>
              </div>
            </div>

            <div className="flex justify-between py-6 items-center">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-3xl font-black text-gray-900 tracking-tight">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-black text-white px-6 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => navigate("/fashion/orders")}
                className="w-full bg-white text-black border border-gray-300 px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                View My Orders
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
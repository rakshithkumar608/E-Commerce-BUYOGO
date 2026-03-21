import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle, Package, Truck, ArrowRight, ShoppingBag, Copy, Check } from "lucide-react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Order data passed via state from checkout
  const orderData = location.state || {};
  const orderId = orderData.orderId || "N/A";
  const total = orderData.total || 0;
  const paymentMethod = orderData.paymentMethod || "COD";
  const shippingAddress = orderData.shippingAddress || "";

  useEffect(() => {
    // Animate content in after a short delay
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div
          className={`max-w-lg w-full text-center transition-all duration-700 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* ── Success Animation ── */}
          <div className="relative mx-auto mb-8 w-28 h-28">
            {/* Outer pulsing ring */}
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: "rgba(16, 185, 129, 0.15)",
                animationDuration: "2s",
              }}
            />
            {/* Inner ring */}
            <div
              className="absolute inset-2 rounded-full"
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                border: "2px solid rgba(16, 185, 129, 0.2)",
              }}
            />
            {/* Checkmark circle */}
            <div className="absolute inset-4 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200">
              <CheckCircle size={40} className="text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* ── Heading ── */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-zinc-500 font-medium mb-8">
            Thank you for your purchase. Your order has been confirmed.
          </p>

          {/* ── Order Details Card ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden text-left mb-6">
            {/* Order ID Header */}
            <div className="bg-zinc-900 px-5 sm:px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">
                  Order ID
                </p>
                <p className="text-white font-mono font-bold text-sm sm:text-base break-all">
                  #{orderId.slice(-12).toUpperCase()}
                </p>
              </div>
              <button
                onClick={handleCopyOrderId}
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-800"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Details Grid */}
            <div className="p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                    Total Amount
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-zinc-900">
                    ${total.toFixed ? total.toFixed(2) : total}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                    Payment
                  </p>
                  <p className="text-sm font-bold text-zinc-900">{paymentMethod}</p>
                  <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                    ✓ Confirmed
                  </p>
                </div>
              </div>

              {shippingAddress && (
                <div className="pt-4 border-t border-zinc-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                    Shipping To
                  </p>
                  <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                    {shippingAddress}
                  </p>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="bg-zinc-50 px-5 sm:px-6 py-4 border-t border-zinc-100">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">
                What's Next
              </p>
              <div className="space-y-3">
                {[
                  { icon: <Package size={16} />, text: "Order is being processed", color: "bg-emerald-500" },
                  { icon: <Truck size={16} />, text: "Expected delivery in 3-5 days", color: "bg-zinc-300" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full ${step.color} flex items-center justify-center text-white flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <p className="text-sm font-medium text-zinc-700">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Action Buttons ── */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/fashion/orders")}
              className="flex-1 bg-zinc-900 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-200"
            >
              <ShoppingBag size={16} />
              View My Orders
            </button>
            <button
              onClick={() => navigate("/store")}
              className="flex-1 bg-white text-zinc-900 px-6 py-3.5 rounded-xl font-bold border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 transition-colors flex items-center justify-center gap-2"
            >
              Continue Shopping
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Confetti-like decorative dots */}
          <div className="mt-8 flex justify-center gap-1.5">
            {["bg-emerald-400", "bg-amber-400", "bg-blue-400", "bg-rose-400", "bg-purple-400"].map((color, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${color}`}
                style={{
                  animation: `bounce 1s ease infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;

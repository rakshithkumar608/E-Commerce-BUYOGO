import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../api/order";
import { setCart } from "../store/cartSlice";
import { toast } from "sonner";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    paymentMethod: "COD",
  });
  const [placing, setPlacing] = useState(false);

  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.address || !form.city || !form.state || !form.zip || !form.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    setPlacing(true);
    try {
      const shippingAddress = `${form.fullName}, ${form.address}, ${form.city}, ${form.state} ${form.zip}, Ph: ${form.phone}`;
      await createOrder({
        shippingAddress,
        paymentMethod: form.paymentMethod,
      });

      toast.success("Order placed successfully 🎉");
      dispatch(setCart([]));
      navigate("/fashion/orders");
    } catch (error) {
      toast.error(error.message || "Checkout failed");
    } finally {
      setPlacing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-zinc-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">Your cart is empty</h2>
            <p className="text-zinc-500 mb-4">Add items to your cart before checkout</p>
            <button
              onClick={() => navigate("/fashion")}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-zinc-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-zinc-900">
            Checkout
          </h1>

          {/* Back to Shopping Button */}
          <button
            onClick={() => navigate("/fashion")}
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Shopping
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Shipping + Payment Form */}
          <form onSubmit={handlePlaceOrder} className="lg:col-span-2 space-y-6">
            {/* Shipping */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6">
              <h2 className="text-lg font-bold text-zinc-900 mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Address</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 Main Street, Apt 4"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">City</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="New York"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">State</label>
                  <input
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="NY"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">ZIP Code</label>
                  <input
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    placeholder="10001"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6">
              <h2 className="text-lg font-bold text-zinc-900 mb-4">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { value: "COD", label: "Cash on Delivery", desc: "Pay when you receive" },
                  { value: "UPI", label: "UPI", desc: "Google Pay, PhonePe, Paytm" },
                  { value: "Card", label: "Credit / Debit Card", desc: "Visa, Mastercard, etc." },
                ].map((method) => (
                  <label
                    key={method.value}
                    className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition ${
                      form.paymentMethod === method.value
                        ? "border-zinc-900 bg-zinc-50"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={form.paymentMethod === method.value}
                      onChange={handleChange}
                      className="accent-black w-4 h-4"
                    />
                    <div>
                      <p className="font-medium text-sm text-zinc-900">{method.label}</p>
                      <p className="text-xs text-zinc-500">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Place Order Button (mobile) */}
            <div className="lg:hidden">
              <button
                type="submit"
                disabled={placing}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 transition disabled:opacity-50"
              >
                {placing ? "Placing Order..." : `Place Order — $${total.toFixed(2)}`}
              </button>
            </div>
          </form>

          {/* Right — Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-zinc-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.product._id} className="flex items-center gap-3">
                    {item.product.image ? (
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-zinc-100 rounded-lg" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-900 truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        Qty: {item.quantity} × ${item.product.price}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-zinc-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-600">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-zinc-900 pt-2 border-t border-zinc-100">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order Button (desktop) */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={placing}
                className="hidden lg:block w-full mt-4 bg-black text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 transition disabled:opacity-50"
              >
                {placing ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;

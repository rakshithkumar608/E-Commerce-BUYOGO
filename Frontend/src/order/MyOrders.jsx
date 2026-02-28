import { useEffect, useState } from "react";
import { getMyOrders } from "../api/order";
import { toast } from "sonner";

const STEPS = ["Pending", "Processing", "Shipped", "Delivered"];

// Enhanced UI colors for status badges
const STATUS_COLORS = {
  Pending: "bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-600/20",
  Processing: "bg-blue-100 text-blue-800 ring-1 ring-inset ring-blue-600/20",
  Shipped: "bg-purple-100 text-purple-800 ring-1 ring-inset ring-purple-600/20",
  Delivered: "bg-emerald-100 text-emerald-800 ring-1 ring-inset ring-emerald-600/20",
  Cancelled: "bg-red-100 text-red-800 ring-1 ring-inset ring-red-600/20",
};

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch {
        toast.error("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleCancel = async (orderId) => {
    if (!window.confirm("Cancel this order?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:5000/api/orders/cancel/${orderId}`,
        { method: "PUT", headers: { Authorization: `Bearer ${token}` } }
      );
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Cancel failed");
      }
      toast.success("Order cancelled");
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
    } catch (err) {
      toast.error(err.message);
    }
  };

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Loading your orders...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">My Orders</h1>
        <p className="text-gray-500 mt-2 font-medium">
          {orders.length} order{orders.length !== 1 ? "s" : ""} placed
        </p>
      </div>

      {/* Empty State */}
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
          <div className="h-20 w-20 bg-white shadow-sm rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-500 font-medium">Place an order to see it tracked here.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => {
            const currentStep = STEPS.indexOf(order.orderStatus);
            const isCancelled = order.orderStatus === "Cancelled";

            return (
              <div
                key={order._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Order Header */}
                <div className="px-6 py-5 bg-gray-50/50 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-extrabold text-lg text-gray-900 uppercase tracking-tight">
                        Order #{order._id.slice(-8)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${STATUS_COLORS[order.orderStatus]}`}>
                        {order.orderStatus}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-500">Placed on {formatDate(order.createdAt)}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-medium text-gray-500 mb-0.5">Total Amount</p>
                    <p className="text-2xl font-black text-gray-900">${order.totalAmount.toLocaleString()}</p>
                  </div>
                </div>

                {/* ── Breadcrumb Progress ── */}
                <div className="px-6 py-8 border-b border-gray-100">
                  {isCancelled ? (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-700 px-5 py-4 rounded-xl text-sm font-bold">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      This order has been cancelled and will not be fulfilled.
                    </div>
                  ) : (
                    <div className="max-w-3xl mx-auto">
                      <div className="flex items-center justify-between relative">
                        {/* Background Line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full" />
                        
                        {/* Progress Line */}
                        <div 
                          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-black rounded-full transition-all duration-500"
                          style={{ width: `${(Math.max(0, currentStep) / (STEPS.length - 1)) * 100}%` }}
                        />

                        {STEPS.map((step, i) => {
                          const done = i <= currentStep;
                          
                          return (
                            <div key={step} className="relative flex flex-col items-center group">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ring-4 ring-white z-10 ${
                                  done
                                    ? "bg-black text-white shadow-md"
                                    : "bg-gray-200 text-gray-400"
                                }`}
                              >
                                {done && i < currentStep ? (
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  i + 1
                                )}
                              </div>
                              <span className={`absolute top-12 text-xs sm:text-sm font-bold whitespace-nowrap ${
                                done ? "text-gray-900" : "text-gray-400"
                              }`}>
                                {step}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Order Items ── */}
                <div className="px-6 py-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Items in this order</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:border-gray-200 transition-colors">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-gray-100" />
                        ) : (
                          <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs font-medium">
                            No img
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-gray-900 truncate">{item.name}</p>
                          <p className="text-sm text-gray-500 mt-1 font-medium">Qty: {item.quantity} <span className="mx-1 text-gray-300">•</span> ${item.price}</p>
                        </div>
                        <p className="font-black text-base text-gray-900">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Footer: Shipping + Payment + Actions ── */}
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200 flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Shipping Address</p>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed max-w-xs">{order.shippingAddress}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Payment Details</p>
                      <p className="text-sm text-gray-700 font-medium">
                        Method: <span className="text-gray-900 font-bold">{order.paymentMethod}</span>
                      </p>
                      <p className="text-sm text-gray-700 font-medium mt-1">
                        Status:{" "}
                        <span className={order.paymentStatus === "Paid" ? "text-emerald-600 font-bold" : "text-amber-600 font-bold"}>
                          {order.paymentStatus}
                        </span>
                      </p>
                      {order.deliveredAt && (
                        <div className="mt-2 flex items-center text-sm font-bold text-emerald-600">
                          <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Delivered {formatDate(order.deliveredAt)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cancel Action */}
                  {(order.orderStatus === "Pending" || order.orderStatus === "Processing") && (
                    <div className="md:ml-auto md:border-l md:border-gray-200 md:pl-6 flex flex-col justify-center">
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="w-full md:w-auto text-sm text-red-600 bg-white border border-red-200 px-6 py-2.5 rounded-xl hover:bg-red-50 hover:border-red-300 hover:shadow-sm transition-all font-bold"
                      >
                        Cancel Order
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
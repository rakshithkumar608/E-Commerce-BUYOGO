import { useEffect, useState } from "react";
import { getMyOrders } from "../api/order";
import { toast } from "sonner";

const STEPS = ["Pending", "Processing", "Shipped", "Delivered"];

const STATUS_COLORS = {
  Pending: "bg-yellow-100 text-yellow-800",
  Processing: "bg-blue-100 text-blue-800",
  Shipped: "bg-purple-100 text-purple-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
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
      <div className="flex items-center justify-center py-32">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">My Orders</h1>
        <p className="text-sm text-zinc-500 mt-1">
          {orders.length} order{orders.length !== 1 ? "s" : ""} placed
        </p>
      </div>

      {/* Empty State */}
      {orders.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm text-center py-16 px-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-zinc-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-zinc-800">No orders yet</h3>
          <p className="text-zinc-500 text-sm mt-1">Place an order to see it here.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map((order) => {
            const currentStep = STEPS.indexOf(order.orderStatus);
            const isCancelled = order.orderStatus === "Cancelled";

            return (
              <div
                key={order._id}
                className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden"
              >
                {/* Order Header */}
                <div className="px-5 pt-5 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-zinc-900">
                        Order #{order._id.slice(-8).toUpperCase()}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_COLORS[order.orderStatus]}`}>
                        {order.orderStatus}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">{formatDate(order.createdAt)}</p>
                  </div>
                  <p className="text-xl font-bold text-zinc-900">${order.totalAmount.toLocaleString()}</p>
                </div>

                {/* ── Breadcrumb Progress ── */}
                <div className="px-5 pb-4">
                  {isCancelled ? (
                    <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2.5 rounded-lg text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      This order has been cancelled
                    </div>
                  ) : (
                    <div className="bg-zinc-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        {STEPS.map((step, i) => {
                          const done = i < currentStep;
                          const active = i === currentStep;
                          return (
                            <div key={step} className="flex items-center flex-1 last:flex-none">
                              {/* Step circle + label */}
                              <div className="flex flex-col items-center">
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                    done
                                      ? "bg-emerald-500 text-white shadow-sm shadow-emerald-200"
                                      : active
                                      ? "bg-zinc-900 text-white shadow-sm"
                                      : "bg-zinc-200 text-zinc-400"
                                  }`}
                                >
                                  {done ? (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : (
                                    i + 1
                                  )}
                                </div>
                                <span className={`text-[11px] mt-1.5 font-medium ${
                                  done ? "text-emerald-600" : active ? "text-zinc-900" : "text-zinc-400"
                                }`}>
                                  {step}
                                </span>
                              </div>
                              {/* Connector line */}
                              {i < STEPS.length - 1 && (
                                <div className={`flex-1 h-0.5 mx-2 rounded-full ${
                                  done ? "bg-emerald-400" : "bg-zinc-200"
                                }`} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Order Items ── */}
                <div className="px-5 pb-4 space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-zinc-50 p-3 rounded-lg">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                      ) : (
                        <div className="w-12 h-12 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 text-[10px]">
                          No img
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-zinc-900 truncate">{item.name}</p>
                        <p className="text-xs text-zinc-500">Qty: {item.quantity} × ${item.price}</p>
                      </div>
                      <p className="font-semibold text-sm text-zinc-900">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ── Footer: Shipping + Payment + Actions ── */}
                <div className="px-5 pb-5 pt-2 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-zinc-600">
                  <div className="space-y-0.5">
                    <p><span className="font-medium text-zinc-700">Ship to:</span> {order.shippingAddress}</p>
                    <p>
                      <span className="font-medium text-zinc-700">Payment:</span> {order.paymentMethod} —{" "}
                      <span className={order.paymentStatus === "Paid" ? "text-emerald-600 font-semibold" : "text-amber-600 font-semibold"}>
                        {order.paymentStatus}
                      </span>
                    </p>
                    {order.deliveredAt && (
                      <p className="text-emerald-600 font-medium">✅ Delivered on {formatDate(order.deliveredAt)}</p>
                    )}
                  </div>

                  {(order.orderStatus === "Pending" || order.orderStatus === "Processing") && (
                    <button
                      onClick={() => handleCancel(order._id)}
                      className="text-sm text-red-600 border border-red-200 px-4 py-1.5 rounded-lg hover:bg-red-50 transition font-medium self-start"
                    >
                      Cancel Order
                    </button>
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

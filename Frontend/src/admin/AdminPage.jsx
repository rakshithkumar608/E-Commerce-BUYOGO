import { useEffect, useState } from "react";
import { getDashboardStats, getAllOrders, updateOrderStatus } from "../api/admin";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const STATUS_OPTIONS = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

const STATUS_COLORS = {
  Pending: "bg-yellow-100 text-yellow-800",
  Processing: "bg-blue-100 text-blue-800",
  Shipped: "bg-purple-100 text-purple-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

const AdminPage = () => {
  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notAdmin, setNotAdmin] = useState(false);

  const fetchData = async () => {
    try {
      const [statsData, ordersData] = await Promise.all([
        getDashboardStats(),
        getAllOrders(),
      ]);
      setStats(statsData);
      setOrders(ordersData);
      setNotAdmin(false);
    } catch (err) {
      if (err.message.includes("403") || err.message.includes("Admin")) {
        setNotAdmin(true);
      } else {
        toast.error(err.message || "Failed to load admin data");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBecomeAdmin = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/admin/make-admin", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("You are now an admin! Reloading...");
      setTimeout(() => {
        setLoading(true);
        setNotAdmin(false);
        fetchData();
      }, 1000);
    } catch {
      toast.error("Failed to become admin. Make sure you are logged in.");
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      toast.success("Order status updated");
      fetchData();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  // Not admin — show promote button
  if (notAdmin) {
    return (
      <div className="flex flex-col min-h-screen bg-zinc-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-sm p-10 text-center max-w-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">Admin Access Required</h2>
            <p className="text-zinc-500 text-sm mb-6">
              You don't have admin privileges yet. Click below to become an admin.
            </p>
            <button
              onClick={handleBecomeAdmin}
              className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-800 transition"
            >
              Become Admin
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

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">Admin Dashboard</h1>
            <p className="text-sm text-zinc-500 mt-1">Manage orders and monitor business</p>
          </div>
          <Link to="/fashion" className="text-sm text-zinc-500 hover:text-zinc-900 transition">
            ← Back to Store
          </Link>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-zinc-100">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Total Orders</p>
              <p className="text-3xl font-bold text-zinc-900 mt-2">{stats.totalOrders}</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-zinc-100">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Total Products</p>
              <p className="text-3xl font-bold text-zinc-900 mt-2">{stats.totalProducts}</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-zinc-100">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Total Users</p>
              <p className="text-3xl font-bold text-zinc-900 mt-2">{stats.totalUsers}</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-zinc-100">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Revenue</p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">${stats.revenue.toLocaleString()}</p>
            </div>
          </div>
        )}

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-100">
            <h2 className="text-lg font-bold text-zinc-900">All Orders</h2>
            <p className="text-xs text-zinc-500">{orders.length} orders total</p>
          </div>

          {orders.length === 0 ? (
            <div className="p-10 text-center text-zinc-500">No orders found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 text-xs text-zinc-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Order ID</th>
                    <th className="px-6 py-3 font-semibold">Customer</th>
                    <th className="px-6 py-3 font-semibold">Items</th>
                    <th className="px-6 py-3 font-semibold">Total</th>
                    <th className="px-6 py-3 font-semibold">Date</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                    <th className="px-6 py-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {orders.map((order) => (
                    <tr key={order._id} className="hover:bg-zinc-50 transition">
                      <td className="px-6 py-4 font-mono text-xs font-bold text-zinc-700">
                        #{order._id.slice(-8).toUpperCase()}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-zinc-900">{order.user?.name || "Unknown"}</p>
                        <p className="text-xs text-zinc-400">{order.user?.email || ""}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {order.items.map((item, idx) => (
                            <p key={idx} className="text-xs text-zinc-600">
                              {item.name} ×{item.quantity}
                            </p>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-zinc-900">
                        ₹{order.totalAmount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-zinc-500 text-xs">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${STATUS_COLORS[order.orderStatus]}`}>
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={order.orderStatus}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          className="text-xs border border-zinc-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-300"
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;

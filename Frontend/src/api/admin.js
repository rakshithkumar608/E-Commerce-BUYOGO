const BASE_URL = "http://localhost:5000/api/admin";

const getToken = () => localStorage.getItem("token");

export const getDashboardStats = async () => {
  const res = await fetch(`${BASE_URL}/stats`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error(`${res.status}: Failed to fetch stats`);
  return res.json();
};

export const getAllOrders = async () => {
  const res = await fetch(`${BASE_URL}/orders`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error(`${res.status}: Failed to fetch orders`);
  return res.json();
};

export const updateOrderStatus = async (orderId, orderStatus) => {
  const res = await fetch(`${BASE_URL}/orders/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ orderStatus }),
  });
  if (!res.ok) throw new Error("Failed to update order");
  return res.json();
};

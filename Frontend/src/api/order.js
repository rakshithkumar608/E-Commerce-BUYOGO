const BASE_URL = "http://localhost:5000/api/orders";

const getToken = () => localStorage.getItem("token");

// ➜ Create Order (Checkout)
export const createOrder = async (data) => {
  const token = getToken();

  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Checkout failed");
  }

  return res.json();
};

// ➜ Get My Orders
export const getMyOrders = async () => {
  const token = getToken();

  const res = await fetch(`${BASE_URL}/my-orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  return res.json();
};
const BASE_URL = "http://localhost:5000/api/cart";

const getToken = () => localStorage.getItem("token");

export const addToCart = async (productId, token) => {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId }),
  });

  if (!res.ok) {
    throw new Error("Failed to add to cart");
  }

  return res.json();
};

export const getCart = async () => {
  const token = getToken();
  const res = await fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const updateQuantityAPI = async (productId, quantity) => {
  const token = getToken();
  const response = await fetch(`${BASE_URL}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, quantity }),
  });

  return response.json();
};
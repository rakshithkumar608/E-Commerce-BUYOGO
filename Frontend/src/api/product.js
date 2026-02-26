const BASE_URL = "http://localhost:5000/api/products";

export const getProducts = async (params) => {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${BASE_URL}?${query}`);
    return res.json();
};

export const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
}
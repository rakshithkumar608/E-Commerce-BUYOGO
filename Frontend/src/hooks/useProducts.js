import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../api/product";
import { addToCart as addToCartAPI } from "../api/cart";
import { toast } from "sonner";

export const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("low");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts({ category });
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (minPrice) filtered = filtered.filter((p) => p.price >= Number(minPrice));
    if (maxPrice) filtered = filtered.filter((p) => p.price <= Number(maxPrice));

    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);
    if (sort === "rating") filtered.sort((a, b) => b.averageRating - a.averageRating);

    return filtered;
  }, [products, sort, minPrice, maxPrice]);

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      await addToCartAPI(product._id, token);
      toast.success(`${product.name} added to cart 🛒`, {
        style: { background: "green", color: "white" },
      });
    } catch (error) {
      toast.error("Failed to add to cart");
      console.error(error);
    }
  };

  return {
    filteredProducts,
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    handleAddToCart,
  };
};
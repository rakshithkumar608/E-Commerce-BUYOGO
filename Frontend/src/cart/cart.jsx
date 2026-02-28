import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/cartSlice";
import { getCart, updateQuantityAPI } from "../api/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const fetchCart = useCallback(async () => {
    try {
      const data = await getCart();
      dispatch(setCart(data?.items || []));
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleQuantityChange = async (productId, quantity) => {
    await updateQuantityAPI(productId, quantity);
    fetchCart();
  };

  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="p-10 space-y-6">
      <h2 className="text-3xl font-bold">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.product._id}
          className="flex justify-between items-center border p-4 rounded"
        >
          <div>
            <h3>{item.product.name}</h3>
            <p>${item.product.price}</p>
          </div>

          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              handleQuantityChange(
                item.product._id,
                Number(e.target.value)
              )
            }
            className="border w-16 text-center"
          />
        </div>
      ))}

      <h3 className="text-xl font-semibold">
        Total: ${total.toFixed(2)}
      </h3>

      <button className="bg-black text-white px-6 py-2 rounded">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
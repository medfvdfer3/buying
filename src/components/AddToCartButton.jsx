import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/appSlice";
import { useEffect, useState } from "react";

const AddToCartButton = ({ product, quantity = 1 }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.appReducer.products);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;

    const item = { ...product, quantity };
    dispatch(addToCart(item));
    setIsAdded(true);
  };

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => setIsAdded(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  const alreadyInCart = cart.some((item) => item.id === product?.id);

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdded}
      className={`flex items-center space-x-1 px-4 py-2 my-2 bg-[#2563EB] text-gray-50 rounded-md ${
        alreadyInCart
          ? "bg-green-600 hover:bg-green-700"
          : "bg-[#2563EB] hover:bg-blue-700"
      } text-white`}
    >
      {isAdded
        ? "✅ Added!"
        : alreadyInCart
        ? "✔ Already in cart"
        : "🛒 Add to cart"}
    </button>
  );
};

export default AddToCartButton;

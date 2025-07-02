import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { decrement, increment, removeItem, removeAll } from "../redux/appSlice";

const Cart = () => {
  const products = useSelector((state) => state.appReducer.products);
  const dispatch = useDispatch();

  // حساب السعر الإجمالي (الكمية * السعر لكل منتج)
  const totalPrice = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-xl text-[#0146d0]">🛒 Your cart is empty</h2>
      </div>
    );
  }

  const handleRemoveItem = (id) => {
    if (window.confirm("Are you sure you want to remove this product?")) {
      dispatch(removeItem(id));
    }
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to remove all products?")) {
      dispatch(removeAll());
    }
  };

  const handleIncrement = (id) => {
    dispatch(increment(id));
    // toast.success("Quantity increased"); // Toast عند زيادة الكمية
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
    // toast.info("Quantity decreased"); // Toast عند تقليل الكمية
  };

  return (
    <div className="p-6 pt-52 max-w-7xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#0146d0]">
        🛒 Your Shopping Cart
      </h1>

      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition relative"
          >
            {/* أيقونة حذف المنتج داخل نفس الكارت */}
            <button
              onClick={() => handleRemoveItem(product.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-600"
            >
              <AiOutlineDelete size={24} />
            </button>

            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-40 h-40 object-cover rounded-lg bg-gray-100"
            />

            <div className="flex-1 w-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {product.title}
              </h2>
              {/* <p className="text-sm text-gray-600 mb-2">
                {product.description.length > 100
                  ? product.description.substring(0, 100) + "..."
                  : product.description}
              </p> */}

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrement(product.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    -
                  </button>

                  <span className="text-lg font-medium">
                    {product.quantity}
                  </span>

                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="w-8 h-8 flex items-center justify-center bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-[#0146d0] text-sm">
                    Unit: ${product.price.toFixed(2)}
                  </p>
                  <p className="text-indigo-600 font-semibold text-lg">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* إجمالي السعر */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xl font-semibold text-gray-800">
          🧾 Total:{" "}
          <span className="text-[#0146d0]">${totalPrice.toFixed(2)}</span>
        </p>

        <button
          onClick={handleClearCart}
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition"
        >
          🗑️ Remove All
        </button>
      </div>
    </div>
  );
};

export default Cart;

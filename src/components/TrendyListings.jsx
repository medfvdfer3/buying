import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { allProducts } from "../data/products";
import AddToCartButton from "./AddToCartButton";
const products = allProducts.filter((product) => product.category === "trendy");

const TrendyListings = () => {
  return (
    <div className="my-16 px-8">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
          Trendy Listings
        </h2>
        <Link to="/" className="text-blue-500 font-semibold">
          See All
        </Link>
      </div>

      {/* TrendyListings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-50 duration-200"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-2xl font-medium mb-2">{product.title}</h3>
            <div className="flex items-center my-3 space-x-2 relative">
              <span className="text-[#2563EB] font-bold text-3xl">
                ${product.price}
              </span>
              <span className="text-[#2563EB] text-xs font-normal line-through absolute bottom-8 left-10">
                ${product.oldPrice}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-1">
                <Star size={18} color="#FFD700" fill="#FFD700" />
                <span>{product.rating}</span>
              </div>
              {/* Add To Card */}
              <AddToCartButton product={product} quantity={1} />
            </div>
            <Link
              to={`/product/${product.id}`}
              className="text-blue-600 hover:underline mt-2 text-xl text-center"
            >
              More Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrendyListings;

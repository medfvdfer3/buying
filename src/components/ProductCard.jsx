import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-44 object-contain bg-gray-50 p-4"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-base line-clamp-1">
          {product.title}
        </h3>
        <div className="flex items-center text-sm text-yellow-500 my-1">
          <Star className="w-4 h-4 fill-yellow-500 mr-1" />
          {product.rating}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-blue-600 font-bold text-lg">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.oldPrice}
            </span>
          )}
        </div>
        <AddToCartButton product={product} quantity={1} />
      </div>
    </Link>
  );
};

export default ProductCard;

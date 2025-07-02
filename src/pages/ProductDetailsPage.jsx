import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Check, Shield } from "lucide-react";
import { allProducts } from "../data/products"; // تأكد إنك مجمع كل المنتجات هنا
import AddToCartButton from "../components/AddToCartButton";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("Description");

  // ✅ الصورة الرئيسية المختارة
  const [selectedImage, setSelectedImage] = useState(product?.image);

  const reviews = [
    {
      name: "Youssef Talaat",
      rating: 5,
      text: "Got the code instantly after payment. Worked perfectly with my PlayStation account. No issues at all. Highly recommend for gamers in Saudi Arabia.",
    },
    {
      name: "Faisal Ahmed",
      rating: 5,
      text: "Got the code instantly after payment. Worked perfectly with my PlayStation account. No issues at all. Highly recommend for gamers in Saudi Arabia.",
    },
    {
      name: "Sarah Ali",
      rating: 5,
      text: "Amazing service. Got the code right away and redeemed without problems. Will buy again!",
    },
    {
      name: "Mohamed Salah",
      rating: 5,
      text: "Fast and secure. Used it to buy my PS Plus subscription. Totally recommend!",
    },
  ];

  if (!product)
    return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 pt-52 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Product Image */}
        <div className="space-y-4">
          <div className="rounded-lg p-8 flex items-center justify-center">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-[300px] object-contain rounded-lg bg-white"
            />
          </div>

          <div className="flex space-x-2">
            {[product.image, product.image2, product.image3, product.image4]
              .filter(Boolean)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded border cursor-pointer ${
                    selectedImage === img
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} (255 reviews)
              </span>
            </div>

            <div className="bg-orange-500 text-white px-2 py-1 text-xs rounded inline-block mb-4">
              30% Discount
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price}
              </span>
              <span className="text-gray-500 line-through">
                ${product.oldPrice}
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border rounded">
                <AddToCartButton product={product} quantity={1} />
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span>Instant delivery to your email</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Secure & verified codes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        {/* Tabs Buttons */}
        <div className="flex space-x-6 border-b mb-6">
          {["Description", "Reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="mt-6">
          {activeTab === "Description" && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div>
              {/* Summary + Individual Reviews */}
              <div className="flex flex-col lg:flex-row justify-between gap-6 mt-10">
                {/* Summary */}
                <div className="flex-1 min-w-[300px]">
                  <h3 className="text-lg font-semibold mb-4">
                    ⭐ Customer Reviews (4.8/5)
                  </h3>

                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Excellent", percent: "80%", color: "green" },
                      { label: "Good", percent: "15%", color: "blue" },
                      { label: "Dislike", percent: "3%", color: "yellow" },
                      { label: "Bad", percent: "2%", color: "red" },
                    ].map(({ label, percent, color }, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <span className="w-20 text-sm">{label}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-${color}-500 h-2 rounded-full`}
                            style={{ width: percent }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{percent}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="flex-1 min-w-[300px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {reviews.map((review, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg shadow-sm border"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xs font-semibold text-gray-600">
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-sm">
                              {review.name}
                            </p>
                            <div className="flex text-yellow-400">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View More reviews
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Categories = () => {
  const Categories = [
    { image: image5, text: "Playstation" },
    { image: image6, text: "Google Play" },
    { image: image7, text: "Spotify" },
    { image: image8, text: "Pubg" },
    { image: image9, text: "Games" },
    { image: image10, text: "Mobilis" },
    { image: image11, text: "Accounts" },
  ];

  return (
    <div className="px-8 my-16">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[32px] sm:text-3xl font-medium">Categories</h2>
        <Link
          to="/allCategories"
          className="text-blue-500 font-semibold hover:underline"
        >
          See All
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        {Categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center my-3 border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.text}
              className="mb-2 object-contain"
            />
            <p className="font-semibold">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import bannerImg from "../assets/image24.png";
import pubg from "../assets/image2.png";
import image4 from "../assets/image4.png";
import playstation from "../assets/playstation.png";
import { Link } from "react-router-dom";

// بيانات البانرات
const Delivers = [
  {
    title: "Free Delivery on your First Purchase.",
    image: bannerImg,
    cards: [
      { src: image4, alt: "STC", top: 110, right: 110 },
      { src: pubg, alt: "PUBG", top: 210, right: 60 },
      { src: playstation, alt: "PSN", top: 150, right: 340 },
    ],
  },
];

const Delivery = () => {
  const currentBanner = Delivers[0]; // استخدام أول بانر فقط

  return (
    <div className=" bg-gradient-to-br from-[#0146d0] to-[#01adfa] relative overflow-hidden px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between pt-24">
        {/* النص الأيسر */}
        <div className="text-center md:text-left max-w-xl z-10">
          <h1 className=" text-[40px]  md:text-[56px] font-semibold text-white  whitespace-pre-line">
            {currentBanner.title}
          </h1>
          <Link to="/all-products">
            <button className="my-6 px-12 py-3 bg-white  text-[#0146d0] rounded-md font-semibold text-lg shadow-md">
              Shop Now
            </button>
          </Link>
        </div>

        {/* الصورة اليمنى + الكروت */}
        <div className="relative z-10">
          <img
            src={currentBanner.image}
            alt="Main"
            className="w-full object-cover"
          />

          {/* الكروت الطافية */}
          {currentBanner.cards.map((card, i) => (
            <img
              key={i}
              src={card.src}
              alt={card.alt}
              className="absolute w-16 md:w-20"
              style={{ top: `${card.top}px`, right: `${card.right}px` }}
            />
          ))}
        </div>
      </div>

      {/* الخلفية Free */}
      <h2 className="text-center absolute text-[200px] md:text-[350px] text-white font-extrabold opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
        Free
      </h2>
    </div>
  );
};

export default Delivery;

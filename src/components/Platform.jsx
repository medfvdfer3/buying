import React from "react";
import image26 from "../assets/image26.png";
import vodafone from "../assets/Vector(1).png";
import mobiles from "../assets/image10.png";
import inwi from "../assets/image27.png";

// بيانات البانر
const Platforms = [
  {
    title: "All Your Digital Needs,\nOne Platform.",
    image: image26,
    cards: [
      { src: mobiles, alt: "mobiles", top: 60, right: 15 },
      { src: vodafone, alt: "vodafone", top: 160, right: -60 },
      { src: inwi, alt: "inwi", top: 160, right: 280 }, // موقع أعلى
    ],
  },
];

const Platform = () => {
  const current = Platforms[0];

  return (
    <div className="w-full bg-gradient-to-br from-blue-100 to-blue-300 relative overflow-hidden px-8">
      {/* الخلفية -50% */}
      <h2 className="absolute text-[350px] text-[#2563EB66] font-semibold opacity-30 select-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        -50%
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8">
        {/* النص الأيسر */}
        <div className="text-center md:text-left max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight whitespace-pre-line">
            {current.title}
          </h1>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold text-lg shadow-md">
            Shop Now
          </button>
        </div>

        {/* الصورة اليمنى + الكروت */}
        <div className="relative">
          {/* صورة الراجل */}
          <img
            src={current.image}
            alt="Main"
            className="w-full h-[425px] relative left-[-90px] z-10"
          />

          {/* الكروت */}
          {current.cards.map((card, i) => (
            <img
              key={i}
              src={card.src}
              alt={card.alt}
              className={`absolute w-[175.5px] h-[60px] ${
                card.alt === "inwi" ? "z-20" : "z-0"
              }`}
              style={{ top: `${card.top}px`, right: `${card.right}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;

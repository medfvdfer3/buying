import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bannerImg from "../assets/SmilingBanner.png";
import pubg from "../assets/image2.png";
import image4 from "../assets/image4.png";
import playstation from "../assets/playstation.png";
import { Link } from "react-router-dom";

// بيانات البانرات
const banners = [
  {
    title: "All Your Digital Needs,\nOne Platform.",
    image: bannerImg,
    cards: [
      { src: pubg, alt: "PUBG", top: 0, right: 30, delay: 0.5 },
      { src: image4, alt: "STC", top: 80, right: 10, delay: 0.7 },
      { src: playstation, alt: "PSN", top: 160, right: 30, delay: 0.9 },
    ],
  },
  {
    title: "Shop Gaming Cards\nInstantly",
    image: bannerImg,
    cards: [
      { src: playstation, alt: "PSN", top: 0, right: 30, delay: 0.5 },
      { src: pubg, alt: "PUBG", top: 80, right: 10, delay: 0.7 },
      { src: image4, alt: "STC", top: 160, right: 30, delay: 0.9 },
    ],
  },
  {
    title: "Top-Up and Recharge\nWith Ease",
    image: bannerImg,
    cards: [
      { src: image4, alt: "STC", top: 0, right: 30, delay: 0.5 },
      { src: playstation, alt: "PSN", top: 80, right: 10, delay: 0.7 },
      { src: pubg, alt: "PUBG", top: 150, right: 30, delay: 0.9 },
    ],
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <div className="pt-52 w-full bg-gradient-to-br from-blue-100 to-blue-300 relative overflow-hidden px-8 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-24">
        {/* النص الأيسر */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="text-center md:text-left max-w-xl z-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight whitespace-pre-line">
              {currentBanner.title}
            </h1>
            <Link to="/products">
              <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold text-lg shadow-md">
                Shop Now
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* الصورة اليمنى + الكروت */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`img-${currentIndex}`}
            className="relative z-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={currentBanner.image}
              alt="Main"
              className="w-[320px] md:w-[520px] object-contain"
            />

            {/* الكروت الطافية */}
            {currentBanner.cards.map((card, i) => (
              <motion.img
                key={i}
                src={card.src}
                alt={card.alt}
                className="absolute w-16 md:w-20"
                style={{ top: `${card.top}px`, right: `${card.right}px` }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: card.delay, duration: 0.5 }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* الخلفية -50% */}
      <h2 className="text-center absolute text-[200px] md:text-[220px] text-blue-500 font-extrabold opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
        -50%
      </h2>

      {/* نقاط البانر */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex ? "w-4 bg-blue-700" : "w-2 bg-blue-300"
            } h-2`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

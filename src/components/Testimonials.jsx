import React, { useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Director",
      rating: 5,
      testimonial:
        "This platform revolutionized our marketing campaigns. The analytics dashboard provides insights I never thought possible. Our ROI increased by 300% in just three months.",
    },
    {
      name: "Michael Chen",
      title: "Software Engineer",
      rating: 5,
      testimonial:
        "As a developer, I appreciate clean, intuitive interfaces. This tool integrates seamlessly with our existing workflow and saves us hours of manual work every week.",
    },
    {
      name: "Emma Rodriguez",
      title: "Project Manager",
      rating: 5,
      testimonial:
        "Project coordination has never been easier. The real-time collaboration features keep our remote team connected and productive. It's a game-changer for distributed teams.",
    },
    {
      name: "David Thompson",
      title: "Financial Analyst",
      rating: 5,
      testimonial:
        "The reporting capabilities are outstanding. I can generate comprehensive financial reports in minutes instead of hours. The accuracy and detail level exceeded my expectations.",
    },
    {
      name: "Lisa Wang",
      title: "UX Designer",
      rating: 5,
      testimonial:
        "Finally, a platform that understands design workflows. The collaborative features allow seamless feedback loops with stakeholders. My design process is now 50% more efficient.",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto relative">
        <p className="text-[32px] font-medium text-[#000000] my-4">
          Verified Reviews from Buyers
        </p>

        {/* Arrows */}
        {activeIndex > 0 && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#2563EB] text-white shadow p-2 rounded-full hover:bg-[#435b90]  transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {activeIndex < testimonials.length - 1 && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2563EB] text-white shadow p-2 rounded-full hover:bg-[#435b90] transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700 mr-4">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-gray-600 italic leading-relaxed">
                  “{item.testimonial}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

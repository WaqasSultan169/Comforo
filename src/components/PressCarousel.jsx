import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaStar,
  FaRegStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Presscoursel from "../assets/images/PressCoursel/presscoursel.webp";

const testimonials = [
  {
    quote:
      "Excellent quality and very durable. Comfora never disappoints, and their sizes are always accurate!",
    author: "Farwa Awan",
    rating: 4,
    logo: Presscoursel,
  },
  {
    quote:
      "Super soft and comfortable! The perfect night suit for a cozy and stylish sleep.",
    author: "Nimra Khan",
    rating: 5,
    logo: Presscoursel,
  },
  {
    quote:
      "Great fit and amazing fabric! Feels so soft and comfortable all night long.",
    author: "Iqra Aftab",
    rating: 4,
    logo: Presscoursel,
  },
];

export default function PressCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.params.pagination.clickable = true;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <section className="bg-gray-150 py-16 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-6xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          loop
          onSwiper={setSwiperInstance}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="text-center flex flex-col items-center justify-center px-2 sm:px-4 relative">
                <div className="flex justify-center gap-1 mb-4 z-10">
                  {Array.from({ length: 5 }).map((_, idx) =>
                    idx < t.rating ? (
                      <FaStar key={idx} className="text-lg sm:text-xl text-yellow-500" />
                    ) : (
                      <FaRegStar key={idx} className="text-lg sm:text-xl text-gray-300" />
                    )
                  )}
                </div>

                <div className="relative w-full max-w-3xl mx-auto mb-6 px-2 sm:px-4">
                  <FaQuoteLeft className="absolute text-4xl sm:text-[60px] text-gray-200 opacity-80 left-0 top-2 -z-10" />

                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-relaxed relative z-10">
                    {t.quote}
                  </p>
                </div>

                <img
                  src={t.logo}
                  alt={t.author}
                  className="w-[150px] sm:w-[195px] h-auto object-cover border mb-4"
                />
                <p className="text-sm font-semibold text-black">{t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination & Navigation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-8 flex items-center justify-center gap-6">
          <button
            ref={prevRef}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FaChevronLeft className="text-base" />
          </button>

          <div
            ref={paginationRef}
            className="flex items-center justify-center gap-2"
          ></div>

          <button
            ref={nextRef}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FaChevronRight className="text-base" />
          </button>
        </div>
      </div>
    </section>
  );
}

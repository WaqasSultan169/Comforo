import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../App.css";

import banner1 from "../assets/images/banners/Banner_1.webp";
import banner2 from "../assets/images/banners/Banner_2.webp";
import banner3 from "../assets/images/banners/Banner_3.webp";
import banner4 from "../assets/images/banners/Banner_4.webp";
import banner5 from "../assets/images/banners/Banner_5.webp";

import mobBanner1 from "../assets/images/MobileBanner/2.png";
import mobBanner2 from "../assets/images/MobileBanner/3.png";
import mobBanner3 from "../assets/images/MobileBanner/9.png";
import mobBanner4 from "../assets/images/MobileBanner/10.png";
import mobBanner5 from "../assets/images/MobileBanner/7.png";

const bannerImages = [banner1, banner2, banner3, banner4, banner5];
const mobileBannerImages = [mobBanner1, mobBanner2, mobBanner3, mobBanner4, mobBanner5];

function HeroSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const selectedImages = isMobile ? mobileBannerImages : bannerImages;

  return (
    <div className="w-full h-[300px] md:w-[1280px] md:h-[640px] overflow-hidden mt-8 relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `
              <button class="${className} numbered-dot__item relative" aria-current="false">
                <svg class="progress-circle" width="40" height="40" viewBox="0 0 40 40">
                  <circle class="bg" cx="20" cy="20" r="15" fill="none" stroke="#FFFFFFB3" stroke-width="3"></circle>
                  <circle class="progress" cx="20" cy="20" r="15" fill="none" stroke="#fff" stroke-width="3"></circle>
                </svg>
                <span>${index + 1}</span>
              </button>
            `;
          },
        }}
        className="w-full h-full"
      >
        {selectedImages.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="w-full h-full bg-white flex items-center justify-center">
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 z-10" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;

import React from "react";
import AboutBanner from '../assets/images/aboutbanner/About_image.webp';

export default function AboutUsBanner() {
  return (
    <section className="relative bg-gray-150 w-full text-white">
      <div className="relative h-[1280px] md:h-[1280px] w-full">
        <img
          src = {AboutBanner}
          alt="About Us Banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold pb-11">About Us</h2>
            <p className="text-base md:text-md leading-relaxed">
              Comfora is a registered company in Pakistan, offering a wide
              range of imported, internationally sourced daily-use essentials.
              We focus on quality, comfort, and affordability, providing premium
              intimate wear and undergarments to ensure a seamless online
              shopping experience. Our goal is to bring high-quality products
              straight to your doorstep with convenience and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

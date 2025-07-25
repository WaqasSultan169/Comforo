import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function BrasSection() {
  return (
    <section className="bg-gray-150 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Bras Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bras are essential garments that offer a variety of practical and functional benefits. Here’s how bras are commonly used
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[789px] h-[789px] shadow-xl rounded-lg overflow-hidden border border-gray-300">
            <ReactCompareSlider
              className="w-full h-full"
              itemOne={
                <ReactCompareSliderImage
                  src="https://comfora.pk/cdn/shop/files/42_72450ab7-96a5-43be-8f5a-dd880d709cd8.jpg?v=1738152692&width=1000"
                  alt="Before"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://comfora.pk/cdn/shop/files/40_a6e7e324-cfc5-4102-b470-18e85d2b4b35.jpg?v=1738152718&width=1000"
                  alt="After"
                />
              }
              handle={
                <div className="relative flex flex-col items-center justify-center h-full">
                  <div className="w-[2px] h-full bg-white absolute top-0 left-1/2 transform -translate-x-1/2 z-0" />
              
                  <div className="z-10 w-[32px] h-[40px] bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <span className="sr-only">Drag</span>
                    <svg
                      role="presentation"
                      focusable="false"
                      width="28"
                      height="35"
                      viewBox="0 0 32 40"
                    >
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V24C32 32.8366 24.8366 40 16 40C7.16344 40 0 32.8366 0 24V16Z"
                        fill="#ffffff"
                      ></path>
                      <path fill="#000000" d="M11 14H13V26H11zM15 14H17V26H15zM19 14H21V26H19z"></path>
                    </svg>
                  </div>
                </div>
              }              
            />
          </div>
        </div>
      </div>
    </section>
  );
}

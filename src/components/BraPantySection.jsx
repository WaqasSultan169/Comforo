import React from "react";
import Image from "../assets/images/products/BraPantySet.webp";

export default function BraPantySection() {
  return (
    <section className="bg-gray-150 w-full py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Bra Panty Set"
            className="rounded shadow-lg w-full max-w-[512px] rotate-[1.9deg]"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="text-left space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Bra Panty Set
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our <strong>Bra Panty Set</strong> offers the perfect combination of
            style, comfort, and support. Designed to complement each other, this
            set is crafted from soft, breathable materials to ensure all-day
            comfort while enhancing your natural shape.
          </p>
        </div>
      </div>
    </section>
  );
}

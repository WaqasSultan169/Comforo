import React from "react";
import Image from "../assets/images/products/BraPantySet.webp";

export default function BraPantySection() {
  return (
    <section className="bg-gray-150 w-full py-16 px-4 md:px-10">
      <div className="max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center pr-[100px] pl-[100px]">
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Bra Panty Set"
            className="rounded shadow-lg max-w-[512px] w-full rotate-[1.9deg]"
            loading="lazy"
          />
        </div>
        <div className="text-left space-y-6 max-w-[580px]">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Bra Panty set
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Our <strong>Bra Panty Set</strong> offers the perfect combination of
            style,<br /> comfort, and support. Designed to complement each other,<br /> this
            set is crafted from soft, breathable materials to ensure all-day
            comfort while enhancing your natural shape.
          </p>
        </div>
      </div>
    </section>
  );
}

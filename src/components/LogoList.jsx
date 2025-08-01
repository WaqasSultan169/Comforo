import React from "react";
import nightiesImg from '../assets/images/products/nighties.avif';
import pantiesImg from '../assets/images/products/panties.avif';
import brasImg from '../assets/images/products/brasImg.avif';
import lingerieImg from '../assets/images/products/lingerieImg.jpg';
import shapewearImg from '../assets/images/products/shapewearImg.avif';

const logos = [
  { id: 1, image: nightiesImg },
  { id: 2, image: pantiesImg },
  { id: 3, image: brasImg },
  { id: 4, image: lingerieImg },
  { id: 5, image: shapewearImg },
];

export default function LogoList() {
  return (
    <div className="bg-gray-150 py-[130px] px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg p-4 flex items-center justify-center h-44 sm:h-48 md:h-52 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logo.image}
              alt={`Item ${idx + 1}`}
              className="h-32 max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

const logos = [
  { id: 1, image: "https://comfora.pk/cdn/shop/files/download.jpg?v=1738749433&width=225" },
  { id: 2, image: "https://comfora.pk/cdn/shop/files/images_19.jpg?v=1738675355&width=225" },
  { id: 3, image: "https://comfora.pk/cdn/shop/files/s-l1200_9249fe58-de37-4c72-89ee-99fb9e8c1b80.png?v=1738675018&width=1000" },
  { id: 4, image: "https://comfora.pk/cdn/shop/files/44449d6439994ce662b449218af1ee27.jpg_720x720q80.jpg?v=1736929833&width=720" },
  { id: 5, image: "https://comfora.pk/cdn/shop/files/71HzVYxUKSL._AC_UY1000.jpg?v=1736929757&width=1000" },
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

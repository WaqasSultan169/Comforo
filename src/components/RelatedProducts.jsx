import React, { useState } from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ products = [], currentProductId }) => {
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  const BASE_URL = "https://comfora-site-backend.onrender.com";
  const IMAGE_BASE_URL = `${BASE_URL}/uploads/`;

  const filtered = products
    .filter((p) => p._id !== currentProductId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6); // Pick 6, show 3 per row

  if (!filtered.length) return null;

  return (
    <div className="w-full px-6 mt-20 mb-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">
        You May Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => {
          const selectedColor = selectedColors[p._id] || p.colors?.[0];
          const mainImg = p.images?.[0]
            ? `${IMAGE_BASE_URL}${p.images[0]}`
            : "https://via.placeholder.com/300x400?text=No+Image";
          const hoverImg = p.images?.[1]
            ? `${IMAGE_BASE_URL}${p.images[1]}`
            : mainImg;
          const displayColors = p.colors?.slice(0, 3) || [];

          return (
            <div
              key={p._id}
              className="w-full h-[530px] group relative border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 bg-white"
            >
              <Link to={`/product/${p._id}`}>
                <div className="relative w-full h-[360px] overflow-hidden">
                  <img
                    src={mainImg}
                    alt={p.name}
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                  />
                  {p.comparePrice && (
                    <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-3 py-1 rounded">
                      Save Rs.{(p.comparePrice - p.price).toLocaleString()}
                    </div>
                  )}
                  <button className="absolute bottom-4 right-4 bg-black text-white text-xs py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
                    + Quick Add
                  </button>
                </div>
              </Link>

              <div className="p-4">
                <p className="text-[16px] text-[#1A1A1A] font-semibold leading-tight">
                  {p.name}
                </p>
                <p className="text-[16px] font-md mt-2 text-[#F83A3A]">
                  Rs.{p.price.toLocaleString()}
                  {p.comparePrice && (
                    <span className="line-through text-[#1A1A1AB3] text-sm ml-2">
                      Rs.{p.comparePrice.toLocaleString()}
                    </span>
                  )}
                </p>

                <div className="flex items-center gap-2 mt-3">
                  {displayColors.map((color, index) => {
                    const isSelected = selectedColor === color;
                    return (
                      <button
                        key={index}
                        onClick={() => handleColorSelect(p._id, color)}
                        title={color}
                        className={`w-7 h-7 rounded-full border transition-all duration-300 ${
                          isSelected ? "ring-2 ring-black" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color.trim().toLowerCase() }}
                      />
                    );
                  })}
                  {p.colors?.length > 3 && (
                    <span className="text-xs text-gray-600 font-medium">
                      +{p.colors.length - 3}
                    </span>
                  )}
                </div>

                {selectedColor && (
                  <p className="text-xs text-gray-400 mt-1">
                    Selected: {selectedColor}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;

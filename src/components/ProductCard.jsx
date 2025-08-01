import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuickAddModal from "./QuickAddModal";
import AddToCartModal from "./AddToCartModal";

const ProductCard = ({
  p,
  selectedColors,
  setSelectedColors,
  onColorSelect,
}) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [showQuickViewModal, setShowQuickViewModal] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const displayColors = p.colors?.slice(0, 3) || [];
  const selectedColor = selectedColors?.[p._id] || p.colors?.[0];

  useEffect(() => {
    if (p.colors?.length === 1 && !selectedColors[p._id]) {
      setSelectedColors((prev) => ({
        ...prev,
        [p._id]: p.colors[0],
      }));
    }
  }, [p, selectedColors, setSelectedColors]);

  // ✅ Using Cloudinary URLs directly
  const mainImg = p.images?.[0]
    ? p.images[0]
    : "https://via.placeholder.com/300x400?text=No+Image";

  const hoverImg = p.images?.[1] ? p.images[1] : mainImg;

  const handleAddToCart = (size) => {
    setSelectedSize(size);
    setShowQuickViewModal(false);
    setShowAddToCartModal(true);
  };

  return (
      <div className="w-full max-w-[400px] mx-auto group relative border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 bg-white">
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Link to={`/product/${p._id}`}>
            <img
              src={hoveredImage || mainImg}
              alt={p.name}
              onMouseEnter={() => {
                if (hoverImg !== mainImg) setHoveredImage(hoverImg);
              }}
              onMouseLeave={() => setHoveredImage(null)}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out"
            />
          </Link>

          {p.comparePrice && (
            <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 sm:px-3 py-1 rounded">
              Save Rs.{(p.comparePrice - p.price).toLocaleString()}
            </div>
          )}

          <button
            type="button"
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black text-white text-xs sm:text-sm py-1.5 px-3 sm:px-4 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              setShowQuickViewModal(true);
            }}
          >
            + Quick Add
          </button>
        </div>

        <div className="p-3 sm:p-4">
          <p className="text-[15px] sm:text-[16px] text-[#1A1A1A] font-semibold leading-tight line-clamp-2">
            {p.name}
          </p>

          <p className="text-[15px] sm:text-[16px] font-medium mt-2 text-[#F83A3A]">
            Rs.{p.price.toLocaleString()}
            {p.comparePrice && (
              <span className="line-through text-[#1A1A1AB3] text-sm ml-2">
                Rs.{p.comparePrice.toLocaleString()}
              </span>
            )}
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            {displayColors.map((color, index) => {
              const isSelected = selectedColor === color;
              return (
                <button
                  key={index}
                  onClick={() => onColorSelect(p._id, color)}
                  title={color}
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border transition-all duration-300 ${
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

        {showQuickViewModal && (
          <QuickAddModal
            product={p}
            selectedColor={selectedColor}
            onClose={() => setShowQuickViewModal(false)}
            onAddToCart={handleAddToCart}
          />
        )}
        {showAddToCartModal && (
          <AddToCartModal
            product={p}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onClose={() => setShowAddToCartModal(false)}
          />
        )}
      </div>

  );
};

export default ProductCard;

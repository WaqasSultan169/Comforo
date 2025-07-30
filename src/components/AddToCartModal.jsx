import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddToCartModal = ({ product, selectedColor, selectedSize, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  const BASE_IMAGE_URL = "https://comfora-site-backend.onrender.com/uploads/";

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[400px] bg-white rounded-lg shadow-2xl p-7 animate-slide-up">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <p className="text-sm text-gray-600">Adding to cart...</p>
          </div>
        ) : (
          <>

            <div className="bg-green-100 text-green-700 text-sm p-2 rounded flex items-center justify-between">
              <span className="font-medium">✅ Added to your cart!</span>
            </div>

            <div className="flex mt-4 items-start gap-4">
              <img
                    src={product.images?.[0] || "https://via.placeholder.com/100x120?text=No+Image"}
                    alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Rs.{product.price.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {selectedColor} / {selectedSize}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Link
                to="/cart"
                className="bg-yellow-400 hover:bg-yellow-500 w-full text-center py-2 rounded-full font-medium"
              >
                View cart
              </Link>
              <Link
                to="/checkout"
                className="bg-black hover:bg-gray-900 text-white w-full text-center py-2 rounded-full font-medium"
              >
                Checkout
              </Link>
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-[1px] right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
      </div>
  );
};

export default AddToCartModal;

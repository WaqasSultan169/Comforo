import React, { useEffect, useRef, useState } from "react";

const QuickAddModal = ({ product, selectedColor, onClose, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const modalRef = useRef(null);

  const BASE_IMAGE_URL = "https://comfora-site-backend.onrender.com/uploads/";
  const productImage = `${BASE_IMAGE_URL}${product.images?.[0]}`;

  const handleAddToCart = async () => {
    if (!selectedSize) return;
  
    setIsAdding(true);
  
    const sessionId =
      localStorage.getItem("sessionId") ||
      (() => {
        const newSession = Math.random().toString(36).substring(2);
        localStorage.setItem("sessionId", newSession);
        return newSession;
      })();
  
    const payload = {
      sessionId,
      productId: product._id,
      selectedColor,
      selectedSize,
      quantity: 1,
    };
  
    try {
      const res = await fetch(
        "https://comfora-site-backend.onrender.com/api/cart/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
  
      if (res.ok) {
        if (typeof onAddToCart === "function") {
          onAddToCart(selectedSize);
        }
        window.dispatchEvent(new CustomEvent("cartUpdated"));
        onClose();
      } else {
        console.error("Add to cart failed", await res.text());
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black bg-opacity-30" />

      <div
        className="fixed bottom-5 right-5 z-50 w-[95%] max-w-md bg-white rounded-lg shadow-2xl p-5 animate-slide-up"
        ref={modalRef}
      >
        <button className="absolute top-2 right-3 text-xl font-bold" onClick={onClose}>
          &times;
        </button>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <img
            src={productImage}
            alt={product.name}
            className="w-24 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <p className="text-base font-semibold">{product.name}</p>
            <p className="text-red-500 font-semibold">
              Rs.{product.price.toLocaleString()}
              {product.comparePrice && (
                <span className="line-through text-gray-400 text-sm ml-2">
                  Rs.{product.comparePrice.toLocaleString()}
                </span>
              )}
            </p>

            <p className="mt-2 text-sm">Color: {selectedColor}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes?.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-full px-3 py-1 text-sm ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                disabled={isAdding || !selectedSize}
                className={`flex-1 ${
                  isAdding
                    ? "bg-yellow-300 cursor-wait"
                    : "bg-yellow-400 hover:bg-yellow-700"
                } text-white text-sm sm:text-base px-4 py-3 rounded-full flex justify-center items-center`}
              >
                {isAdding ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Add to Cart"
                )}
              </button>

              <button className="flex-1 bg-black text-white text-sm sm:text-base px-4 py-3 rounded-full font-semibold">
                Buy it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickAddModal;

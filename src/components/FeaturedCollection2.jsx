import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function FeaturedCollection2() {
  const [products, setProducts] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const BASE_URL = "https://comfora-site-backend.onrender.com";

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products?category=panties`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 300;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    handleScroll();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gray-150 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[40px] font-bold">Featured Collection</h2>
          <Link
            to="/collections/panties"
            className="group inline-flex items-center gap-2 text-[22px] font-bold hover:text-black relative"
          >
            <span className="relative inline-block">
              <span className="reversed-link">View all</span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="circle-chevron group-hover:text-black transition-colors duration-300">
              <FaArrowRight />
            </span>
          </Link>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-1"
          >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, 6).map((p) => (
          <ProductCard
            key={p._id}
            p={p}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            onColorSelect={handleColorSelect}
          />
        ))}

    </div>
          </div>

          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition"
            >
              <FaArrowRight className="rotate-180 text-gray-700 text-lg" />
            </button>
          )}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition"
            >
              <FaArrowRight className="text-gray-700 text-lg" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

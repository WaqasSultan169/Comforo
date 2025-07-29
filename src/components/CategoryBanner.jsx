import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Bras from '../assets/images/products/bras.webp';
import panties from '../assets/images/products/panties.webp';
import bras_panties from '../assets/images/products/Bra_panties_set.webp';
import lingerie from '../assets/images/products/Lingerie.webp';
import camisole from '../assets/images/products/camisole.webp';
import accessories from '../assets/images/products/Accessories.webp';

const categories = [
  { name: "Bras", slug: "Bras", image: Bras },
  { name: "Panties", slug: "panties", image: panties },
  { name: "Lingerie", slug: "Lingerie", image: lingerie },
  { name: "Camisole", slug: "camisoles", image: camisole },
  { name: "Bra Panties", slug: "bras_panties", image: bras_panties },
  { name: "Accessories", slug: "accessories", image: accessories },
];

const CategoryBanner = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <section className="relative bg-gray-150 py-8 px-4 sm:px-6 lg:px-12">
      <div
        className="relative"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {showLeft && hovering && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          >
            <FaArrowRight className="rotate-180 text-gray-700 text-lg" />
          </button>
        )}

        {showRight && hovering && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          >
            <FaArrowRight className="text-gray-700 text-lg" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex gap-4 sm:gap-6 w-max">
            {categories.map((cat, index) => (
              <Link
                to={`/collections/${cat.slug}`}
                key={cat.slug}
                className="relative flex-shrink-0 w-[260px] sm:w-[320px] md:w-[360px] lg:w-[378.66px] h-[260px] sm:h-[320px] md:h-[360px] lg:h-[378.66px] rounded-lg overflow-hidden shadow"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white rounded-lg text-center px-2">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide drop-shadow">
                    {cat.name}
                  </p>
                  <div
                    className={`mt-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md transition-all duration-300 transform ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <FaArrowRight className="text-base md:text-lg" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;

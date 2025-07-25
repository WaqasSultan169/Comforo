import React from "react";
import { FaArrowRight } from "react-icons/fa";

function ScrollArrowButton({ direction = "right", onClick }) {
  return (
    <button
      aria-label={direction === "left" ? "Previous" : "Next"}
      onClick={onClick}
      className="w-10 h-10 bg-white text-gray-700 md:w-12 md:h-12 flex items-center justify-center rounded-full group transition duration-300 hover:bg-white hover:text-gray-700"
    >
      <span className="sr-only">
        {direction === "left" ? "Previous" : "Next"}
      </span>
      <span
        className={`transition-transform duration-300 ${
          direction === "left"
            ? "group-hover:-translate-x-1 rotate-180"
            : "group-hover:translate-x-1"
        }`}
      >
        <FaArrowRight size={14} />
      </span>
    </button>
  );
}

export default ScrollArrowButton;

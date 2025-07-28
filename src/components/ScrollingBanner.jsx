import React from "react";
import "../App.css"; 

function ScrollingBanner() {
  return (
    <div className="w-full bg-gray-150 p-0 pb-[80px] section-blends section-full overflow-hidden">
      <div className="scrolling-text scrolling-text--auto relative whitespace-nowrap overflow-hidden">
        <div className="animate-marquee inline-flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="scrolling-text__text text-[36px] md:text-[46px] font-bold uppercase tracking-wide text-stroke whitespace-nowrap px-6"
              aria-hidden={i !== 0}
            >
              Early Bird Discount
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollingBanner;

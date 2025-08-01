import React from "react";

const CollectionBanner = ({ title, image }) => {
  return (
    <section className="w-full relative overflow-hidden mt-[80px]">
      <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center text-white">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">{title}</h1>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
      </div>
    </section>
  );
};

export default CollectionBanner;

import { useRef } from "react";
import { Link } from "react-router-dom";
import ScrollArrowButton from "./ScrollArrowButton";
import nightiesImg from '../assets/images/products/nighties.avif';
import pantiesImg from '../assets/images/products/panties.avif';
import brasImg from '../assets/images/products/brasImg.avif';
import lingerieImg from '../assets/images/products/lingerieImg.jpg';
import shapewearImg from '../assets/images/products/shapewearImg.avif';
import accessoriesImg from '../assets/images/products/accessoriesImg.avif';

const categories = [
  {
    name: "Nighties",
    image: nightiesImg,
  },
  {
    name: "Panties",
    image: pantiesImg,
  },
  {
    name: "Bras",
    image: brasImg,
  },
  {
    name: "Lingerie",
    image: lingerieImg,
  },
  {
    name: "Shapewear",
    image: shapewearImg,
  },
  {
    name: "Accessories",
    image: accessoriesImg,
  },
];


function OurProducts() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
<section className="w-[1280px] h-[535px] py-20 px-12 bg-gray-150">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[40px] font-bold mb-10">
          Our Products
        </h2>

        <div className="relative">
              <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide px-1"
              >
            {categories.map((cat) => (
              <Link
                className="min-w-[278px] md:min-w-[278px] rounded-2xl overflow-hidden group relative transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-[278px] h-[278px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </Link>
            ))}
          </div>
          <button
              className="absolute left-[6px] top-1/2 -translate-y-1/2 z-10 hidden md:block"
            >
              <ScrollArrowButton direction="left" onClick={() => scroll("left")} />
            </button>

            <button
              className="absolute right-[6px] top-1/2 -translate-y-1/2 z-10 hidden md:block"
            >
              <ScrollArrowButton direction="right" onClick={() => scroll("right")} />
            </button>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;

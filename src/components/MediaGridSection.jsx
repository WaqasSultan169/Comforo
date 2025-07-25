import React from "react";
import { Link } from "react-router-dom";
import Media1 from '../assets/images/MediaGrid/Mediagrid1.webp';
import Media2 from '../assets/images/MediaGrid/Mediagrid2.webp';
import Media3 from '../assets/images/MediaGrid/Mediagrid3.webp';
import Media4 from '../assets/images/MediaGrid/Mediagrid4.webp';


const mediaGridItems = [
  {
    id: 1,
    link: "/collections/Bras",
    image: Media1,
    span: "col-span-2 row-span-2",
    height: "h-[536px]",
  },
  {
    id: 2,
    link: "/collections/blouse",
    image: Media2,
    span: "col-span-1 row-span-1",
    height: "h-[256px]",
  },
  {
    id: 3,
    link: "/collections/bralette",
    image: Media3,
    span: "col-span-1 row-span-1",
    height: "h-[256px]",
  },
  {
    id: 4,
    link: "/collections/embroidered-bra",
    image: Media4,
    span: "col-span-2 row-span-1",
    height: "h-[256px]",
  },
];

export default function MediaGridSection() {
  return (
    <section className="bg-gray-150 py-[80px] pr-[25px] pl-[25px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-5">
          {mediaGridItems.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className={`relative group overflow-hidden rounded shadow-lg ${item.span} ${item.height}`}
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-40 transition duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

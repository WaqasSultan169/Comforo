import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function FeaturedCollection() {
  const [products, setProducts] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});

  const BASE_URL = "https://comfora-site-backend.onrender.com";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products?category=bras`);
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

  return (
    <section className="bg-gray-150 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[40px] font-bold">Featured Collection</h2>
          <Link
            to="/collections/Bras"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
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
    </section>
  );
}

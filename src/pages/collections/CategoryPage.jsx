import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const CategoryPage = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});

  useEffect(() => {
    axios
      .get("https://comfora-site-backend.onrender.com/api/products")
      .then((res) => {
        // filter by category (optional for your category page)
        const filtered = res.data.filter(
          (product) => product.category === category
        );
        setProducts(filtered);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [category]);

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          p={product}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          onColorSelect={handleColorSelect}
        />
      ))}
    </div>
  );
};

export default CategoryPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectionBanner from "../../../components/CollectionBanner";
import ProductCard from "../../../components/ProductCard";
import CollectionFilters from "../../../components/CollectionFilters"; 
import LogoList from "../../../components/LogoList"; 
import PageTransition from "../../../components/PageTransition";
import axios from "axios";

const PeriodPanties = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("manual");
  const [selectedColors, setSelectedColors] = useState({});
  const [products, setProducts] = useState([]);
  
  const BASE_URL = "https://comfora-site-backend.onrender.com";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products?category=panties&subcategory=period-panties`);
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch period panties products", error);
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
    <PageTransition>
            <div className="pt-28 w-full">
      <CollectionBanner
        title="Period Panties"
        imageUrl="https://comfora.pk/cdn/shop/collections/Nav__Desktop_Period_876x420px_3902451f-9176-47df-b445-3d53788bd903.webp?v=1736955180&width=800"
      />

      <div className="mt-6">
        <CollectionFilters
          filters={filters}
          onFilterChange={setFilters}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />      
      </div>

      <div className="px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              p={product}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              onColorSelect={handleColorSelect}
            />
          ))}
        </div>
      </div>
      <LogoList />
    </div>
    </PageTransition>
  );
};

export default PeriodPanties;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectionBanner from "../../../components/CollectionBanner";
import ProductCard from "../../../components/ProductCard";
import CollectionFilters from "../../../components/CollectionFilters"; 
import LogoList from "../../../components/LogoList"; 
import PageTransition from "../../../components/PageTransition";
import nursingbra from "../../../assets/images/CategoryBanners/nursing.jpeg";
import axios from "axios";

const NursingBra = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("manual");
  const [selectedColors, setSelectedColors] = useState({});
  const [products, setProducts] = useState([]);
  
  const BASE_URL = "https://comfora-site-backend.onrender.com";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products?category=bras&subcategory=nursing-bra`);
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch Nursing bra products", error);
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
        title="Nursing Bra"
        image={nursingbra}
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

export default NursingBra;

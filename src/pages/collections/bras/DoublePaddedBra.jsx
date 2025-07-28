import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollectionBanner from "../../../components/CollectionBanner";
import ProductCard from "../../../components/ProductCard";
import CollectionFilters from "../../../components/CollectionFilters"; 
import LogoList from "../../../components/LogoList"; 
import PageTransition from "../../../components/PageTransition";
import axios from "axios";

const DoublePaddedBra = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("manual");
  const [selectedColors, setSelectedColors] = useState({});
  const [products, setProducts] = useState([]);

  const BASE_URL = "https://comfora-site-backend.onrender.com"

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products?category=bras&subcategory=double-padded-bra`);
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch Double Padded bra products", error);
      }
    };
    fetchProducts();
  }, [])

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
        title="Double Padded Bra"
        imageUrl="https://comfora.pk/cdn/shop/collections/f5d9932808f85fe2046d96f6cf781f00.jpg_720x720q80.jpg?v=1737019152&width=1400"
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

export default DoublePaddedBra;

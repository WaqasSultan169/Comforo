import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectionBanner from "../../components/CollectionBanner";
import ProductCard from "../../components/ProductCard";
import CollectionFilters from "../../components/CollectionFilters"; 
import LogoList from "../../components/LogoList"; 
import PageTransition from "../../components/PageTransition";
import bodysharper from "../../assets/images/CategoryBanners/bodysharper.jpg"

const BodySharper = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("manual");
  const [selectedColors, setSelectedColors] = useState({});
   const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const BASE_URL = "https://comfora-site-backend.onrender.com";
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`${BASE_URL}/api/products`);
          const data = await response.json();
  
          const bodysharperOnly = data.filter(
            (product) => product.category?.toLowerCase() === "body-sharper"
          );
          setProducts(bodysharperOnly);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
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
        title="Body Sharper"
        image={bodysharper}
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

export default BodySharper;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollectionBanner from "../../components/CollectionBanner";
import ProductCard from "../../components/ProductCard";
import CollectionFilters from "../../components/CollectionFilters"; 
import LogoList from "../../components/LogoList"; 
import PageTransition from "../../components/PageTransition";

const BrasPanties = () => {
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

        const braspantiesOnly = data.filter(
          (product) => product.category?.toLowerCase() === "bras-panties-set"
        );
        setProducts(braspantiesOnly);
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
          title="Bras & Panties Set"
          imageUrl="https://comfora.pk/cdn/shop/collections/a5fb9a13-832b-43f5-81d9-e54be678a496.png?v=1738766791&width=800"
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
          {loading ? (
            <p>Loading products...</p>
          ) : products.length === 0 ? (
            <p>No Bras & Panties found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          )}
        </div>

        <LogoList />
      </div>
    </PageTransition>
  );
};

export default BrasPanties;

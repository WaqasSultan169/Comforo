import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollectionBanner from "../../components/CollectionBanner";
import ProductCard from "../../components/ProductCard";
import CollectionFilters from "../../components/CollectionFilters"; 
import LogoList from "../../components/LogoList"; 
import PageTransition from "../../components/PageTransition";
import assecories from "../../assets/images/CategoryBanners/accessories.jpg";

const Accessories = () => {
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

        const accessoriesOnly = data.filter(
          (product) => product.category?.toLowerCase() === "accessories"
        );
        setProducts(accessoriesOnly);
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
          title="ACCESSORIES"
          image={assecories}
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
            <p>No Accessories found.</p>
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

export default Accessories;

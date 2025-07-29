import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [searched, setSearched] = useState(false);

  const BASE_URL = "https://comfora-site-backend.onrender.com";
  const IMAGE_BASE_URL = `${BASE_URL}/uploads/`;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/products`)
      .then((res) => {
        const products = Array.isArray(res.data) ? res.data : res.data.products;
        setAllProducts(products || []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);

    const q = query.toLowerCase().trim();
    if (!q) {
      setFiltered([]);
      return;
    }

    let results = allProducts.filter((p) => {
      const name = p.name?.toLowerCase() || "";
      const category = p.category?.toLowerCase() || "";
      const description = p.description?.toLowerCase() || "";
      return name.includes(q) || category.includes(q) || description.includes(q);
    });

    if (inStockOnly) {
      results = results.filter((p) => p.sizes?.length > 0);
    }

    setFiltered(results);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    const sorted = [...filtered];

    if (value === "priceLowHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "priceHighLow") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFiltered(sorted);
  };

  return (
    <div className="px-4 py-[240px] max-w-7xl mx-auto">
      {/* Search Heading + Form */}
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold mb-6">
          {searched && query.trim() !== ""
            ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`
            : "Search"}
        </h1>

        <form
          onSubmit={handleSearch}
          className="w-full max-w-lg flex flex-col items-center gap-6"
        >
          <div className="relative w-full">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for..."
              className="w-full px-5 py-3 pl-10 rounded-full border border-gray-300 text-base font-normal focus:outline-none placeholder:font-normal placeholder:text-gray-400"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 w-full"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results */}
      {searched && (
        <>
          {/* Sort & Filter */}
          {filtered.length > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-end gap-4 mb-8">
              <select
                onChange={handleSort}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value="relevance">Sort by: Relevance</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters */}
            <div className="w-full md:w-1/4 space-y-6">
              <h3 className="font-semibold text-lg">Filters</h3>
              <div className="flex items-center justify-between">
                <label htmlFor="stockOnly" className="text-sm">
                  In stock only
                </label>
                <input
                  id="stockOnly"
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={() => setInStockOnly(!inStockOnly)}
                  className="h-5 w-5"
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => {
                const img = product.images?.[0] || "default.jpg";
                const save =
                  product.comparePrice && product.comparePrice > product.price
                    ? product.comparePrice - product.price
                    : 0;

                return (
                  <div
                    key={product._id}
                    className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    <div className="relative">
                      <img
                        src={IMAGE_BASE_URL + img}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                        onError={(e) =>
                          (e.target.src =
                            "https://via.placeholder.com/300x300?text=No+Image")
                        }
                      />
                      {save > 0 && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          Save Rs.{save}
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="text-base font-semibold">
                        {product.name}
                      </h3>
                      <p className="text-red-600 font-bold">
                        Rs.{product.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* No Results */}
          {filtered.length === 0 && (
            <p className="mt-10 text-gray-500 text-center w-full">
              No results found for "{query}".
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;

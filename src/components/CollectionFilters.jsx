import React, { useState } from "react";
import { Slider } from "@mui/material";
import { ChevronDown } from "lucide-react";

const CollectionFilters = () => {
  const [showPrice, setShowPrice] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [inStock, setInStock] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");

  const handleRemoveFilter = (filter) => {
    if (filter === "In Stock") setInStock(false);
    if (filter.startsWith("Rs.")) setPriceRange([0, 10000]);
    if (filter === sortBy) setSortBy("Featured");
  };

  const selectedFilters = [];

  if (inStock) selectedFilters.push("In Stock");
  if (priceRange[0] !== 0 || priceRange[1] !== 10000)
    selectedFilters.push(`Rs. ${priceRange[0]} - Rs. ${priceRange[1]}`);
  if (sortBy !== "Featured") selectedFilters.push(sortBy);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-3 bg-gray-150 rounded-sm gap-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="in-stock" className="text-md font-medium">
            In Stock
          </label>
          <input
            type="checkbox"
            id="in-stock"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
            className="font-medium accent-gray-600"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setShowPrice(!showPrice)}
            className="flex items-center text-md font-medium px-3 py-1 rounded-md bg-gray-150 hover:bg-gray-300"
          >
            Price <ChevronDown size={16} className="ml-1" />
          </button>
          {showPrice && (
            <div className="absolute z-10 mt-2 p-5 bg-gray-150 shadow-xl border rounded-md w-80">
              <p className="text-sm font-medium mb-3">Set Price Range</p>
              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={10000}
                sx={{
                  color: "black",
                }}
              />
              <div className="flex justify-between items-center text-sm mt-3 space-x-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([+e.target.value, priceRange[1]])
                  }
                  className="border px-3 py-1 w-24 text-sm rounded"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], +e.target.value])
                  }
                  className="border px-3 py-1 w-24 text-sm rounded"
                />
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowSort(!showSort)}
            className="flex items-center text-md font-medium px-3 py-1 rounded-md bg-gray-150 hover:bg-gray-300"
          >
            Sort by <ChevronDown size={16} className="ml-1" />
          </button>
          {showSort && (
            <div className="absolute right-0 z-10 mt-2 w-48 bg-white border shadow-xl rounded-md">
              {[
                "Featured",
                "Best Selling",
                "Alphabetically: A-Z",
                "Alphabetically: Z-A",
                "Price: Low to High",
                "Price: High to Low",
              ].map((option) => (
                <div
                  key={option}
                  className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
                    sortBy === option ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setSortBy(option);
                    setShowSort(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {selectedFilters.map((filter) => (
          <div
            key={filter}
            className="flex items-center text-md bg-gray-300 text-gray-800 px-4 py-3 rounded-full"
          >
            {filter}
            <button
              onClick={() => handleRemoveFilter(filter)}
              className="ml-2 text-sm hover:text-gray-900"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollectionFilters;




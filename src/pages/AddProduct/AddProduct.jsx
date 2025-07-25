import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL)

const ProductImageSlider = ({ images, price, comparePrice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const discountPercentage =
    comparePrice > price
      ? Math.round(((comparePrice - price) / comparePrice) * 100)
      : 0;

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-56 bg-gray-300 flex items-center justify-center text-gray-500">
        No Images
      </div>
    );
  }

  return (
    <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center">
      <img
        src={`${BASE_URL}/uploads/${images[currentIndex]}`}
        alt="product"
        className="w-full h-56 object-contain transition duration-500"
      />

      {discountPercentage > 0 && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow">
          {discountPercentage}% OFF
        </div>
      )}
    </div>
  );
};

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    comparePrice: "",
    category: "",
    sizes: "",
    colors: "",
    description: "",
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchProducts = async () => {
    const res = await axios.get(`${BASE_URL}/api/products`);
    setProducts(res.data);
  };

  const handleSubmit = async () => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === "sizes" || key === "colors") {
        formData.append(key, value.split(","));
      } else {
        formData.append(key, value);
      }
    });

    imageFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      await axios.post(`${BASE_URL}/api/products/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          email: admin.email,
          password: admin.password,
        },
      });

      alert("Product Added!");
      setForm({
        name: "",
        price: "",
        comparePrice: "",
        category: "",
        sizes: "",
        colors: "",
        description: "",
      });
      setImageFiles([]);
      fetchProducts();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Failed to add product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Add New Product</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["name", "price", "comparePrice", "category", "sizes", "colors"].map(
            (field) => (
              <input
                key={field}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={handleChange}
                className="border p-2 rounded"
                type={field.includes("Price") ? "number" : "text"}
              />
            )
          )}
        </div>

        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded mt-4 w-full"
        />

        <input
          type="file"
          multiple
          onChange={(e) => setImageFiles([...e.target.files])}
          className="border p-2 rounded mt-4 w-full"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-4 w-full"
        >
          Add Product
        </button>
      </div>

      {/* Product Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <ProductImageSlider
              images={product.images}
              price={product.price}
              comparePrice={product.comparePrice}
            />

            <div className="p-4">
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-green-600 font-semibold">
                PKR {product.price}
                <span className="line-through text-gray-500 ml-2">
                  PKR {product.comparePrice}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Category: {product.category}
              </p>
              <p className="text-gray-700 text-sm mt-2">
                {product.description}
              </p>

              {/* Colors */}
              <div className="mt-3">
                <p className="font-semibold text-sm mb-1">Colors:</p>
                <div className="flex flex-wrap items-center">
                  {product.colors?.map((color, index) => (
                    <div key={index} className="flex items-center mr-3 mb-2">
                      <span
                        className="inline-block w-5 h-5 rounded-full border mr-1"
                        style={{ backgroundColor: color.trim().toLowerCase() }}
                      ></span>
                      <span className="text-xs capitalize">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-3">
                <p className="font-semibold text-sm mb-1">Sizes:</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes?.map((size, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-xs px-2 py-1 rounded"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProduct;

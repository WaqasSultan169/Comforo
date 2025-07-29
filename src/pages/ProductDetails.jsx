import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import AddToCartModal from "../components/AddToCartModal";


const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const { id } = useParams();
  const BASE_URL = "https://comfora-site-backend.onrender.com";
  const IMAGE_BASE_URL = `${BASE_URL}/uploads/`;

  
  useEffect(() => {
    let session = localStorage.getItem("sessionId");
    if (!session) {
      session = Math.random().toString(36).substr(2, 9);
      localStorage.setItem("sessionId", session);
    }
  }, []);

  const sessionId = localStorage.getItem("sessionId");

  const handleAddToCart = async () => {
    console.log("Clicked Add to Cart"); 
    
    const sessionId = localStorage.getItem("sessionId");
  
    try {
      await axios.post(`${BASE_URL}/api/cart/add`, {
        sessionId,
        productId: product._id,
        selectedSize,
        selectedColor,
        quantity,
      });
  
      console.log("Item added:", {
        sessionId,
        productId: product._id,
        selectedSize,
        selectedColor,
        quantity,
      });
  
      setShowAddToCartModal(true); 
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add item to cart.");
    }
  };
  
  


  useEffect(() => {
    if (!id) return;
  
    axios
  .get(`${BASE_URL}/api/products`)
  .then((res) => {
    const foundProduct = res.data.find((item) => item._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images?.[0]);
      setSelectedColor(foundProduct.colors?.[0]);
      setSelectedSize(foundProduct.sizes?.[0]);
    } else {
      console.warn("Product not found in the list.");
    }

    setAllProducts(res.data); 
  })
  .catch((err) => console.error("Fetch error:", err));

  }, [id]);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "03289159622";
    const message = `Hi, I want to order the product: *${product.name}*  – Price: PKR ${product.price}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <>
    <div className="py-[300px] px-6 sm:px-8 flex flex-col lg:flex-row gap-10 w-full max-w-7xl mx-auto">
      {/* Left side: images */}
      <div className="flex gap-4 w-full lg:w-1/2">
        <div className="flex flex-col gap-2">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={IMAGE_BASE_URL + img}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-20 rounded-md object-cover border cursor-pointer ${
                selectedImage === img ? "border-black" : "border-gray-300"
              }`}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex-1">
          <img
            src={IMAGE_BASE_URL + selectedImage}
            alt="Selected"
            className="w-full h-[600px] object-contain bg-white rounded-md"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <p className="text-sm text-gray-600 uppercase">COMFORA</p>
        <h1 className="text-4xl font-bold">{product.name}</h1>

        <div className="text-xl text-red-500">
          Rs.{product.price.toLocaleString()}
          <span className="line-through text-gray-500 text-base font-normal ml-2">
            Rs.{product.comparePrice.toLocaleString()}
          </span>
          <span className="ml-2 bg-red-500 text-white px-3 py-2 rounded-full text-xs">
            Save Rs.{product.comparePrice - product.price}
          </span>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800 mb-1">Color: {selectedColor}</p>
          <div className="flex gap-2">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 border ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                } rounded overflow-hidden`}
              >
                <img
                  src={IMAGE_BASE_URL + product.images[0]} 
                  alt={color}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <p className="text-md font-medium text-gray-800 mb-1">Bra Size: {selectedSize}</p>
          <div className="flex flex-wrap gap-4">
            {product.sizes.map((size, idx) => {
              const isOut = product.outOfStockSizes?.includes(size) || false;
              return (
                <button
                  key={idx}
                  onClick={() => !isOut && setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border text-xl ${
                    isOut
                      ? "line-through text-gray-400 border-gray-200 cursor-not-allowed"
                      : selectedSize === size
                      ? "bg-gray-200 text-gray-800 border-black"
                      : "border-gray-300"
                  }`}
                  disabled={isOut}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <p className="py-6 text-sm font-medium text-gray-800">Quantity:</p>
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
            <button
              className="px-3 py-1 text-xl"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button className="px-3 py-1 text-xl" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 hover:bg-yellow-700 text-white text-lg px-[90px] py-5 rounded-full"
          >
            Add to Cart
          </button>
          <button className="bg-black hover:bg-gray-800 text-white text-lg px-[90px] py-5 rounded-full">
            Buy it now
          </button>
          {showAddToCartModal && (
            <AddToCartModal
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onClose={() => setShowAddToCartModal(false)}
            />
          )}
        </div>

        <div className="mt-4">
            <button
              onClick={handleWhatsAppOrder}
              className="bg-green-500 hover:bg-white hover:text-gray-800 hover:border hover:border-black text-white font-medium px-6 py-3 rounded-full w-full"
            >
              ORDER ON WHATSAPP
            </button>
          <div className="border-t border-gray-200 mt-4 w-full"></div>
        </div>

        {product.description && (
  <div className="text-gray-800 px-4 mt-10 space-y-4 leading-relaxed">

    {(() => {
      const lines = product.description.split('\n').filter(Boolean);

      const intro = [];
      const bullets = [];
      const outro = [];
      let inBullet = false;
      let inOutro = false;

      lines.forEach(line => {
        if (line.trim().startsWith('-')) {
          inBullet = true;
          if (!inOutro) bullets.push(line.replace(/^- /, '').trim());
        } else if (inBullet) {
          inOutro = true;
          outro.push(line.trim());
        } else {
          intro.push(line.trim());
        }
      });

      return (
        <>
          {/* Intro */}
          {intro.map((line, index) => (
            <p key={`intro-${index}`} className="text-base">{line}</p>
          ))}

          {bullets.length > 0 && (
            <div className="mt-6">
            <h3 className="font-bold text-xl md:text-2xl mb-3 text-black uppercase tracking-wide">
              Key Features:
            </h3>
              <ul className="list-disc list-inside space-y-2">
                {bullets.map((item, index) => (
                  <li key={`bullet-${index}`} className="text-base">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {outro.length > 0 && (
            <div className="mt-6 space-y-2">
              {outro.map((line, index) => (
                <p key={`outro-${index}`} className="text-base">{line}</p>
              ))}
            </div>
          )}
        </>
      );
    })()}
  </div>
)}

      </div>
    </div>
    <RelatedProducts products={allProducts} currentProductId={id} />
    </>
  );
};

export default ProductDetails;

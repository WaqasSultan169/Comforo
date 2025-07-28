import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo/Comfora_logo.png";
import {
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";
import Marquee from "react-fast-marquee";

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const cartRef = useRef(null);

  const BASE_URL = "https://comfora-site-backend.onrender.com";
  const sessionId = localStorage.getItem("sessionId");

  const fetchCart = async () => {
    if (!sessionId) return;
    try {
      const res = await fetch(`${BASE_URL}/api/cart/${sessionId}`);
      const data = await res.json();
      setCartItems(data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
    const handleCartUpdate = () => {
      fetchCart();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, [sessionId]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        cartRef.current &&
        !cartRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
        setShowCartDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
    setShowCartDropdown(false); 
  };

  const isHomePage = location.pathname === "/";
  const showWhiteBg = !isHomePage || isScrolled || openDropdown !== null;
  const headerBgClass = showWhiteBg ? "bg-white shadow-md" : "bg-transparent";

  const messages = [
    "Flat discounts available",
    "Shapewear that actually works!",
    "Up to 25% Off",
  ];

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleRemove = async (idx) => {
    const item = cartItems[idx];
    if (!item) return;

    try {
      const response = await fetch(`${BASE_URL}/api/cart/${sessionId}/${item.productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedCart = cartItems.filter((_, i) => i !== idx);
        setCartItems(updatedCart);
      } else {
        console.error("Failed to remove item");
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="bg-black text-white text-xs h-12 flex items-center">
        <Marquee gradient={false} speed={60}>
          {messages.map((msg, i) => (
            <div key={i} className="flex items-center min-w-[340px] px-10">
              <span className="w-1 h-1 rounded-full bg-white inline-block mr-10" />
              <p className="font-semibold text-xs whitespace-nowrap">{msg}</p>
              <span className="w-1 h-1 rounded-full bg-white inline-block ml-10" />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-[168px]">
        <Link to="/" className="ml-4">
          <img src={logo} alt="Main Logo" className="w-[120px] h-[120px]" />
        </Link>

        <div ref={dropdownRef} className="hidden md:flex items-center gap-6 text-sm font-bold">
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link to="/" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Shop</Link>

            <div className="relative">
              <button onClick={() => toggleDropdown("bras")} className={`hover:text-gray-500 flex items-center gap-1 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>
                Bras {openDropdown === "bras" ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div className={`absolute left-0 mt-2 bg-white rounded shadow-md z-50 w-48 transition-all duration-300 transform ${
                openDropdown === "bras" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}>
                <Link
                  to="/collections/embroidered-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Embroidered Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/double-padded-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Double Padded Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/cotton-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Cotton Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/foam-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Foam Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/single-padded-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Single Padded Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>

                <Link
                  to="/collections/net-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Net Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/nursing-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Nursing Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/sports-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Sports Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/lace-bra"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Lace Bra
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/bralette"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Bralette
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                
              </div>
            </div>

            <div className="relative">
              <button onClick={() => toggleDropdown("panties")} className={`hover:text-gray-500 flex items-center gap-1 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>
                Panties {openDropdown === "panties" ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div className={`absolute left-0 mt-2 bg-white rounded shadow-md z-50 w-40 transition-all duration-300 transform ${
                openDropdown === "panties" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}>
                <Link
                  to="/collections/cotton-panties"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Cotton Panties
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/panties-pack"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Panties Pack
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
                <Link
                  to="/collections/period-panties"
                  className="block px-4 py-2 text-[15px] text-gray-700 font-normal group"
                >
                  <span className="relative inline-block w-full">
                    <span className="font-medium group-hover:text-[#1A1A1A]">
                      Period Panties
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#1A1A1A] group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                </Link>
              </div>
            </div>

            <Link to="/collections/night-wear" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Night Wear</Link>
            <Link to="/collections/body-sharper" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Body Sharpers</Link>
            <Link to="/collections/camisoles" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Camisoles</Link>
            <Link to="/contact" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Contact</Link>
          </nav>
        </div>

        <div className={`flex items-center gap-7 text-xl leading-none ${showWhiteBg ? "text-gray-800" : "text-white"}`}>
          <FiSearch className="cursor-pointer hover:text-gray-500" />
          <FiUser className="cursor-pointer hover:text-gray-500" />

          <div className="relative" ref={cartRef}>
            <button
              onClick={() => {
                setShowCartDropdown((prev) => !prev);
                setOpenDropdown(null); 
              }}
              className="relative"
            >
              <FiShoppingCart className="cursor-pointer hover:text-gray-500" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>

            {showCartDropdown && (
              <div className="absolute right-0 mt-4 md:w-[480px] w-[90vw] max-h-[600px] rounded-[12px] bg-white shadow-lg z-50 transition-all duration-300 overflow-hidden">
                <div className="flex justify-between items-center border-b px-4 py-3">
                  <h3 className="text-base font-semibold text-black">Your Cart</h3>
                  <button
                    onClick={() => setShowCartDropdown(false)}
                    className="hover:text-gray-700"
                    aria-label="Close"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <div className="max-h-[400px] overflow-y-auto px-4 py-3">
                  {cartItems.length === 0 ? (
                    <p className="text-sm text-gray-600">Your cart is empty.</p>
                  ) : (
                    cartItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-600">{item.color} / {item.size}</p>

                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm font-semibold text-black">Rs.{item.price}</span>
                            <span className="text-xs text-gray-600">Qty: {item.quantity}</span>
                          </div>

                          <button
                            onClick={() => handleRemove(idx)}
                            className="text-xs text-red-500 mt-1 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className="border-t px-4 py-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Total</span>
                      <span className="text-base font-bold text-black">Rs.{totalAmount.toFixed(2)} PKR</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Taxes and{" "}
                      <Link to="/policies/shipping-policy" className="underline hover:text-black">
                        shipping
                      </Link>{" "}
                      calculated at checkout.
                    </p>
                    <div className="flex gap-2 pt-2">
                      <Link
                        to="/cart"
                        className="w-1/2 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-full text-center"
                      >
                        View Cart
                      </Link>
                      <Link to="/checkout"
                        className="w-1/2 text-sm font-semibold bg-black hover:bg-gray-800 text-white py-2 rounded-full text-center"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

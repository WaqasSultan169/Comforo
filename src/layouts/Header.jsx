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
  const dropdownRef = useRef(null);

  const isHomePage = location.pathname === "/";
  const showWhiteBg = !isHomePage || isScrolled || openDropdown !== null;
  const headerBgClass = showWhiteBg ? "bg-white shadow-md" : "bg-transparent";

  const messages = [
    "Flat discounts available",
    "Shapewear that actually works!",
    "Up to 25% Off",
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
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
        <Link to="/" className={`text-4xl ml-4 ${showWhiteBg ? "" : "text-white"}`}>
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

            {/* Static Pages */}
            <Link to="/collections/night-wear" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Night Wear</Link>
            <Link to="/collections/body-sharper" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Body Sharpers</Link>
            <Link to="/collections/camisoles" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Camisoles</Link>
            <Link to="/contact" className={`hover:text-gray-500 ${showWhiteBg ? "text-gray-800" : "text-white"}`}>Contact</Link>
          </nav>
        </div>

        {/* Icons */}
        <div className={`flex items-center gap-7 text-xl ${showWhiteBg ? "text-gray-800" : "text-white"}`}>
          <FiSearch className="cursor-pointer hover:text-gray-500" />
          <FiUser className="cursor-pointer hover:text-gray-500" />
          <FiShoppingCart className="cursor-pointer hover:text-gray-500" />
        </div>
      </div>
    </header>
  );
}

export default Header;

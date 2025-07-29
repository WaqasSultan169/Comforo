import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ThankYouModal from '../components/ThankYouModal';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [activeBilling, setActiveBilling] = useState('');
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    zipCode: '',
    phone: '',
    paymentMethod: '',
  });
  const [file, setFile] = useState(null);

  const BASE_URL = "https://comfora-site-backend.onrender.com";
  const sessionId = localStorage.getItem("sessionId");

  const handleSubmit = async () => {
    try {
      if (!form.paymentMethod) {
        toast.error("❌ Please select a payment method");
        return;
      }
  
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("subtotal", String(subtotal));
      formData.append("cart", JSON.stringify(cartData));
      if (file) {
        formData.append("paymentImage", file);
      }
  
      const response = await axios.post(
        `${BASE_URL}/api/orders/checkout`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      const res = response?.data;
  
      if (res?.order) {
        toast.success("✅ Order placed successfully");
      
        try {
          for (const item of cartData) {
            await axios.delete(`${BASE_URL}/api/cart/${sessionId}/${item.productId}`);
          }         
           setCartData([]); 
        } catch (err) {
          console.warn("Cart clear failed:", err.message);
          toast.warn("⚠️ Cart not cleared, please refresh.");
        }
      
        setShowModal(true);
      }
       else {
        const errorMessage = res?.message || "Order failed. Please try again.";
        toast.error(`❌ Order failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      const errMsg = error?.response?.data?.message || error.message || "Unknown error";
      toast.error(`❌ Server Error: ${errMsg}`);
    }
  };
  
  
  

  const handleSelect = (key) => {
    setSelected(prev => (prev === key ? '' : key));
    setForm(prev => ({ ...prev, paymentMethod: key }));
  };

  const toggleBillingOption = (option) => {
    setActiveBilling(prev => (prev === option ? '' : option));
  };

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch(`${BASE_URL}/api/cart/${sessionId}`);
        const data = await response.json();
        setCartData(data?.items || []);
        const total = data?.items?.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(total || 0);
      } catch (err) {
        console.error('Failed to fetch cart data:', err);
      }
    }

    fetchCart();
  }, []);

  const paymentOptions = [
    {
      key: 'safepay',
      label: 'Safepay Checkout - pay with debit & credit cards',
      icons: [
        {
          src: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg',
          alt: 'visa',
        },
        {
          src: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg',
          alt: 'master',
        },
      ],
    },
    {
      key: 'cod',
      label: 'Cash on Delivery (COD)',
      content: (
        <div className="text-sm text-gray-700 space-y-2">
          <p>Cash on Delivery (Pay in cash when your order is delivered.)</p>
        </div>
      ),
    },
    {
      key: 'bank',
      label: 'Bank Deposit',
      content: (
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>COMFORA</strong></p>
          <p>JS Bank: Bank Road Rawalpindi</p>
          <p>Account Number: <strong>0002658850</strong></p>
          <p>IBAN: <strong>PK22JSBL9015000002658850</strong></p>
          <div className="mt-3">
            <label className="block font-medium mb-1">Upload Receipt / Screenshot:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-sm text-gray-600
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-yellow-200 file:text-yellow-900
                hover:file:bg-yellow-300"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <PageTransition>
    <ToastContainer position="top-right" autoClose={3000} />
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 z-50 flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm w-full">
        <h1 className="font-bold text-2xl pl-[120px]">COMFORA</h1>
        <FaShoppingCart className="text-black text-2xl cursor-pointer" onClick={() => navigate('/cart')} />
      </header>

      <div className="lg:flex gap-6 px-6 lg:px-16 py-[100px]">
        {/* Left Content */}
        <div className="bg-white p-6 flex-1 max-h-[100vh] overflow-y-auto pr-2 hide-scrollbar">
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-2xl mb-2">Contact</h2>
              <input
                name="email"
                placeholder="Email"
                className="border rounded px-4 py-3 text-sm w-full"
                value={form.email}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              />

              <label className="flex items-center mt-3 text-sm">
                <input type="checkbox" className="mr-2" />
                Email me with news and offers
              </label>
            </div>

            {/* Delivery */}
            <div>
              <h2 className="font-semibold text-2xl mb-2">Delivery</h2>
              <select className="w-full border rounded px-4 py-3 text-sm mb-3">
                <option>Pakistan</option>
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <input
                name="firstName"
                placeholder="First name"
                className="border rounded px-4 py-3 text-sm w-full"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              />
              <input
                name="lastName"
                placeholder="Last name"
                className="border rounded px-4 py-3 text-sm w-full"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              />
              </div>

              <input
                name="address"
                placeholder="Address"
                className="border rounded px-4 py-3 mb-2 text-sm w-full"
                value={form.address}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              />
              <input
                name="apartment"
                placeholder="Apartment, suite, etc. (Optional)"
                className="border rounded px-4 py-3 mb-2 text-sm w-full"
                value={form.apartment}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <input
                name="city"
                placeholder="City"
                className="border rounded px-4 py-3 text-sm w-full"
                value={form.city}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              />
              <input
                name="zipCode"
                placeholder="Postal Code (Optional)"
                className="border rounded px-4 py-3 text-sm w-full"
                value={form.zipCode}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              />             
             </div>

             <input
                name="phone"
                placeholder="Phone"
                className="border rounded px-4 py-3 mb-5 text-sm w-full"
                value={form.phone}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              />              
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Save this information for next time
              </label>
            </div>

            {/* Shipping */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Shipping method</h2>
              <div className="border rounded p-3 flex justify-between bg-yellow-50 border-yellow-300 text-sm">
                <span>Delivery Fee</span>
                <strong>FREE</strong>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="font-semibold text-2xl mb-2">Payment</h2>
              <span className="text-sm text-gray-400 py-4 block">
                All transactions are secure and encrypted.
              </span>
              <div className="border rounded p-4 space-y-4">
                {paymentOptions.map(({ key, label, icons, content }) => {
                  const isSelected = selected === key;
                  return (
                    <div
                      key={key}
                      onClick={() => handleSelect(key)}
                      className={`border rounded p-4 cursor-pointer transition-all duration-300 ${
                        isSelected ? 'bg-yellow-50 border-yellow-300' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3 text-sm">
                        <input
                          type="radio"
                          name="payment"
                          checked={isSelected}
                          onChange={() => {}}
                          className="accent-yellow-500"
                        />
                        <span className="font-medium">{label}</span>
                        {icons && (
                          <div className="flex gap-2 ml-4">
                            {icons.map(icon => (
                              <img key={icon.alt} src={icon.src} alt={icon.alt} className="w-8 h-5" />                            ))}
                          </div>
                        )}
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isSelected ? 'max-h-[400px] mt-3' : 'max-h-0'
                        }`}
                      >
                        {content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Billing Address</h2>
              <div className="border rounded p-4 space-y-3 text-sm">
                <div
                  onClick={() => toggleBillingOption('same')}
                  className={`flex items-center space-x-3 cursor-pointer transition-all duration-300 ${
                    activeBilling === 'same' ? 'bg-yellow-100 rounded p-2' : ''
                  }`}
                >
                  <input type="checkbox" readOnly checked={activeBilling === 'same'} />
                  <span>Same as shipping address</span>
                </div>

                <div
                  onClick={() => toggleBillingOption('different')}
                  className={`flex items-center space-x-3 cursor-pointer transition-all duration-300 ${
                    activeBilling === 'different' ? 'bg-yellow-100 rounded p-2' : ''
                  }`}
                >
                  <input type="checkbox" readOnly checked={activeBilling === 'different'} />
                  <span>Use a different billing address</span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeBilling === 'different' ? 'max-h-[500px] mt-3' : 'max-h-0'
                  }`}
                >
                  {activeBilling === 'different' && (
                    <div className="space-y-2 border rounded p-4 bg-white">
                      <input type="text" placeholder="Full Name" className="w-full border rounded px-3 py-2" />
                      <input type="text" placeholder="Street Address" className="w-full border rounded px-3 py-2" />
                      <input type="text" placeholder="City" className="w-full border rounded px-3 py-2" />
                      <input type="text" placeholder="Postal Code" className="w-full border rounded px-3 py-2" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              className="w-full bg-black text-white py-3 rounded-xl mt-6 hover:opacity-90 text-sm"
              onClick={handleSubmit}
            >
              Pay now
            </button>

          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-[400px] h-[calc(100vh-100px)] overflow-y-scroll pr-2 hide-scrollbar">
          <div className="border rounded p-6 shadow-sm bg-transparent">
          <div className="space-y-4">
            {cartData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 border-b pb-4 last:border-none"
              >
                <div className="relative">
                  <img
                    src={item.image ? `${BASE_URL}/uploads/${item.image}` : "/placeholder.jpg"}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  {item.quantity && (
                    <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                  <div className="flex text-xs text-gray-500 mt-1 space-x-3">
                    {item.selectedColor && (
                      <span>
                        <strong>Color:</strong> {item.selectedColor}
                      </span>
                    )}
                    {item.selectedSize && (
                      <span>
                        <strong>Size:</strong> {item.selectedSize}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  Rs {item.price.toLocaleString()}
                </div>
              </div>
            ))}
          </div>


            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span>Rs {subtotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {showModal && (
      <ThankYouModal
        onContinue={() => navigate("/")}
        onClose={() => setShowModal(false)}
      />
    )}

    </PageTransition>
  );
}
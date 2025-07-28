import React, { useState } from 'react';
import PageTransition from "../components/PageTransition";
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // handle form submit
  };

  return (
    <PageTransition>
    <div className="min-h-screen bg-gray-150 pt-[320px] pb-10 px-4 sm:px-6 lg:px-20 flex items-start justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10">
        <div className="max-w-xl">
          <p className="font-bold text-lg text-gray-700 mb-2">Contact Us</p>
          <h2 className="text-3xl font-semibold text-black">Do you have any question?</h2>
        </div>

        <div className="w-full max-w-2xl h-[376px] bg-[#1A1A1A0D] p-6 rounded-xl shadow">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600">
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600">
                  E-mail
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder=" "
                className="peer w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-fit bg-[#1A1A1A] text-white px-6 py-3 rounded-3xl text-lg font-medium hover:bg-gray-800 transition duration-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Contact;

import React from 'react';
import './Home.css';

const Homepage = () => {
  return (
    <>
      <div className="relative">
        <img
          src="/homeharry.jpg"
          alt="CodeWarDrobe"
          className="w-full h-[600px] object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <div className="text-center text-white">
            <h1 className="text-6xl font-extrabold mb-4">Code Your Style</h1>
            <p className="text-2xl mb-8">Code with Style, Dress with Pride.</p>
            <a
              href="#"
              className="bg-pink-600 text-white py-3 px-8 rounded-full hover:bg-pink-700 transition-colors duration-300 shadow-lg"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Why CodeWarDrobe?</h2>
          <p className="text-gray-700 text-lg">Unleash your inner programmer with style.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Apparel</h3>
            <p className="text-center">
              Our clothing is made from premium materials, ensuring both comfort and durability.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Unique Designs</h3>
            <p className="text-center">
              Our collection features one-of-a-kind designs that celebrate the coding culture.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inclusive Sizing</h3>
            <p className="text-center">
              We offer a wide range of sizes to ensure everyone can find their perfect fit.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-400 to-blue-400 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Featured Products</h2>
            <p className="text-white text-lg">Check out some of our best-selling products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Repeat this block for each featured product */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img src="https://m.media-amazon.com/images/I/51BaWHbbziL._SL1402_.jpg" alt="Product 1" className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">$29.99</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
            {/* Add more products as needed */}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-gray-200 text-lg">See what our satisfied customers have to say about us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repeat this block for each testimonial */}
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <p className="text-gray-400 mb-4">"Absolutely love the quality and design of the apparel!"</p>
              <h3 className="text-xl font-semibold">John Doe</h3>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <p className="text-gray-400 mb-4">"Absolutely love the quality and design of the apparel!"</p>
              <h3 className="text-xl font-semibold">John Doe</h3>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <p className="text-gray-400 mb-4">"Absolutely love the quality and design of the apparel!"</p>
              <h3 className="text-xl font-semibold">John Doe</h3>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <p className="text-gray-400 mb-4">"Absolutely love the quality and design of the apparel!"</p>
              <h3 className="text-xl font-semibold">John Doe</h3>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <p className="text-gray-400 mb-4">"Absolutely love the quality and design of the apparel!"</p>
              <h3 className="text-xl font-semibold">John Doe</h3>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <p className="text-gray-400 mb-4">"Absolutely love the quality and design of the apparel!"</p>
              <h3 className="text-xl font-semibold">John Doe</h3>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </div>

      <div className="bg-pink-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-2xl mb-8">Stay updated with our latest collections and offers.</p>
          <a
            href="#"
            className="bg-white text-pink-600 py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;

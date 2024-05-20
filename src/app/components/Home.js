import React from 'react'
import './Home.css'

const Homepage = () => {
  return (
    <>
      <div className="relative">
        <img src="/homeharry.jpg" alt="" className="w-full h-[600px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Wear the Code</h1>
            <p className="text-xl mb-8">Unleash your style with CodeWarDrobe.com</p>
            <a
              href="#"
              className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why CodeWarDrobe?</h2>
          <p className="text-gray-600">Unleash your inner programmer with style.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
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
            <h3 className="text-lg font-bold mb-2">Quality Apparel</h3>
            <p className="text-gray-600 text-center">
              Our clothing is made from premium materials, ensuring both comfort and durability.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Unique Designs</h3>
            <p className="text-gray-600 text-center">
              Our collection features one-of-a-kind designs that celebrate the coding culture.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
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
            <h3 className="text-lg font-bold mb-2">Inclusive Sizing</h3>
            <p className="text-gray-600 text-center">
              We offer a wide range of sizes to ensure everyone can find their perfect fit.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
"use client";
import { CartContext } from '@/app/cartContext';
import React, { useContext, useState, useEffect } from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Pincode = ({ slug, product, colorSizeSlug, variants }) => {
  product = JSON.parse(product);
  colorSizeSlug = JSON.parse(colorSizeSlug);
  variants = JSON.parse(variants);
  const { addToCart, buyNow } = useContext(CartContext);
  const [pinCode, setPinCode] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);
  const [image, setImage] = useState(product.img);

  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };

  const checkAvailability = async () => {
    try {
      let response = await fetch('http://localhost:3000/api/pincode');
      let pinsjson = await response.json();

      if (pinsjson.includes(parseInt(pinCode))) {
        setIsAvailable(true);
        toast.success('Your PinCode is Serviceable', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme:'dark',
          draggable: true,
          className: 'toast-custom-success',
        });
      } else {
        setIsAvailable(false);
        toast.error('Sorry PinCode not Serviceable', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme:'dark',
          draggable: true,
          className: 'toast-custom-error',
        });
      }
    } catch (error) {
      console.error('Error checking PIN code availability:', error);
      setIsAvailable(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(slug, 1, product.price, `${product.title}(${size}/${color})`, size, color);
    toast.success('Item Added to cart', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme:'dark',
      draggable: true,
      className: 'toast-custom-success',
    });
  };

  const handleColor = (newColor) => {
    if (newColor !== color) {
      setColor(newColor);
      // Update size to the first available size for the new color
      const availableSizes = Object.keys(colorSizeSlug[newColor] || {});
      if (availableSizes.length > 0) {
        const newSize = availableSizes[0];
        setSize(newSize);
        // Update image based on selected color and size
        const newVariant = variants.find(variant => variant.color === newColor && variant.size === newSize);
        setImage(newVariant ? newVariant.img : product.img);
      } else {
        setSize("");
        setImage(product.img);
      }
    }
  };
  
  const handleSize = (newSize) => {
    if (newSize !== size) {
      setSize(newSize);
      // Update image based on selected color and size
      const newVariant = variants.find(variant => variant.color === color && variant.size === newSize);
      setImage(newVariant ? newVariant.img : product.img);
    }
  };
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <ToastContainer
    
    />
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white rounded-lg shadow-md">
          <img
  alt="ecommerce"
  className="lg:w-1/2 w-full lg:h-auto object-cover object-top rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
  src={image}
/>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-6">
              <h2    className="text-sm  title-font text-gray-500 tracking-widest uppercase">

                CodeWardrobe.com
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {product.title} ({size}/{color})
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiOutlineStar className="text-yellow-500" />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 transition duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="ml-3 text-gray-500 hover:text-gray-700 transition duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="ml-3 text-gray-500 hover:text-gray-700 transition duration-300"
                  >
                    <FaWhatsapp />
                  </a>
                </span>
              </div>
              <p className="leading-relaxed mb-6">
                {product.desc}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Color</span>
                  {Object.keys(colorSizeSlug).map((variantColor) => (
                    <button
                      key={variantColor}
                      className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${color === variantColor ? 'ring-2 ring-pink-500' : ''}`}
                      style={{ backgroundColor: variantColor }}
                      onClick={() => { handleColor(variantColor) }}
                    ></button>
                  ))}
                </div>
                <div className="flex ml-6 items-center">
  <span className="mr-3">Size</span>
  <div className="relative">
    <select
      value={size}
      onChange={(e) => { handleSize(e.target.value) }}
      className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
    >
      {Object.keys(colorSizeSlug[color] || {}).map((sizeOption) => (
        <option key={sizeOption} value={sizeOption} >{sizeOption}</option>
      ))}
    </select>
    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </span>
  </div>
</div>

              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}
                </span>

                <button onClick={() => buyNow(slug, 1, product.price, `${product.title}(${size}/${color})`, size, color)} className="flex text-white bg-pink-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-pink-600 rounded text-lg transition duration-300">
                  Buy Now
                </button>

              </div>
              <div className="pincode-container mt-6g the code">
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="Enter PIN code"
                    value={pinCode}
                    onChange={handlePinCodeChange}
                    className="border rounded py-2 px-4 w-full mr-4 border-gray-300 focus:ring-2 focus:ring-pink-200 focus:outline-none"
                  />
                  <button
                    onClick={checkAvailability}
                    className="text-white px-6 rounded bg-pink-500 focus:outline-none hover:bg-pink-600 transition duration-300"
                  >
                    Check Availability
                  </button>
                </div>
                {isAvailable !== null && (
                  <p className={`mt-2 ${isAvailable ? 'text-green-500' : 'text-red-500'}`}>
                    {isAvailable
                      ? 'Product is available for this PIN code.'
                      : 'Product is not available for this PIN code.'}
                  </p>
                )}
                <button
                  onClick={handleAddToCart}
                  className="flex cursor-pointer text-white bg-pink-500 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-pink-600 rounded text-lg transition duration-300"
                >
                  Add to Cart
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Pincode;
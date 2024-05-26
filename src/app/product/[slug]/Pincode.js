"use client";
import { CartContext } from '@/app/cartContext';
import React, { useContext, useState } from 'react';

const Pincode = ({ slug }) => {
  const { addToCart } = useContext(CartContext);
  const [pinCode, setPinCode] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);

  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };

  const checkAvailability = async () => {
    let response = await fetch('http://localhost:3000/api/pincode');
    let pinsjson = await response.json();
    console.log('Received PIN codes:', pinsjson);

    if (pinsjson.includes(parseInt(pinCode))) {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }
  };

  return (
    <div className="pincode-container mt-6">
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
          className="text-white py-2 px-6 rounded bg-pink-500 focus:outline-none hover:bg-pink-600 transition duration-300"
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
        onClick={() => addToCart(slug, 1, 499, "Wear the Code(XL/Blue)", "XL", "RED")}
        className="flex cursor-pointer text-white bg-pink-500 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-pink-600 rounded text-lg transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Pincode;

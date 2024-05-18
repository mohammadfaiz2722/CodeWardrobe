"use client";
import { useRouter } from "next/navigation";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const PostPage = ({ params }) => {
  const router = useRouter();
  const [pinCode, setPinCode] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);


  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };

  // const checkAvailability = () => {
  //   // Replace this with your actual logic to check availability based on the pinCode
  //   const isProductAvailable = pinCode === "123456"; // Example: Product is available for PIN code 123456
  //   setIsAvailable(isProductAvailable);
  // };

  const checkAvailability = async () => {
    
      let response = await fetch('http://localhost:3000/api/pincode');
      
  
      let pinsjson = await response.json();
      console.log('Received PIN codes:', pinsjson);
  
      if (pinsjson.includes(parseInt(pinCode))) {
        setIsAvailable(true);
        console.log('Product is available:', isAvailable);
      } else {
        setIsAvailable(false);
        console.log('Product is not available:', isAvailable);
      }
    
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white rounded-lg shadow-md">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto object-cover object-top rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
              src="https://m.media-amazon.com/images/I/51W076X2SxL._SX679_.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-6">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                CodeWardrobe.com
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Where style meets code. (XL/Blue)
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
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
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
                  ₹499.00
                </span>
                <button
                  className="flex text-white  bg-pink-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded text-lg transition duration-300 "
                >
                Buy Now
                </button>
                <butto
                  className="flex text-white  ml-2 bg-pink-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded text-lg transition duration-300 "
                >
                  Add to Cart
                </butto>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gray-300 transition duration-300">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Enter PIN code"
                  value={pinCode}
                  onChange={handlePinCodeChange}
                  className="border rounded py-2 px-4 w-full mr-4 border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none"
                />
                <button
                  onClick={checkAvailability}
                  className="text-white py-2 px-6 rounded bg-pink-500 focus:outline-none hover:bg-pink-600 transition duration-300"
                >
                  Check Availability
                </button>
              </div>
              {(!isAvailable && isAvailable) !== null && (
  <p className={`mt-2 ${isAvailable ? 'text-green-500' : 'text-red-500'}`}>
   {isAvailable === true
      ? 'Product is available for this PIN code.'
      : isAvailable === false
      ? 'Product is not available for this PIN code.'
      : 'Please check the product availability.'}
  </p>
)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPage;

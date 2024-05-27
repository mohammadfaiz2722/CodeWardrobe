import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

import Pincode from "./Pincode";
import mongoose from "mongoose";
import Product from "../../../../models/Product";



const PostPage = async({ params }) => {
  async function fetchData() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw new Error("Error connecting to MongoDB");
    }
    
    let products = await Product.findOne({ slug: params.slug });
    let variants = await Product.find({ title: products.title });
    let colorSizeSlug = {}; // { red: { XL: { slug: 'wear-the-code-xl' } } }
  
    for (let item of variants) {
      if (Object.keys(colorSizeSlug).includes(item.color)) {
        colorSizeSlug[item.color][item.size] = { slug: item.slug };
      } else {
        colorSizeSlug[item.color] = {};
        colorSizeSlug[item.color][item.size] = { slug: item.slug };
      }
    }
    return { colorSizeSlug, products };
  }
 
  const { colorSizeSlug, products } = await fetchData(params);
  // console.log(products);
  
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
               {products.title}
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
                      {/* <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg> */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                ₹{products.price}
                </span>
                <Link href='/checkout'>
                  <button
                    className="flex text-white bg-pink-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded text-lg transition duration-300"
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
              <Pincode slug={params.slug} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPage;

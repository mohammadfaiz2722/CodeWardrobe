"use client";
import Link from "next/link";
import { useState,useRef } from "react";
import "./Navbar.css";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const ref=useRef();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleCart=()=>{
if(ref.current.classList.contains('translate-x-full'))
  {
    ref.current.classList.add('translate-x-0')
    ref.current.classList.remove('translate-x-full')
  }
  else if(!ref.current.classList.contains('translate-x-full'))
    {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
  }
  }

  return (
    // <>
    <nav className="bg-gradient-to-r from-pink-800 to-pink-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt=""
                  width={200}
                  height={40}
                  className="rounded-lg"
                />
              </Link>
            </div>
            <div className="hidden md:block md:text-3xl">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/tshirts"
                  className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                  Tshirts
                </Link>
                <Link
                  href="/hoodie"
                  className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                  Hoodies
                </Link>
                <Link
                  href="/sweatshirts"
                  className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                  SweatShirts
                </Link>
                <Link
                  href="/mugs"
                  className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                  Mugs
                </Link>
                <Link
                  href="/zipperhoodies"
                  className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                  Zipper Hoodies
                </Link>
                <Link
                  href="/mousepads"
                  className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                  MousePads
                </Link>
                <Link
                  href="/cups"
                  className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                  Cups
                </Link>
                <div onClick={toggleCart}
                  className="text-white cursor-pointer hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out shopping-cart"
                >
                  <AiOutlineShoppingCart fontSize="1.4rem" />
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
              <div onClick={toggleCart}
                  className="text-white  hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out "
                >
                  <AiOutlineShoppingCart fontSize="1.4rem" />
                </div>
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-pink-900 inline-flex items-center justify-center p-2 rounded-md text-pink-400 hover:text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen
            ? "block animated fade-enter-active"
            : "hidden animated fade-exit-active"
        } md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Tshirts
          </Link>
          <Link
            href="/about"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Hoodies
          </Link>
          <Link
            href="/products"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Sweat SHirt
          </Link>
          <Link
            href="/contact"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Mugs
          </Link>
          <Link
            href="/contact"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Zipper Hoodies
          </Link>
          <Link
            href="/contact"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            MousePads
          </Link>
          <Link
            href="/contact"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Cups
          </Link>
          
        </div>
      </div>

      <div ref={ref} className="w-56 sidecart absolute top-0 right-0 py-10 px-8  bg-pink-100  transform transition-transform translate-x-full">

   <h2 className="font-bold text-xl shoppingcart text-center">Shopping Cart</h2>
    <span onClick={toggleCart}className="absolute top-4 right-2 closeicon cursor-pointer text-xl text-pink-500" ><TfiClose/></span>

      <ol className="list-decimal">
        <li >
          <div className="item flex my-4" >

          <div className="w-2/3 font-semibold py-2">Tsirt-wear the code</div>
          <div className="flex item-center justify-center w-1/3 py-2 font-semibold "><AiOutlinePlusCircle className='mx-1 text-2xl cursor-pointer'/>1<AiOutlineMinusCircle className='mx-1 text-2xl cursor-pointer'/></div>
          </div>
        </li>
        
      </ol>
      </div>
    {/* </> */}
    </nav>
  );
};

export default Navbar;
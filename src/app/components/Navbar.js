"use client";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu,AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
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
                <div
                  onClick={toggleSidebar}
                  className="text-white cursor-pointer hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out shopping-cart"
                >
                  <AiOutlineShoppingCart fontSize="1.4rem" />
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <div
              onClick={toggleSidebar}
              className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
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
                <AiOutlineMenu className="block h-6 w-6" />
              ) : (
                <AiOutlineClose className="block h-6 w-6" />
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
            href="/tshirts"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Tshirts
          </Link>
          <Link
            href="/hoodie"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Hoodies
          </Link>
          <Link
            href="/sweatshirts"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Sweat Shirts
          </Link>
          <Link
            href="/mugs"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Mugs
          </Link>
          <Link
            href="/zipperhoodies"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Zipper Hoodies
          </Link>
          <Link
            href="/mousepads"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            MousePads
          </Link>
          <Link
            href="/cups"
            className="text-white hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
          >
            Cups
          </Link>
        </div>
      </div>

      <div
        className={`${
          isOpen
            ? "block animated fade-enter-active"
            : "hidden animated fade-exit-active"
        } md:hidden`}
      >
        {/* ... */}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0  z-10 right-0 h-full w-80 bg-pink-100 transition-transform duration-300  ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full">
          <div className="p-6">
            <h2 className="font-bold text-xl text-center mb-4">Shopping Cart</h2>
            <ul className="space-y-4">
              {/* Cart items */}
              <li>
                <div className="item flex justify-between">
                  <div className="font-semibold">Tsirt-wear the code</div>
                  <div className="flex items-center">
                    <button className="text-pink-500 text-2xl">
                      <AiOutlineMinus />
                    </button>
                    <span className="mx-2">1</span>
                    <button className="text-pink-500 text-2xl">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="item flex justify-between">
                  <div className="font-semibold">Tsirt-wear the code</div>
                  <div className="flex items-center">
                    <button className="text-pink-500 text-2xl">
                      <AiOutlineMinus />
                    </button>
                    <span className="mx-2">1</span>
                    <button className="text-pink-500 text-2xl">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="item flex justify-between">
                  <div className="font-semibold">Tsirt-wear the code</div>
                  <div className="flex items-center">
                    <button className="text-pink-500 text-2xl">
                      <AiOutlineMinus />
                    </button>
                    <span className="mx-2">1</span>
                    <button className="text-pink-500 text-2xl">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="item flex justify-between">
                  <div className="font-semibold">Tsirt-wear the code</div>
                  <div className="flex items-center">
                    <button className="text-pink-500 text-2xl">
                      <AiOutlineMinus />
                    </button>
                    <span className="mx-2">1</span>
                    <button className="text-pink-500 text-2xl">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="item flex justify-between">
                  <div className="font-semibold">Tsirt-wear the code</div>
                  <div className="flex items-center">
                    <button className="text-pink-500 text-2xl">
                      <AiOutlineMinus />
                    </button>
                    <span className="mx-2">1</span>
                    <button className="text-pink-500 text-2xl">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="item flex justify-between">
                  <div className="font-semibold">Tsirt-wear the code</div>
                  <div className="flex items-center">
                    <button className="text-pink-500 text-2xl">
                      <AiOutlineMinus />
                    </button>
                    <span className="mx-2">1</span>
                    <button className="text-pink-500 text-2xl">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </li>
              {/* Add more cart items */}
            </ul>
          </div>
          <div className="mt-auto p-6 bg-gray-100 border-t">
          {/* <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg text-gray-700">Total:</span>
            <span className="font-bold text-lg text-gray-900">₹2000</span>
          </div> */}
          <button className="flex items-center justify-center w-full text-white bg-pink-500 border-0 py-2 mb-2 focus:outline-none hover:bg-pink-600 rounded text-lg transition duration-300">
            <BsFillBagHeartFill className="mr-2" />
            Checkout
          </button>
          <button className="flex items-center justify-center w-full text-white bg-red-500 border-0 py-2 focus:outline-none hover:bg-red-600 rounded text-lg transition duration-300">
            Clear Cart
          </button>
        </div>
    <button
      onClick={toggleSidebar}
      className="absolute top-4 right-4 text-pink-500 text-2xl"
    >
      <AiOutlineClose />
    </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
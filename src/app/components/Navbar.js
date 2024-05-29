"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { CartContext } from "../cartContext";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const { cart, addToCart, removeFromCart, clearCart, subTotal } = useContext(CartContext);

  return (
    <nav className="sticky-navbar bg-gradient-to-r from-pink-800 to-pink-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  src="/latest.png"
                  alt=""
                  width={230}
                  height={60}
                  className="rounded-lg logo"
                />
              </Link>
            </div>
            <div className="hidden md:block md:text-3xl">
              <div className="ml-10 flex items-baseline space-x-4" id="selection">
                <Link
                  href="/tshirts"
                  className="text-gray-200 hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                  onClick={handleLinkClick}
                >
                  Tshirts
                </Link>
                <Link
                  href="/hoodie"
                  className="text-gray-200 hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                  onClick={handleLinkClick}
                >
                  Hoodies
                </Link>
                <Link
                  href="/sweatshirts"
                  className="text-gray-200 hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                  onClick={handleLinkClick}
                >
                  SweatShirts
                </Link>
                <Link
                  href="/mugs"
                  className="text-gray-200 hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                  onClick={handleLinkClick}
                >
                  Mugs
                </Link>
                <Link
                  href="/zipperhoodies"
                  className="text-gray-200 hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                  onClick={handleLinkClick}
                >
                  Zipper Hoodies
                </Link>
                <Link
                  href="/mousepads"
                  className="text-gray-200 hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                  onClick={handleLinkClick}
                >
                  MousePads
                </Link>
                <Link
                  href="/cups"
                  className="text-gray-200 hover:bg-pink-700 px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                  onClick={handleLinkClick}
                >
                  Cups
                </Link>
                <div
                  className="text-gray-200 cursor-pointer flex px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out shopping-cart"
                  onClick={toggleSidebar}
                >
                  <AiOutlineShoppingCart fontSize="1.6rem" />
                  <Link href="/login">
                    <MdAccountCircle fontSize="1.4rem" className="ml-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <div className="text-gray-200 flex px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
              <AiOutlineShoppingCart onClick={toggleSidebar} fontSize="1.4rem" />
              <Link href="/login">
                <MdAccountCircle fontSize="1.4rem" className="ml-4" />
              </Link>
            </div>
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-pink-900 inline-flex items-center justify-center p-2 rounded-md text-pink-400 hover:text-gray-200 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-800 focus:ring-white"
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
        className={`${isOpen ? "block animated fade-enter-active" : "hidden animated fade-exit-active"} md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/tshirts"
            className="text-gray-200 hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Tshirts
          </Link>
          <Link
            href="/hoodie"
            className="text-gray-200 hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Hoodies
          </Link>
          <Link
            href="/sweatshirts"
            className="text-gray-200 hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Sweat Shirts
          </Link>
          <Link
            href="/mugs"
            className="text-gray-200 hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Mugs
          </Link>
          <Link
            href="/zipperhoodies"
            className="text-gray-200 hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Zipper Hoodies
          </Link>
          <Link
            href="/mousepads"
            className="text-gray-200 hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            MousePads
          </Link>
          <Link
            href="/cups"
            className="text-gray-200 hover:bg-pink-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Cups
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 z-10 right-0 h-full w-80 bg-gradient-to-r from-pink-800 to-pink-500 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full flex flex-col">
          <div className="p-6 flex-grow">
            <h2 className="font-bold text-gray-200 text-xl text-center mb-4">Shopping Cart</h2>
            <ol className="space-y-4">
              {/* Cart items */}
              {Object.keys(cart).length === 0 && (
                <div className="my-4 text-base font-normal">Your Cart is empty</div>
              )}
              {Object.keys(cart).map((k) => (
                <li key={k}>
                  <div className="item flex justify-between">
                    <div className="font-semibold text-gray-200">{cart[k].name}</div>
                    <div className="flex items-center">
                      <button className="text-pink-500 text-2xl">
                        <AiOutlineMinus
                          onClick={() => {
                            removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant);
                          }}
                        />
                      </button>
                      <span className="mx-2 text-gray-200">{cart[k].qty}</span>
                      <button className="text-pink-500 text-2xl">
                        <AiOutlinePlus
                          onClick={() => {
                            addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant);
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="p-6 bg-gradient-to-r from-pink-800 to-pink-500 border-t flex flex-col space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg text-gray-200">Total:</span>
              <span className="font-bold text-lg text-gray-200">₹{subTotal}</span>
            </div>
            <Link href="/checkout">
              <button className="flex items-center justify-center w-full text-gray-200 bg-pink-500 py-2 focus:outline-none hover:bg-pink-600 rounded text-lg transition duration-300">
                <BsFillBagHeartFill className="mr-2" />
                Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex items-center justify-center w-full text-gray-200 bg-red-500 border-0 py-2 focus:outline-none hover:bg-red-600 rounded text-lg transition duration-300"
            >
              Clear Cart
            </button>
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-gray-200 text-2xl"
            >
              <AiOutlineClose/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

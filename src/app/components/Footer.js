import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-12 pb-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src="/latest.png" alt="" width={200} height={40} className="mr-3" />
              {/* <span className="font-bold text-xl tracking-tight">Your Brand</span> */}
            </Link>
            <p className="mt-2 text-gray-400">Crafting exceptional digital experiences.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-bold mb-4">Company</h4>
            <nav className="list-none">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </nav>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-bold mb-4">Resources</h4>
            <nav className="list-none">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Developers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
            </nav>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FaTwitter className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FaFacebook className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FaInstagram className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400">© 2024 CodeWardrobe.com  All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
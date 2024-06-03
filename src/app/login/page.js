// pages/login.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden animate__animated animate__fadeInUp">
        <div className="px-6 py-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-700">Welcome Back</h2>
          <p className="text-center text-gray-600 mb-6">Please login to your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Login
              </button>
              <Link href="/forgotpassword">
                <div className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                  Forgot Password?
                </div>
              </Link>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t">
          <p className="text-gray-600 text-center">
            Don't have an account?{' '}
            <Link href="/signup">
              <span className="text-pink-500 hover:text-pink-600 font-bold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

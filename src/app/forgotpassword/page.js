// pages/forgot-password.js
"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const router=useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  useEffect(()=>{
    if(localStorage.getItem('token'))
      {
        router.push('/')
      }
  },[])
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', damping: 10, stiffness: 100 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600"
    >
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-700">Forgot Your Password?</h2>
          <p className="text-center text-gray-600 mb-6">No worries, we got you covered</p>
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
            <div className="flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Reset Password
              </motion.button>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t">
          <p className="text-gray-600 text-center">
            Remember your password?{' '}
            <Link href="/login">
              <div className="text-pink-500 hover:text-pink-600 font-bold cursor-pointer">
                Log In
              </div>
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;

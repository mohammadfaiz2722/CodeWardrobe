// pages/signup.js
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';


import { FaEye, FaEyeSlash } from 'react-icons/fa';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(10, 'Password must be at least 10 characters'),
});

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const router = useRouter();
  useEffect(()=>{
    if(localStorage.getItem('token'))
      {
        router.push('/')
      }
  },[])

  const snap = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const formBody = signupSchema.parse({ name, email, password });
      setValidationErrors([]); // Clear validation errors

      const response = await fetch("http://localhost:3000/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formBody),
      });

      if (!response.ok) {
        toast.error('Failed! Try using another email', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        snap();
        throw new Error(`API request failed with status ${response.status}`);
      }

      toast.success('🦄 Signed Up Successfully ', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      snap();
      setTimeout(() => {
        router.push('/login')
      }, 1200);

      // Handle successful signup (e.g., clear form, redirect)
      snap();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const errors = error.errors.map((err) => err.message);
        setValidationErrors(errors);
      } else {
        // Handle other errors
        console.error(error);
      }
    }
  };

  const [hidden,setHidden]=useState(false)
  const showPassword=()=>{
    setHidden(!hidden)
    console.log(hidden);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center mb-4">
          <Image src="/latest.png" alt="latest" width={190} height={120} />
        </div>
        <div className="px-6 py-8">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <h2 className="text-center text-2xl font-bold text-gray-700">Create an Account</h2>
          <span className="text-center block text-gray-600 mb-6">Please fill in the details below</span>
          {validationErrors.length > 0 && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {validationErrors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
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
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
              type={hidden? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <div className="absolute top-2/3 right-3 transform -translate-y-1/2 text-black cursor-pointer" style={{fontSize:'22px',marginTop:'-5px'}} onClick={showPassword}>

          {!hidden?<FaEye/>:<FaEyeSlash/>}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t">
          <span className="text-gray-600 block text-center">
            Already have an account?{' '}
            <Link href="/login">
              <div className="text-pink-500 hover:text-pink-600 font-bold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                Log In
              </div>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

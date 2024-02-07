import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="max-w-sm mx-auto w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-4 md:p-8 ">
        <h1 className='text-[#2d333a] text-center font-bold text-2xl md:text-4xl mb-3'>Welcome back</h1>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input type="email" id="email" className="shadow-sm border border-gray-900 text-sm rounded  block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>



        <div className="mb-3 ">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>

          <div className='relative'>

            <input
              type={showPassword ? 'text' : 'password'}
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded block w-full p-2.5 dark:shadow-sm-light"
              placeholder='password'
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-5 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>
        </div>




        <div className="flex items-start mb-5">
          <label htmlFor="terms" className="ms-2 text-sm text-gray-900 ">Don't have an account? <a href="/register" className="text-blue-600 hover:underline dark:text-blue-500">Sign up</a></label>
        </div>
        <Link to="/home" type="submit" className="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</Link>
      </form>
    </div>
  );
};

export default Login;

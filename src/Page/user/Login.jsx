import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [userError, setUserError] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginform = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!userEmail.trim()) {
      errors.userEmail = "This field is required";
    }

    if (!userPassword.trim()) {
      errors.userPassword = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const payload = {
        'Email': userEmail,
        'Password': userPassword
      };

      const response = await axios.post('https://market.srninfotech.com/api/login', payload, {
        headers: {
          'Content-type': 'application/json'
        }
      });
      console.log(response.data);
      sessionStorage.setItem('token', response.data.token);
      setUserError("")
      setUserEmail("")
      setUserPassword("")
      toast.success(`Login successful`);
      setTimeout(() => {
        navigate("/dashbord")
      }, 2000);

    } catch (error) {
      if (error.response.data.message) {
        setUserError(error.response.data.message);
      } else {
        setUserError('');
      }
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="max-w-sm mx-auto w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-4 md:p-8 ">
        <h1 className='text-[#2d333a] text-center font-bold text-2xl md:text-4xl mb-3'>Welcome back</h1>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            id="email"
            className="shadow-sm border border-gray-900 text-sm rounded block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
          />
          {errors.userEmail && <p className="text-red-500 text-xs">{errors.userEmail}</p>}
        </div>

        <div className="mb-3 ">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>

          <div className='relative'>
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded block w-full p-2.5 dark:shadow-sm-light"
              placeholder='password'
              required
            />
            {errors.userPassword && <p className="text-red-500 text-xs">{errors.userPassword}</p>}
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-5 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="flex items-start mb-5">
          <label htmlFor="terms" className="ms-2 text-sm text-gray-900 ">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-500">Sign up</Link></label>
        </div>
        <button
          onClick={handleLoginform}
          type="submit"
          className="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign In
        </button>

        {userError && <p className="text-red-500 text-sm text-center">{userError}</p>}

      </form>
    </div>
  );
};

export default Login;

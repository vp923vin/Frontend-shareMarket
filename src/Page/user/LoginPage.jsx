import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

const LoginPage = () => {
  return (
    <div className="flex h-screen">

      <div className="hidden lg:block flex-1 bg-green-500 px-4">
        <div className="h-full flex items-center">
          <div className='text-white text-3xl font-bold'>
            <ReactTyped
              strings={[
                "<span className=''>Lorem ipsum dolor  Minus praesentium provident repudiandae exercitationem laudantium, non voluptatibus illum earum architecto hic suscipit  Atque, laboriosam?</span>"
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-black/90 text-white sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
        <div className="h-full flex items-center justify-center">
          <div>
            <h1 className='text-2xl text-center mb-4 font-bold '>Get Started</h1>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to="/login" className="bg-gray-600 rounded text-white px-16 py-2.5 text-sm font-bold">Sign In</Link>
              <Link to="/register"  className="bg-green-600 rounded text-white px-16 py-2.5 text-sm font-bold">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;

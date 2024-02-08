import React from 'react';

const Header = ({show ,setshow}) => {
  return (
    <section>
      <nav className="w-full bg-gray-700">
        <div className="container py-3.5 mx-auto">
          <div className="flex sm:justify-end items-center">
            <ul className="flex  flex-wrap sm:flex-row  font-medium mt-0 space-x-4 rtl:space-x-reverse rounded border py-1.5 px-3 text-sm">
              <li className="border-r pr-2">
                <a href="#" className="text-white " aria-current="page">
                  Home
                </a>
              </li>
              <li className="border-r pr-2">
                <a href="#" className=" text-white ">
                  Why us
                </a>
              </li>
              <li className="border-r pr-2">
                <a href="#" className="text-white ">
                  Pricing
                </a>
              </li>
              <li className="border-r pr-2">
                <a href="#" className="text-white ">
                  FAQ
                </a>
              </li>
              <li className="border-r pr-2">
                <a href="#" className="text-white ">
                  Features
                </a>
              </li>
              <li>
                <a  
                 onClick={()=>setshow(!show)}
                 
                 className="text-white cursor-pointer ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;

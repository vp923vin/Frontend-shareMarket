import React from 'react';

const Header = () => {
  return (
    <section>
      <nav className="w-full bg-gray-700">
        <div className="container py-2 mx-auto">
          <div className="flex sm:justify-end items-center">
            <ul className="flex  flex-wrap sm:flex-row  font-medium mt-0 space-x-4 rtl:space-x-reverse rounded border py-2 px-3 text-sm">
              <li className="border-r pr-2">
                <a href="#" className="text-gray-900 dark:text-white " aria-current="page">
                  Home
                </a>
              </li>
              <li className="border-r pr-2">
                <a href="#" className="text-gray-900 dark:text-white ">
                  Why us
                </a>
              </li>
              <li className="border-r pr-2">
                <a href="#" className="text-gray-900 dark:text-white ">
                  Pricing
                </a>
              </li>
              <li className="border-r pr-2">
                <a href="#" className="text-gray-900 dark:text-white ">
                  FAQ
                </a>
              </li>
              <li className="border-r pr-2">
                <a href="#" className="text-gray-900 dark:text-white ">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white ">
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

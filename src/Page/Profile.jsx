import React from "react";
// import "../Page/Profile.css";
import { useContextApi } from "../components/context/UseContext";

import { Link } from "react-router-dom";

function Profile(props) {
  const { theme, toggleTheme } = useContextApi();

  return (
    <>
      <section
        className={` dark:text-white dark:bg-slate-900  h-screen overflow-hidden `}
      >
        {/* aside  */}
        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-64 mt-14 py-6 transition-transform -translate-x-full   rounded-md  border-gray-200 sm:translate-x-0 shadow bg-gray-200 dark:bg-slate-800 dark:border-gray-600 "
          aria-label="Sidebar"
        >
          <div class="h-full px-3 pb-4 overflow-y-auto dark:bg-slate-800 ">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div class=" px-14 py-14  sm:ml-64 ">
          <div class="px-10 py-6  border-gray-200 rounded-lg dark:border-gray-700 dark:bg-slate-800  bg-gray-200 ">
            <p className="mb-2 ">General Information</p>

            <div className="py-2 mb-3 flex items-center gap-4 ">
              <div class="relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <img
                  src="https://crypo.netlify.app/assets/img/avatar.svg"
                  alt=""
                />
              </div>

              <div class="flex  dark:bg-gray-900">
                <label
                  for="file-upload"
                  class="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-200"
                >
                  Upload File
                </label>
                <input id="file-upload" type="file" class="hidden" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 lg:gap-8 ">
              <div class="mb-1">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  placeholder="First name"
                  type="text"
                  id="default-input"
                  class="bg-gray-50 dark:border-3  dark:bg-slate-700  text-gray-600 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-1">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  placeholder="Last name"
                  type="text"
                  id="default-input"
                  class="bg-gray-50  dark:bg-slate-700 border-gray-400 text-gray-600 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div class="mb-1">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  placeholder="Enter phone Email"
                  type="text"
                  id="default-input"
                  class="bg-gray-50  dark:bg-slate-700 border-gray-400 text-gray-600 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-1">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  placeholder="Enter phone number"
                  type="text"
                  id="default-input"
                  class="bg-gray-50  dark:bg-slate-700 border-gray-400 text-gray-600 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-1">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Language
                </label>
                <input
                  placeholder="English"
                  type="text"
                  id="default-input"
                  class="bg-gray-50  dark:bg-slate-700 border-gray-400 text-gray-600 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-1">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Currency
                </label>
                <input
                  placeholder="USD"
                  type="text"
                  id="default-input"
                  class="bg-gray-50  dark:bg-slate-700 border-gray-400 text-gray-600 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button className="bg-blue-600 py-3 text-white hover:bg-blue-700 rounded">
                Update
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;

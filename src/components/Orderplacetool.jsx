import React, { useState, useEffect } from "react";
import "./Orderplace.css";
import TradingViewChart from "../components/Chartview";
import { useContextApi } from "./context/UseContext";
import FlashTradeview from "./Stockchart/FlashTradeview";
import { Link } from "react-router-dom";
import Customd_rowpdown from "./flash-trade/Customd_rowpdown";

function Orderplacetool() {
  const { theme } = useContextApi();
  const [count, setCount] = useState(0);

  const users = ['Nifty', 'Bank Nifty', 'Finnifty', 'Midcapnifty'];
  const [digits, setDigits] = useState([]);
  const [expdate, setexpdate] = useState(["24 july 2024"]);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };




  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };




  useEffect(() => {
    const generateNumbers = () => {
      const generatedDigits = [];
      for (let i = 1; i <= 300; i++) {
        generatedDigits.push(i);
      }
      setDigits(generatedDigits);
    };

    generateNumbers();
  }, []);


  const indexIten = [
    { id: 1, name: "Bonnie Green" },
    { id: 2, name: "Jese Leos" },
    { id: 3, name: "Michael Gough" },
    { id: 4, name: "Robert Wall" },
    { id: 5, name: "Joseph Mcfall" },
    { id: 6, name: "Leslie Livingston" },
    { id: 7, name: "Roberta Casas" },
    // Add more users as needed
  ];


  return (
    <>
      <section
        className={` container-fluid  order_tool_first dark:text-white  dark:bg-black  `} >

        <div className=" flex justify-between  items-center">
          <h1 className="text font-bold text-lg mb-2">Flash Trade</h1>

          <div className="">
            <div className="flex gap-4 ">
              <Link
                 to="/dashboard"
                className="bg-blue-900 rounded text-sm flex items-center px-4 text-white   "
              >
                Home
              </Link>

              <img className="w-8 h-8 rounded-full  bg-sky-50" src="" alt="" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-[48%_auto] gap-2">
          {/* left side content */}


          <div>

            <div className="grid grid-cols-2 ">

              <div className="flex gap-2 items-center ">


                <Customd_rowpdown
                  users={users}
                  selectedoption={"Nifty 50"}
                  lable={" Lot Size(50)"}
                  lotprise={"2000"}
                />

                <Customd_rowpdown
                  selectedoption={"12 may 2034"}
                  users={expdate}
                  lable={"Expiry Date "}
                  className={"-mt-4"}
                />

              </div>

              <div className="flex gap-2 items-center pl-4">

                <Customd_rowpdown
                  selectedoption={"12"}
                  users={digits}
                  lable={"Set Lot Size"}
                  className={"-mt-3"}
                />

                <div class="">
                  <button className="text-sm bg-blue-900 text-white px-2 py-1 rounded ">Kill Switch </button>
                </div>
              </div>

              {/*  */}

              <div className="mt-3">
                <div className="relative">
                  <button
                    id="dropdownSearchButton"
                    onClick={toggleDropdown}
                    className="text-white 
                px-10 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Call Strike
                    <svg
                      className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {isOpen && (
                    <div
                      id="dropdownSearch"
                      className="z-10 absolute top-full left-0 mt-1 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
                    >
                      <div className="p-3">
                        <label htmlFor="input-group-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          {/* Search input */}
                          <input
                            type="text"
                            id="input-group-search"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search user"
                          />
                        </div>
                      </div>

                      {/* Checkbox list */}
                      <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                        {/* Map over your data to generate list items */}
                        {indexIten.map(user => (
                          <li key={user.id}>
                            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

                              <label
                                htmlFor={`checkbox-item-${user.id}`}
                                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                              >
                                {user.name}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>


                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3  ">
                <div className="relative">
                  <button
                    id="dropdownSearchButton"
                    onClick={toggleDropdown}
                    className="text-white 
                px-10 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Put Strike
                    <svg
                      className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {isOpen && (
                    <div
                      id="dropdownSearch"
                      className="z-10 absolute top-full left-0 mt-1 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
                    >
                      <div className="p-3">
                        <label htmlFor="input-group-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          {/* Search input */}
                          <input
                            type="text"
                            id="input-group-search"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search user"
                          />
                        </div>
                      </div>

                      {/* Checkbox list */}
                      <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                        {/* Map over your data to generate list items */}
                        {indexIten.map(user => (
                          <li key={user.id}>
                            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

                              <label
                                htmlFor={`checkbox-item-${user.id}`}
                                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                              >
                                {user.name}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>


                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 items-center py-2">

                <button className="px-3 py-2  text-sm  rounded-lg bg-green-500 text-white">BUY CE </button>

                <button className="px-3 py-2 text-sm rounded-lg bg-red-500 text-white">SELL CE </button>

              </div>

              <div className="flex gap-2 items-center  ">

                <button className="px-3 py-2 text-sm  rounded-lg bg-green-500 text-white">BUY PE </button>
                <button className="px-3 py-2 text-sm rounded-lg bg-red-500 text-white">SELL PE </button>
              </div>



              <div className="flex gap-3  items-center  ">


                <div className="flex items-center gap-2">

                  <input
                    placeholder="4"
                    type="text"
                    className="text-center w-16 px-3 py-1  rounded-lg  border-2 border-green-500 " />

                  <input id="checked-checkbox"
                    type="checkbox" value=""
                    class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                </div>

                <div className="flex items-center gap-2">
                  <input
                    placeholder="5"
                    type="text"
                    className=" text-center w-16 px-3 py-1 rounded-lg border-2  border-red-500 text-white" />

                  <input id="checked-checkbox"
                    type="checkbox" value=""
                    class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                </div>
              </div>


              <div className="flex gap-3  items-center  ">


                <div className="flex items-center gap-2">

                  <input
                    placeholder="4"
                    type="text"
                    className="text-center w-16 px-3 py-1  rounded-lg  border-2 border-green-500 " />

                  <input id="checked-checkbox"
                    type="checkbox" value=""
                    class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                </div>

                <div className="flex items-center gap-2">
                  <input
                    placeholder="5"
                    type="text"
                    className=" text-center w-16 px-3 py-1 rounded-lg border-2  border-red-500 text-white" />

                  <input id="checked-checkbox"
                    type="checkbox" value=""
                    class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                </div>
              </div>

            </div>


            <div className="grid grid-cols-3 grid-auto-flow py-6">

              <div className="items-center space-y-2">

                <button
                  id="dropdownSearchButton"

                  className="text-white 
                   px-6 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Start Trail (+1)
                </button>

                <button
                  id="dropdownSearchButton"

                  className="text-white 
                px-7 bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Turn OFF SL
                </button>

                <button
                  id="dropdownSearchButton"

                  className="text-white 
                 px-3 bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Turn OFF Target
                </button>

                <button
                  id="dropdownSearchButton"

                  className="text-white 
                 px-9 bg-yellow-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Partial Exit
                </button>


              </div>

              <div className=" -ml-10 border-3 p-3 text-center border-blue-400">
                <div>
                  <p className="text-center mb-1 text-sm">Realized P&L</p>
                  <p className="text-green-500">10000</p>
                  <p className="text-red-600">-20000</p>
                </div>
                <div className="border-[1px] p-2 border-yellow-400">
                  <p className="text-sm">Broker Name:</p>
                  <p className="text-sm">Net A/C  balance:</p>
                </div>

              </div>

              <div className="pl-6 space-y-2">

                <div>
                  <p className="text-xs pl-3 mb-1">Modify Live SL</p>

                  <div className="flex ">
                    <span
                      className="bg-red-500 text-white flex items-center justify-center text-lg h-8 w-8 "
                    >-</span>
                    <span>
                      <input
                        className="outline-none h-8 w-16 text-center"
                        type="text" name="" id="" value={"13"} />
                    </span>
                    <span
                      className="bg-green-500  text-white flex items-center justify-center text-lg h-8 w-8 "
                    >+</span>
                  </div>

                </div>


                <div>
                  <p className="text-xs pl-3 mb-1">Modify Live Target</p>
                  <div className="flex ">
                    <span
                      className="bg-red-500 cursor-pointer text-white flex items-center justify-center text-lg h-8 w-8 "
                    >-</span>
                    <span>
                      <input
                        className="outline-none h-8 w-16 text-center"
                        type="text" name="" id="" value={"1"} />
                    </span>
                    <span
                      className="bg-green-500  cursor-pointer text-white flex items-center justify-center text-lg h-8 w-8 "
                    >+</span>
                  </div>
                </div>


                <div className="flex flex-col space-y-2 ">


                  <button
                    className="text-white 
                  w-32  bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                   Default SL -10
                  </button>

                  <button


                    className="text-white 
                      w-32 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                  Default Target -10
                  </button>
                </div>
              </div>


            </div>


            <div className="border-3 pb-2 p-1 border-blue-400">

              <table class="table-auto">
                <thead>
                  <tr>
                    <th class="px-1 py-1 border-r font-bold text-sm  ">Symbol Name</th>
                    <th class="px-1 py-1 border-r font-bold text-sm ">Net Qty</th>
                    <th class="px-1 py-2 border-r font-bold text-sm">Avg Price</th>
                    <th class="px-1 py-1 border-r font-bold text-sm ">LTP</th>
                    <th class="px-1 py-1 border-r font-bold text-sm ">Buy Price</th>
                    <th class="px-1 py-1 border-r font-bold text-sm ">Sell Price</th>
                    <th class="px-1 py-1 border-r font-bold text-sm ">PNL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-1 text-sm py-2">AAPL</td>
                    <td class="border px-1 text-sm py-2">100</td>
                    <td class="border px-1 text-sm py-2">$150.00</td>
                    <td class="border px-1 text-sm py-2">$160.00</td>
                    <td class="border px-1 text-sm py-2">$155.00</td>
                    <td class="border px-1 text-sm py-2">$165.00</td>
                    <td class="border px-1 text-sm py-2">$1000.00</td>
                  </tr>

                </tbody>






              </table>
              <div className="flex justify-between ">
                <div>Notifiction </div>
                <div className="flex gap-2 ">
                  <button className="px-3 bg-green-500 text-white rounded py-1.5 text-sm">Order Book</button>
                  <button className="px-3 bg-green-500 text-white rounded py-1.5 text-sm">Disclaimer</button>
                </div>
              </div>

            </div>





          </div>



          {/* right side content */}
          <div className="mt-1">
            <FlashTradeview />
          </div>

        </div>
      </section>
    </>
  );
}
export default Orderplacetool;

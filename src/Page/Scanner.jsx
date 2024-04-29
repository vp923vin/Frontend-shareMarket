import React, { useState } from "react";
import "../Page/scanner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMenuSharp } from "react-icons/io5";

function Scanner() {
  const [selectedSegment, setSelectedSegment] = useState("Nifty 500/Futures");

  const [inputValue, setInputValue] = useState("");

  const [segments, setSegments] = useState([
    "Cash",
    "Banknifty",
    "ETFs",
    "Futures",
    "Gold ETFs",
    "Indices",
    "Midcap 50",
    "Nifty 100",
    "Nifty 200",
    "Nifty 50",
    "Nifty 500",
    "Nifty and Banknifty",
  ]);

  const handleSegmentChange = (event) => {
    setSelectedSegment(event.target.value);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleIncrement = () => {};

  const handleDecrement = () => {};

  return (
    <>
    <section className="scanner  text-black dark:text-white dark:bg-black  ">
        <div className="container">
          <div className="row">
            <divv className="col-lg-2 col-md-2 col-12">
              <h5 className="scan_h dark:text-white">Scanner</h5>
            </divv>
            <divv className="col-lg-7 col-md-7 col-12">
              <h5 className="scan_h dark:text-white">Scanner name</h5>
              <p className="para_scan">
                Scanner Description: A stock scanner,also known as a stock
                screener,is a tool or application used by traders and investors
                to filter and identify stocs that meet specific criteria of
                paramiters
              </p>
            </divv>

            <div className="col-lg-2 col-md-2 col-12">
              <h6 className="date_as dark:text-white">Market segments as on Date-time</h6>
            </div>
            <div className="col-lg-1 col-md-1 propp">
              <img
                className="imges_proo"
                src="public/images/profilee.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full flex justify-end items-center  gap-3 py-2">
         
            <button className="add_to_bullis dark:text-white">Add to playbook</button>
            <button className="add_to text-red-600"> <span className="text-green-400">Bullish/</span>Bullish</button>
          </div>

          <div className="row ">
            <div className="col-lg-2  col-md-2 py-2  btn_sca  ">
              <div className="flex items-center gap-2 ">
                <span className="bg-blue-500 p-2 ">
                  <IoMenuSharp />
                </span>
                <button className="dark:text-white">toggle Button</button>
              </div>
              <br />
              <br />

              <div className="flex items-center gap-2">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />{" "}
                <h5 className="dark:text-white">Live Scanners</h5>
              </div>

              <br />
              <br />

              <div className="flex items-center gap-2">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />
                <h5 className="dark:text-white">EOD Scanners</h5>
              </div>

              <br />
              <br />

              <div className="flex items-center gap-2">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />{" "}
                <h5 className="dark:text-white">Premium Scanners</h5>
              </div>
              <br />
              <br />

              <div className="flex items-center gap-2 ">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />{" "}
                <h5 className="dark:text-white">Scanners 4</h5>
              </div>
            </div>

            <div className="col-lg-10 col-md-10 col-12 ps-6 mt-6 lg:ps-16  feature_div">
              <p className=" text-sm flex items-center mb-2 dark:text-white">
                {" "}
                Stock passesall of the below filters in
                <select
                  id="stock-list"
                  className="  dark:bg-black  border-1 mx-2 py-1  border-blue-700 focus:outline-none  text-sm block "
                  value={selectedSegment}
                  onChange={handleSegmentChange}
                >
                  {segments.map((segment) => (
                    <option key={segment} value={segment}>
                      {segment}
                    </option>
                  ))}
                </select>
                segment:{" "}
              </p>

              <p className=" text-sm flex items-center mb-2 dark:text-white">
                {" "}
                Daily Valume Greater than Number
                <input
                  type="number"
                  className="dark:bg-black  border border-blue-600 w-24 ml-2"
                />
              </p>

              <p className="text-sm flex items-center mb-2 dark:text-white">
                {" "}
                Daily Close Greater than Number
                <input
                  type="number"
                  className="dark:bg-black  border border-blue-600 w-24  ml-2"
                />
              </p>

              <p className="text-sm flex items-center mb-2 dark:text-white">
                {" "}
                Monthly Rsi (14) Close Greater than equal to Number
                <select
                  id="stock-list"
                  className="  dark:bg-black  border-1 mx-2 py-1  border-blue-700 focus:outline-none  text-sm block "
                  value={selectedSegment}
                  onChange={handleSegmentChange}
                >
                  {segments.map((segment) => (
                    <option key={segment} value={segment}>
                      {segment}
                    </option>
                  ))}
                </select>
              </p>

              <p className="text-sm flex items-center mb-2 dark:text-white">
                {" "}
                Daily Close Greater than equal to 1 day age
                <select
                  id="stock-list"
                  className="  dark:bg-black  border-1 mx-2 py-1  border-blue-700 focus:outline-none  text-sm block "
                  value={selectedSegment}
                  onChange={handleSegmentChange}
                >
                  {segments.map((segment) => (
                    <option key={segment} value={segment}>
                      {segment}
                    </option>
                  ))}
                </select>
              </p>

              <p className="text-sm flex items-center mb-2 dark:text-white">
                Daily Greater than equal to 1 day ago High{" "}
              </p>

              {/* Table */}

              <div className="row table_bot_div mt-6 ">
                <table>
                  <thead>
                    <tr>
                      <th className="dark:text-white"> Stock Name </th>
                      <th className="dark:text-white">Sector</th>
                      <th className="dark:text-white">LTP</th>
                      <th className="dark:text-white">52W High</th>
                      <th className="dark:text-white"> 52W Low</th>
                      <th className="dark:text-white">Volume</th>
                      <th className="dark:text-white"> Day Change % </th>
                      <th className="dark:text-white">First appearde on </th>
                      <th className="dark:text-white">Dividend date</th>
                      <button className="orderr_btn">Order</button>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="dark:text-white">TCS</td>
                      <td className="dark:text-white">IT</td>
                      <td className="dark:text-white">1000</td>
                      <td className="dark:text-white">1200</td>
                      <td className="dark:text-white">700</td>
                      <td className="dark:text-white">100000</td>
                      <td className="dark:text-white">1% </td>
                      <td className="dark:text-white">09:20</td>
                      <td className="dark:text-white">20/Dec/2023</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td></td>
                    </tr>

                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>

                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td></td>
                    </tr>

                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Scanner;

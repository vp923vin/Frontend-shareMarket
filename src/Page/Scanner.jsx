import React, { useState } from "react";
import "../Page/scanner.css";

import { IoMenuSharp } from "react-icons/io5";
import { Base_url } from "../components/context/config.url";
import axios from "axios";

function Scanner() {


  const [selectedSegment, setSelectedSegment] = useState("Nifty 500/Futures");

  const [openvalueGraternumber, setopenvalueGraternumber] = useState("");
  const [closeGraternumber, setcloseGraternumber] = useState("");
  const [monthlynumber, setmonthlynumber] = useState("");

  const [Market_data, setMarket_data] = useState([]);

  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const data = [...Market_data];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startindex = (currentPage - 1) * itemsPerPage;

  const currentItems = data.slice(startindex, startindex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
  };

  const GetStockData = async () => {
    const payload = {
      index: "Nifty 50",
      volume_threshold: 500000,
      rsi_threshold: 60,
      close_number: 50,
    };

    try {
      const response = await axios.post(`${Base_url}get-ls1-data`, payload, {
        headers: {
          "Content-Type": "application/json", // Corrected the Content-Type
        },
      });

      setMarket_data(response.data.data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="scanner  text-black dark:text-white dark:bg-black  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              <h5 className="scan_h dark:text-white">Scanner</h5>
            </div>
            <div className="col-lg-7 col-md-7 col-12">
              <h5 className="scan_h dark:text-white">Scanner name</h5>
              <p className="para_scan">
                Scanner Description: A stock scanner,also known as a stock
                screener,is a tool or application used by traders and investors
                to filter and identify stocs that meet specific criteria of
                paramiters
              </p>
            </div>

            <div className="col-lg-2 col-md-2 col-12">
              <h6 className="date_as dark:text-white">
                Market segments as on Date-time
              </h6>
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
            <button className="add_to_bullis dark:text-white">
              Add to playbook
            </button>
            <button className="add_to text-red-600">
              {" "}
              <span className="text-green-400">Bullish/</span>Bullish
            </button>
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
                  value={openvalueGraternumber}
                  onChange={(e) => setopenvalueGraternumber(e.target.value)}
                />
              </p>

              <p className="text-sm flex items-center mb-2 dark:text-white">
                {" "}
                Daily Close Greater than Number
                <input
                  value={closeGraternumber}
                  onChange={(e) => setcloseGraternumber(e.target.value)}
                  type="number"
                  className="dark:bg-black  border border-blue-600 w-24  ml-2"
                />
              </p>

              <p className="text-sm flex items-center mb-2 dark:text-white">
                {" "}
                Monthly Rsi (14) Close Greater than equal to Number
                <input
                  value={monthlynumber}
                  type="number"
                  className="dark:bg-black  border border-blue-600 w-24  ml-2"
                  onChange={(e) => setmonthlynumber(e.target.value)}
                />
              </p>

              <p className="text-sm flex items-center mb-2 dark:text-white">
                Daily Greater than equal to 1 day ago High{" "}
              </p>

              <button
                onClick={GetStockData}
                className="bg-blue-600 px-6 py-2 text-white rounded"
              >
                Run Scan
              </button>

              {/* Table */}

              <div className="row  mt-6 ">
                {/* <table>
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
                    {Market_data.length > 0 &&
                      Market_data.map((item) => {
                        return (
                          <tr>
                            <td className="dark:text-white">{item["Stock Name"]}</td>
                            <td className="dark:text-white">{item.Sector}</td>
                            <td className="dark:text-white">{item.LTP}</td>
                            <td className="dark:text-white">{item["52W High"]}</td>
                            <td className="dark:text-white">{item["52W Low"]}</td>
                            <td className="dark:text-white">{item.Volume}</td>
                            <td className="dark:text-white">{item["Day Change %"]} </td>
                            <td className="dark:text-white">{item["First Appeared on"]}</td>
                            <td className="dark:text-white">{item["Dividend Date"]}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table> */}

                <div className="overflow-x-auto">
                  {" "}
                  {/* Enable horizontal scrolling */}
                  <table className="min-w-full divide-y divide-gray-200">
                    {" "}
                    {/* Ensure table stretches to full width */}
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      {" "}
                      {/* Dark mode background */}
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          Stock Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          Sector
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          LTP
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          52W High
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          52W Low
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          Volume
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          Day Change %
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          First Appeared On
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          Dividend Date
                        </th>
                        <th>
                          <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition">
                            Order
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900">
                      {" "}
                      {/* Dark mode for table body */}
                      {data.length > 0 &&
                        currentItems.map((item, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                          >
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item["Stock Name"]}
                            </td>
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item.Sector}
                            </td>
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item.LTP}
                            </td>
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item["52W High"]}
                            </td>
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item["52W Low"]}
                            </td>
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item.Volume}
                            </td>
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item["Day Change %"]}
                            </td>
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item["First Appeared on"]}
                            </td>
                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                              {item["Dividend Date"]}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>









               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Scanner;

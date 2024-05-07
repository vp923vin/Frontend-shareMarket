import React, { useState } from "react";
// import "../Page/scanner.css";
Spinner;
import { Base_url } from "../../components/context/config.url";
import axios from "axios";
import Spinner from "./Spinner";

const Livescaner = () => {
  const [selectedSegment, setSelectedSegment] = useState("Nifty 50");

  const [openvalueGraternumber, setopenvalueGraternumber] = useState(500000);
  const [closeGraternumber, setcloseGraternumber] = useState(50);
  const [monthlynumber, setmonthlynumber] = useState(60);

  const [Market_data, setMarket_data] = useState([]);
  const [loading, setLoading] = useState(false);
  // Logic for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(5);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

  const currentItems = Market_data.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  // Get  data

  const GetStockData = async () => {
    const payload = {
      index: selectedSegment,
      volume_threshold: openvalueGraternumber,
      rsi_threshold: monthlynumber,
      close_number: closeGraternumber,
    };

    console.log(payload, "payload");

    try {

      setLoading(true)

      const response = await axios.post(`${Base_url}get-ls1-data`, payload, {
        headers: {
          "Content-Type": "application/json", // Corrected the Content-Type
        },
      });
      setMarket_data(response.data.data);

      setLoading(false);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 ">
        <p className=" text-sm flex items-center dark:text-white">
          {" "}
          Stock passesall of the below filters in
          <select
            id="stock-list"
            className="  dark:bg-black   bg-gray-50  border-1 mx-2 py-1  rounded pl-2 focus:outline-none  text-sm block "
            value={selectedSegment}
            onChange={handleSegmentChange}
          >
            <option selected value="Nifty 50">
              Nifty 50
            </option>
            {segments.map((segment) => (
              <option key={segment} value={segment}>
                {segment}
              </option>
            ))}
          </select>
          segment
        </p>

        <p className=" text-sm flex items-center  dark:text-white">
          Daily Valume Greater than Number
          <input
            type="number"
            className="dark:bg-black  focus:outline text-center   bg-gray-50 py-1 rounded-lg border-blue-600 w-24 ml-2"
            value={openvalueGraternumber}
            onChange={(e) => setopenvalueGraternumber(e.target.value)}
          />
        </p>

        <p className="text-sm flex items-center  dark:text-white">
          {" "}
          Daily Close Greater than Number
          <input
            value={closeGraternumber}
            onChange={(e) => setcloseGraternumber(e.target.value)}
            type="number"
            className="dark:bg-black    bg-gray-50 py-1  focus:outline text-center  rounded-lg border-blue-600 w-24  ml-2"
          />
        </p>

        <p className="text-sm flex items-center  dark:text-white">
          {" "}
          Monthly Rsi (14) Close Greater than equal to Number
          <input
            value={monthlynumber}
            type="number"
            className="dark:bg-black   bg-gray-50 py-1  focus:outline text-center rounded-lg  border-blue-600 w-24  ml-2"
            onChange={(e) => setmonthlynumber(e.target.value)}
          />
        </p>

        <p className="text-sm flex items-center  dark:text-white">
          
          Daily Greater than equal to 1 day ago High{" "}
        </p>
        <button
          onClick={GetStockData}
          className="bg-blue-600 w-36 px-6 py-2 text-sm text-white rounded"
        >
          Run Scan
        </button>
      </div>

      {/* Table */}

      
      {loading ? (
            <Spinner />
          ) : (
            <>
              <div className="row  mt-6 ">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y bg-gray-50 ">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-950 uppercase tracking-wider dark:text-white">
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
                    <tbody className=" dark:bg-gray-900">
                      {currentItems.length > 0 &&
                        currentItems.map((item, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
            </>
          )}
         

      {currentItems.length > 0 && (
        <>
          <div className="flex justify-center mt-4">
            <nav className="inline-flex">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-l-md"
              >
                Previous
              </button>

              {[currentPage - 1, currentPage, currentPage + 1].map(
                (pageNumber) =>
                  pageNumber > 0 &&
                  pageNumber <=
                    Math.ceil(Market_data.length / propertiesPerPage) && (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`px-4 py-2 ${
                        currentPage === pageNumber
                          ? "bg-gray-300 text-black"
                          : "bg-gray-50 hover:text-white hover:bg-slate-200"
                      } `}
                    >
                      {pageNumber}
                    </button>
                  )
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage ===
                  Math.ceil(Market_data.length / propertiesPerPage)
                }
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-r-md"
              >
                Next
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Livescaner;

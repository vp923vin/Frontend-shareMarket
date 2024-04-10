import React, { useState } from "react";
import "../Page/scanner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMenuSharp } from "react-icons/io5";
function Scanner() {


  const data = [
    {
      label: "Nifty 500/Futures",
      sublabels: ["yes bank", "maharastra"]
    },
    {
      label: "Label 2",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    },
    {
      label: "Label 3",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    },
    {
      label: "Label 4",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    },
    {
      label: "Label 5",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    },
    {
      label: "Label 6",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    },
    {
      label: "Label 7",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    },
    {
      label: "Label 8",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    },
    {
      label: "Label 9",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    },
    {
      label: "Label 10",
      sublabels: ["Sublabel 1", "Sublabel 2"]
    }
  ];


  const [selectedSegment, setSelectedSegment] = useState("Nifty 500/Futures");
  const [inputValue, setInputValue] = useState("");
  const [segments, setSegments] = useState([
    "Nifty 500/Futures",
    "United States",
    "Canada",
    "France",
    "Germany"
  ]);

  const handleSegmentChange = (event) => {
    setSelectedSegment(event.target.value);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleIncrement = () => {

  };

  const handleDecrement = () => {

  };

  return (
    <>
      <section className="scanner">
        <div className="container">
          <div className="row">
            <divv className="col-lg-2 col-md-2 col-12">
              <h5 className="scan_h">Scanner</h5>
            </divv>
            <divv className="col-lg-7 col-md-7 col-12">
              <h5 className="scan_h">Scanner name</h5>
              <p className="para_scan">

                Scanner Description: A stock scanner,also known as a stock
                screener,is a tool or application used by traders and investors
                to filter and identify stocs that meet specific criteria of
                paramiters
              </p>
            </divv>

            <div className="col-lg-2 col-md-2 col-12">
              <h6 className="date_as">Market data as on Date-time</h6>
            </div>
            <div className="col-lg-1 col-md-1 propp">
              <img
                className="imges_proo"
                src="public/images/profilee.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full flex justify-end items-center py-2">
            <button className="add_to"> Bullish/Bearish</button>
            <button className="add_to_bullis">Add to playbook</button>
          </div>

          <div className="row ">

            <div className="col-lg-2  col-md-2 py-2  btn_sca ">


              <div className="flex items-center gap-2 ">
                <span className="bg-blue-500 p-2 "><IoMenuSharp /></span>
                <button>toggle Button</button>
              </div>
              <br />
              <br />

              <div className="flex items-center gap-2">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />{" "}

                <h5>Live Scanners</h5>
              </div>

              <br />
              <br />

              <div className="flex items-center gap-2">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />
                <h5>EOD Scanners</h5>
              </div>

              <br />
              <br />

              <div className="flex items-center gap-2">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />{" "}
                <h5>Premium Scanners</h5>

              </div>
              <br />
              <br />

              <div className="flex items-center gap-2 ">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />{" "}
                <h5>Scanners 4</h5>
              </div>

            </div>

            <div className="col-lg-10 col-md-10 col-12 ps-6 mt-6 lg:ps-16  feature_div">



              <p className="flex items-center mb-2"> Stock passesall of the below filters in
                <select
                  id="stock-list"
                  className="  bg-black border-1 mx-2 py-1  border-blue-700 focus:outline-none  text-sm block "
                  value={selectedSegment}
                  onChange={handleSegmentChange}
                >
                  {data.map(segment => (
                    <option
                      key={segment} value={segment.label}>{segment.label}</option>
                  ))}
                </select>
                segment: </p>


              <p className="flex items-center mb-2"> Daily Valume Greater than Number
                <select
                  id="stock-list"
                  className="  bg-black border-1 mx-2 py-1  border-blue-700 focus:outline-none  text-sm block "
                  value={selectedSegment}
                  onChange={handleSegmentChange}
                >
                  {data.map(segment => (
                    <option
                      key={segment} value={segment.label}>{segment.label}</option>
                  ))}
                </select>
              </p>

              <p className="flex items-center mb-2"> Daily Close Greater than Number
                <select
                  id="stock-list"
                  className="  bg-black border-1 mx-2 py-1  border-blue-700 focus:outline-none  text-sm block "
                  value={selectedSegment}
                  onChange={handleSegmentChange}
                >
                  {data.map(segment => (
                    <option
                      key={segment} value={segment.label}>{segment.label}</option>
                  ))}
                </select>
              </p>

              <p className="flex items-center mb-2"> Monthly Rsi (14) Close Greater than equal  to    Number
                <select
                  id="stock-list"
                  className="  bg-black border-1 mx-2 py-1  border-blue-700 focus:outline-none  text-sm block "
                  value={selectedSegment}
                  onChange={handleSegmentChange}
                >
                  {data.map(segment => (
                    <option
                      key={segment} value={segment.label}>{segment.label}</option>
                  ))}
                </select>
              </p>

              <p className="flex items-center mb-2"> Daily Close Greater than  equal  to 1 day age
                <select
                  id="stock-list"
                  className="  bg-black border-1 mx-2 py-1  border-blue-700 focus:outline-none  text-sm block "
                  value={selectedSegment}
                  onChange={handleSegmentChange}
                >
                  {data.map(segment => (
                    <option
                      key={segment} value={segment.label}>{segment.label}</option>
                  ))}
                </select>
              </p>
          

            {/* Table */}

            <div className="row table_bot_div mt-6 ">
              <table>
                <thead>
                  <tr>
                    <th> Stock Name </th>
                    <th>Sector</th>
                    <th>LTP</th>
                    <th>52W High</th>
                    <th> 52W Low</th>
                    <th>Volume</th>
                    <th> Day Change % </th>
                    <th>First appearde on </th>
                    <th>Dividend date</th>
                    <button className="orderr_btn">Order</button>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TCS</td>
                    <td>IT</td>
                    <td>1000</td>
                    <td>1200</td>
                    <td>700</td>
                    <td>100000</td>
                    <td>1% </td>
                    <td>09:20</td>
                    <td>20/Dec/2023</td>
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


      </section >
    </>
  );
}

export default Scanner;

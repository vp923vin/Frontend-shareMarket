import React, { useState } from "react";
import "../Page/scanner.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Scanner() {
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

          <div className="col-12 button_play">
            <button className="add_to"> Bullish/Bearish</button>
            <button className="add_to_bullis">Add to playbook</button>
          </div>

          <div className="row toggle_bar">
            <div className="col-lg-2 col-md-2 btn_sca ">
              <button>toggle Button</button>
              <br />
              <br />
              <div className="d-flex col-2">
                <img
                  className="scan_img"
                  src="public/images/profilee.png"
                  alt=""
                />{" "}
              </div>
              <h5>Live Scanners</h5>
              <br />
              <br />
              <img
                className="scan_img"
                src="public/images/profilee.png"
                alt=""
              />
              <h5>EOD Scanners</h5>
              <br />
              <br />
              <img
                className="scan_img"
                src="public/images/profilee.png"
                alt=""
              />{" "}
              <h5>Premium Scanners</h5>
              <br />
              <br />
              <img
                className="scan_img"
                src="public/images/profilee.png"
                alt=""
              />{" "}
              <h5>Scanners 4</h5>
            </div>

            <div className="col-lg-10 col-md-10 col-12 feature_div">
              <p className="choose_seg ">Choose segment</p>
              <button className="nifty_btn">Nifty 500/Futures</button>
             
             {/* Table */}

             
              <div className="row table_bot_div">
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

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../Page/tradingmarket.css";
import { useContextApi } from "../components/context/UseContext";

function Tradyportfolio() {
  const { theme } = useContextApi()

  return (
    <>
      <div className={`bacs_clr ${theme}`}>
        <div className="contaner">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-4">
              <button
                type="button"
                class="model_btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add New
              </button>

              {/* <Dropdown className="droo_down">
                <Dropdown.Toggle variant="" id="">
                  Equite/Options
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}

              <Dropdown className="droo_down">
                <Dropdown.Toggle variant="" id="" as="div">
                  Equite/Options
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Enter Form
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <input type="text" Placeholder="enter" />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn_close"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn_save">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-4">
              <button className="report_btn">REPORTS</button>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <button className="my_folio_btn">My Portfolio Summary</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="row table_bot_div">
                <table>
                  <thead>
                    <tr className="tble_row">
                      <th>Entry date</th>
                      <th>Stock</th>
                      <th>Quantity</th>
                      <th>Entry Price</th>
                      <th>LTP</th>
                      <th>Today's gain%</th>
                      <th>Unrealized gain</th>
                      <th>Current Value</th>
                      <th>Exit Price</th>
                      <th>Exit Date</th>
                      <th>Amount Invested</th>
                      <th>Total Days</th>
                      <th>Cash Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_data">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="table_data">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6 inves_terrr">
              <p className="totle_vlubtn" href="">
                Total Invested Value
                <br />
                1,00,000
              </p>
              <br />
              <br />
              <p className="totle_vlubtn" href="">
                Realized gain
                <br />
                50,000
              </p>
              <br />

              <br />
              <p className="totle_vlubtn" href="">
                Unrealized gain
                <br />
                50,000
              </p>
              <br />
              <br />
              <p>Trade</p>
              <img src="public/images/structure.png" alt="" />
            </div>

            <div className="col-lg-2 col-md-2 col-6 inves_terrr">
              <p className="totle_vlubtn" href="">
                Total gain %
                <br />
                20%
              </p>
              <br />
              <br />
              <p className="totle_vlubtn" href="">
                Day Change %<br />
                2%
              </p>
              <br />

              <br />
              <p className="totle_vlubtn" href="">
                Total Trades
                <br />
                Winning/Losing
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tradyportfolio;

import React from "react";
import "./Orderplace.css";
import TradingViewChart from "../components/Chartview";
import Header from "./Header";
function Orderplacetool() {
  return (
    <>
    <Header/>
      <section className="order_tool_first">
        <h5 className="flas_mode">Flash Mode</h5>
        <div className="container-fluid">
          <div className="col-12">
            <div className="row">
              <div class="col-md-6 col-lg-6 col-6">
                Lot Size(50)
                <div className="d-flex">
                  <div className="col-6">
                    <button className="btn_indx">Index</button>
                    <button className="btn_indx">Expire Date</button>
                  </div>
                  <div className="col-6">
                    <button className="btn_setlot">Set Lot Size</button>
                    <button className="btn_setlot">KILL SWITCH</button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_strike">
                      <b className="bold">CE</b> Call strike selection
                      <br />
                      (Dropdown with search)
                    </button>
                    <button className="btn_ltp">LTP</button>
                  </div>
                  <div className="col-6 buyy ">
                    <button className="btn_putstrike">
                      <b className="bold">PE</b> Put strike selection
                      <br />
                      (Dropdown with search)
                    </button>
                    <button className="btn_ltp">LTP</button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_setlot">BUY CE</button>
                    <button className="btn_indx">SELL SE</button>
                  </div>
                  <div className="col-6 buyy">
                    <button className="btn_setlot">BUY PE</button>
                    <button className="btn_indx">SELL PE</button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_setlot">Limit</button>
                    <button className="btn_indx">Limit</button>
                  </div>
                  <div className="col-6 buyy">
                    <button className="btn_setlot">Limit</button>
                    <button className="btn_indx">Limit</button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_trail_strt">Start Trail(+1)</button>
                    {/* <button className="btn_indx">Limit</button> */}
                  </div>

                  <div className="col-6 buyy">
                    {/* <button className="btn_trail_strt">Limit</button> */}
                    <button className="btn_indx_limit">Limit</button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_setlot">Turn of SL</button>
                    {/* <button className="btn_indx">Limit</button> */}
                  </div>

                  <div className="col-6 byy">
                    {/* <button className="btn_trail_strt">Limit</button> */}
                    <button className="btn_indx_limit">Limit</button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_setlot">Turn of Target</button>
                    {/* <button className="btn_indx">Limit</button> */}
                  </div>

                  <div className="col-6 buyy">
                    {/* <button className="btn_trail_strt">Limit</button> */}
                    <button className="btn_indx_limit22">
                      Default Target-20
                    </button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_setlot">Partial Exit</button>
                    {/* <button className="btn_indx">Limit</button> */}
                  </div>

                  {/* <div className="text-center"> */}
                  <button className="Realize_btn">
                    Realized P&L
                    <br />
                    <b>1000</b>
                    <br />
                    <b>-1000</b>
                    <br />
                    <p className="broker">
                      Broker Name:
                      <br />
                      Net A\C balance:
                    </p>
                  </button>

                  {/* </div> */}

                  <div className="col-4 buyy">
                    {/* <button className="btn_trail_strt">Limit</button> */}
                    <button className="btn_default">Default Target-20</button>
                  </div>
                </div>
                <div className="message">
                  <p className="commit_p">
                    Symbol name | Net Qty | Avg Price | LTP | Buy Price | Sell
                    Price | PNL{" "}
                  </p>

                  <div className="d-flex">
                    <div className="col-6 notiii">
                      <button className="notifica_btn">Notification</button>
                      {/* <button className="btn_indx">Limit</button> */}
                    </div>
                    <div className="col-6 order_book">
                      <button className="order_bokbtn">Order Book</button>
                      <button className="Discla_btn">Disclaimer</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* chart */}
              <div className="col-md-6 col-lg-6 col-12">
                <div className="chart">
                  <TradingViewChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Orderplacetool;

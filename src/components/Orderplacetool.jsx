import React, { useState } from "react";
import "./Orderplace.css";
import TradingViewChart from "../components/Chartview";
import { useContextApi } from "./context/UseContext";
import FlashTradeview from "./Stockchart/FlashTradeview";

function Orderplacetool() {
  const { theme } = useContextApi()
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <section className={`order_tool_first dark:text-white  dark:bg-black  `}>
        <div className="row">
          <div className="col-12 col-lg-2 col-md-2">
            <h5 className="flas_mode">Flash Mode</h5>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <button className="home_bottn">Home</button>
          </div>
          <div className="col-lg-2 col-md-2 col-12">
            <img className="home_img" src="public/images/profilee.png" alt="" />
          </div>
        </div>
        <button className="home_btn">Home</button>
        <div className="container-fluid">
          <div className="col-12">
            <div className="row">
              <div class="col-md-6 col-lg-6 col-12 white_bor">
                Lot Size(50)
                <div className="d-flex">
                  <div className="col-6">
                    <button className="btn_indx1">Index</button>
                    <button className="btn_indx1">Expire Date</button>
                  </div>
                  <div className="col-6">
                    <button className="btn_setlot">Set Lot Size</button>
                    <button className="btn_setlot1">KILL SWITCH</button>
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
                      <b className="bold2">PE</b> Put strike selection
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
                    <button className="btn_setlot_limit">Limit</button>
                    <button className="btn_setlot_limit44">Limit</button>
                  </div>
                  <div className="col-6 buyy">
                    <button className="btn_setlot_limit">Limit</button>
                    <button className="btn_setlot_limit44">Limit</button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_trail_strt">Start Trail(+1)</button>
                    {/* <button className="btn_indx">Limit</button> */}
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_setlot33">Turn of SL</button>
                    {/* <button className="btn_indx">Limit</button> */}
                  </div>

                  <div className="col-6 d-flex buyy22">
                    <button className=" btn_trail_strt22" onClick={increment}>
                      +
                    </button>
                    <p className=" countting"> {count}</p>
                    <button className="btn_indx_limit33" onClick={decrement}>
                      -
                    </button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_setlot3333">Turn of Target</button>
                    {/* <button className="btn_indx">Limit</button> */}
                  </div>
                  <div className="col-6 d-flex buyy22">
                    <button className=" btn_trail_strt22" onClick={increment}>
                      +
                    </button>
                    <p className=" countting"> {count}</p>
                    <button className="btn_indx_limit33" onClick={decrement}>
                      -
                    </button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6 buyy">
                    <button className="btn_setlot_exit">Partial Exit</button>
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

                  <div className="col-4 buyy22">
                    {/* <button className="btn_trail_strt">Limit</button> */}
                    <button className="btn_default">Default Target-20</button>
                    <br />
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
                  <FlashTradeview />
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

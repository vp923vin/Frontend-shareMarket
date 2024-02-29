import React from "react";
import "../Page/structure.css";
import { useContextApi } from "../components/context/UseContext";

function Structuremarket() {
  const { theme } = useContextApi()

  return (
    <>
      <section className={`structure ${theme}`}>
        {/* <p className="data">Market Data as on Date</p> */}
        <div><img className="struct_img" src="public/images/profilee.png" alt="profile" /></div>

        <div className="container">
          <div className="row col-12">
            <div className="col-lg-5 col-md-5 col-5">
              <p className="p_mrkt">Market Structure</p>
              <img src="public/images/structure.png" alt="" />
              <div className="d-flex yellow_bor">
                <div className="yello_vorrrn">
                  <p className="text-center gainers_p ">Gainers</p>
                </div>
                <div className="green_bor_redd">
                  <p className="text-center gainers_p">Losers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-2">
              <p> Nifty - Advance/Decline</p>
              <div className="advance_border">
                <div className="d-flex bor">
                  <div className="vorrr">31</div>
                </div>
              </div>

              <div className="advance_border222">
                <div className="d-flex bor">
                  <div className="vorrr">31</div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-5">

              {/* <div><img className="struct_img" src="public/images/profilee.png" alt="profile" /></div> */}

              <p>Market Sentiments</p>
              <div className="box_bullish">
                <p>
                  RSI - Bullish/Bearish
                  <br />
                  ADX - Bullish/Bearish
                  <br />
                  50 EMA - if above bullish - if below 200 EMA -strong
                  <br />
                  bearish
                  <br />
                  3 Days high break - Strong Bullish
                  <br />
                  3 Days low break - Strong bearish
                  <br />
                  Previous 5 Days high break - Extreme Bullish
                  <br />
                  Previous 5 Days low break - Extreme Bearish
                </p>
              </div>

              <div className="box_bullish2222">
                <p>
                  RSI - Bullish/Bearish
                  <br />
                  ADX - Bullish/Bearish
                  <br />
                  50 EMA - if above bullish - if below 200 EMA -strong
                  <br />
                  bearish
                  <br />
                  3 Days high break - Strong Bullish
                  <br />
                  3 Days low break - Strong bearish
                  <br />
                  Previous 5 Days high break - Extreme Bullish
                  <br />
                  Previous 5 Days low break - Extreme Bearish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Structuremarket;

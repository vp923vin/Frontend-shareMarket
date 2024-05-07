import React from "react";
import "../Page/Dashboard.css";
import Chartview from "../components/Chartview";
import Header from "../components/Header";
import Progressbar from "../components/Progressbar";
import { useContextApi } from "../components/context/UseContext";
import BarChart from "../components/Stockchart/BarChart";
import TradingViewWidget from "../components/Stockchart/TradingViewWidget";

function Dashboard() {

  const { theme } = useContextApi();

  return (
    <>
      <div className="  dark:text-white dark:bg-[#212529] h-screen flex justify-center    ">
        <div>
          <Header />

       

          <section className="container py-1">
            <div className="grid grid-cols-1 lg:grid-cols-[45%_auto] md:gap-1  ">
              <div>
                <Chartview />
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-2 ">
                  <div className="">
                    {/* <img
                    className="candle_img"
                    src="./images/chart-candle.png"
                    alt=""


                      
                  /> */
                  }

                    {/* <h2 className="text-center text-sm ">
                      FII & DII combined activity for the last 7 days
                    </h2> */}
                    {/* <FIIDIIChart data={data} options={options} />
                     */}

                    <BarChart />

                  </div>
                  <div className="border-2 border-red-600 dark:border-blue-600  p-4 dark:text-white">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    </p>
                    <p>
                      Velit quis enim omnis ut eaque veniam illum doloribus
                      obcaecati saepe culpa?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[45%_auto] mt-2 md:gap-8 ">
              <div className="mt-3">
                {/* <img
                className="img-fluid"
                src="./images/tradchart_img.png"
                alt=""
              /> */}
                <Chartview />
              </div>
              <div className="">
                <h2 className="text-center text-sm mb-3 ">
                  Super strong sector{" "}
                </h2>
                <Progressbar />
              </div>
            </div>
          </section>

          <div className="container mt-1  ">
            <TradingViewWidget />
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;

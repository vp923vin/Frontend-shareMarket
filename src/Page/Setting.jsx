import React from "react";
import "../Page/setting.css";
import { useState } from "react";
import { useContextApi } from "../components/context/UseContext";
import { Link } from "react-router-dom";
import BrokerForm from "../components/setting/BrokerForm";


function LiveTradeSwitchCheckbox(props) {

  return (
    <div className="form-check form-switch" >
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}


function PaperTradeSwitchCheckbox(props) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}


function Setting(props) {

  const { theme } = useContextApi();
  const [liveTradeChecked, setLiveTradeChecked] = useState(false);
  const [paperTradeChecked, setPaperTradeChecked] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleLiveTradeChange = (e) => {
    setLiveTradeChecked(e.target.checked);
    // If Live Trade is checked, uncheck Paper Trade
    if (e.target.checked) {
      setPaperTradeChecked(false);
    }
  };

  const handlePaperTradeChange = (e) => {
    setPaperTradeChecked(e.target.checked);

    if (e.target.checked) {
      setLiveTradeChecked(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const handleSave = () => {
    console.log('Broker details saved:', {
      selectedBroker,
      apiKey,
      apiSecret,
      brokerId
    });
    toggleModal(); // Close the modal after saving
  };




  return (
    <>
      <div className={`clas h-screen  dark:text-white  dark:bg-gray-900 `}>
        <section className="class">
          <div className="container">
            <div className="row">
              <div className="flex  justify-between items-center">
                <div className="flex gap-2 ">
                  <Link className="px-3 py-2 bg-blue-900 text-white rounded-sm">Application Setting</Link>
                  <Link to="/profile" className="px-4 py-2 bg-blue-900 text-white  rounded-sm ">Profile Setting</Link>

                </div>

             
                  <div className="flex items-center gap-4 ">
                    <Link
                      to="/dashboard"
                      className="bg-blue-900 h-9 rounded-sm text-sm flex items-center px-3 text-white   "
                    >
                      Home
                    </Link>

                    <img
                      className="setting_pro_img"
                      src="public/images/profilee.png"
                      alt=""
                    />
                 
                </div>




              </div>

            </div>
          </div>
        </section>

        {/* section header close */}
        <section className="setting_sec shadow-lg">
          <div className="container">
            <div className="row col-12">
              <div className="col-lg-6 col-md-6 col-12 live_tr">
                <LiveTradeSwitchCheckbox
                  className="live_tr"
                  id="liveTradeflexSwitchCheckDefault"
                  label="Live Trading"
                  checked={liveTradeChecked}
                  onChange={handleLiveTradeChange}
                />

                <div className="col-12 d-flex">
                  <PaperTradeSwitchCheckbox
                    className="paper_tr"
                    id="paperTradeflexSwitchCheckDefault"
                    label="Paper Trade"
                    checked={paperTradeChecked}
                    onChange={handlePaperTradeChange}
                  />
                  <button className="bg-blue-900 text-white px-2 rounded-sm text-sm">
                    Virtual Money Reset
                  </button>
                </div>

                <div className="d-flex">
                  <div className="col-6 max_day">
                    <p>Maximum Loss for the day</p>
                    <button className="rs_btn">-5000</button>
                  </div>
                  <div className="col-6 max_day">
                    <p className="atm_para">
                      Defaul Call and Put Strike Selection
                    </p>
                    <button className="btn_atm">ATM</button>
                    <button className="btn_itm">+ITM</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 main_div">
                <p className="broker_p">Broker configuration window</p>
                <div className="row main_div_broker bg-gray-100 px-2">
                  <div className="col-6 first_col">
                    <div className="row">
                      <div className="col-6">
                        <p>Broker Name :</p>
                        <p>Login Id :</p>

                        <p>Api Id :</p>
                      </div>

                      {/* <div className="col-6 user_12">
                        <p>User</p>
                        <br />
                        <p>123</p>
                        <br />
                        <p>756653</p>
                      </div> */}
                    </div>
                  </div>

                  <div className="col-6 sec_broker_col">
                    <div className="row">
                      <div className="col-6">
                        <p>Connection Name :</p>
                        <p>Details xxx :</p>
                        <p>Details xxxx :</p>
                      </div>
                      <br />

                      {/* <div className="col-6">
                        <p>User</p>
                        <br />
                        <p>123</p>
                        <br />
                        <p>756653</p>
                      </div> */}
                      <div className="  flex justify-end ">
                        <button className="bg-green-500 hover:bg-green-600 text-white  px-2 py-1 rounded-sm flex justify-end">Save Broker</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-gray-50 py-2 mx-2">
          <div class="">

            <div className="">
              <div className="flex gap-5 px-2 ">

                <table className=" divide-y bg-gray-50 dark:text-white  dark:bg-gray-900  ">
                  <thead className="bg-blue-300  dark:text-white  dark:bg-gray-900 ">
                    <tr className="tble_row">
                      <th> Broker</th>
                      <th>Broker Id</th>
                      <th>Connection Name</th>
                      <th>First entry on</th>
                      <th>Last token created</th>
                      <th>Generate new token</th>
                      <th>Connection status</th>
                    </tr>
                  </thead>

                  <tbody className="">
                    <tr className="table_setting">
                      <td>Kotak</td>
                      <td>User****</td>
                      <td>KotakAccount1</td>
                      <td>1/12/2023</td>
                      <td>10/12/2023</td>
                      <td><button onClick={toggleModal} className="bg-blue-900 text-white text-sm font-semibold py-1.5 px-3 rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Create New Broker
                      </button>

                      </td>
                      <td className="text-red-500">Running/Stopped</td>
                    </tr>

                  </tbody>
                </table>
                <div className="flex  h-10">
                  <button class="bg-green-500 px-3 rounded-sm py-1 text-white">Start</button>
                  <button class="bg-red-500 px-3 rounded-sm py-1 text-white">Stop</button>
                  <button class="bg-yellow-400 px-3 rounded-sm py-1 text-white">Delete</button>

                </div>
              </div>
            </div>


          </div>

          < BrokerForm
            toggleModal={toggleModal}
            handleSave={handleSave}
            isModalOpen={isModalOpen}
          />



        </section>
      </div>
    </>
  );
}

export default Setting;

import React from "react";
import "../Page/setting.css";
import { useContextApi } from "../components/context/UseContext";


function SwitchCheckbox(props) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={props.id}
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

function Setting(props) {

  const { theme } = useContextApi()
  return (
    <>
      <div className={`clas ${theme}`}>
        <section className="class">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <button className="appli_btn">Application Setting</button>
                <button className="prosetting_btn">Profile Setting</button>
                <img
                  className="setting_pro_img"
                  src="public/images/profilee.png"
                  alt=""
                />
              </div>
              {/* <div className="col-lg-2 col-md-2 col-12">
          <img className="setting_pro_img" src="public/images/profilee.png" alt="" />
          </div> */}
            </div>
          </div>
        </section>

        {/* section header close */}
        <section className="setting_sec">
          <div className="container">
            <div className="row col-12">
              <div className="col-lg-6 col-md-6 col-12 live_tr">
                <SwitchCheckbox
                  className="live_tr"
                  id="flexSwitchCheckDefault"
                  label="Live Trading"
                />

                <div className="col-12 d-flex">
                  <SwitchCheckbox
                    className="paper_tr"
                    id="flexSwitchCheckDefault"
                    label="Paper Trade"
                  />
                  <button className="money_reset_btn">
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

              {/* <div className="col-lg-6 col-md-6 col-12 div_form">
             
                <div className="col-6">

                  <p>Broker Name :</p>
                  <p>Login ID:</p>
                  <p>API ID : </p>
                </div>
                <div className="col-6">
                  <p>Connection Name :</p>
                  <p>Details xxx:</p>
                  <p>Details xxxx:</p>
                  <br/>
                  <button className="save_broker_btn">Save Broker</button>
                </div>
<br/>
              
              </div> */}

              <div className="col-lg-6 col-md-6 col-12 main_div">
                <p className="broker_p">Broker configuration window</p>
                <div className="row main_div_broker">
                  <div className="col-6 first_col">
                    <div className="row">
                      <div className="col-6">
                        <p>Broker Name :</p>
                        <p>Login Id :</p>
                        <br />
                        <p>Api Id :</p>
                      </div>

                      <div className="col-6 user_12">
                        <p>User</p>
                        <br />
                        <p>123</p>
                        <br />
                        <p>756653</p>
                      </div>
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

                      <div className="col-6">
                        <p>User</p>
                        <br />
                        <p>123</p>
                        <br />
                        <p>756653</p>
                      </div>
                      <div className="col-6 save_usbtn">
                        <button className="save_broker_btn">Save Broker</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="third_setting">
          <div class="container">
            <div class="row col-12">
              <div className="row table_bot_div">
                <table>
                  <thead>
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

                  <tbody>
                    <tr className="table_setting">
                      <td>Kotak</td>
                      <td>User****</td>
                      <td>KotakAccount1</td>
                      <td>1/12/2023</td>
                      <td>10/12/2023</td>
                      <td>Create New Token</td>
                      <td>Running/Stipped</td>
                    </tr>
                    <tr className="table_setting">
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
          </div>
        </section>
      </div>
    </>
  );
}

export default Setting;

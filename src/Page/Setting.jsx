import React from "react";
import "../Page/setting.css";
import Header from "../components/Header";

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
  return (
    <>
    <Header/>
      <div className="clas">
        <header className="bg-dark text-light head_sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-linkk text-light" href="#">
                      Application Setting
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-linkk text-light" href="#">
                      Profile Setting
                    </a>
                  </li>
                </ul>
              </div>

             
            </div>
          </div>
        </header>
        {/* section header close */}
        <section className="setting_sec">
          <div className="container">
            <div className="row col-12">
              <div className="col-lg-6 col-md-6 col-6 live_tr">
                <SwitchCheckbox
                  className="live_tr"
                  id="flexSwitchCheckDefault"
                  label="Live Trading"
                />

                <div className="col-6 d-flex">
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
                    <p>Defaul Call and Put Strike Selection</p>
                    <button className="btn_atm">ATM</button>
                    <button className="btn_itm">+ITM</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 div_form">
                {/* <h5>Beoker Configuration Window</h5> */}
                <div className="col-6">
                  <p>Broker Name :</p>
                  <p>Login ID:</p>
                  <p>API ID : </p>
                </div>
                <div className="col-6">
                  <p>Connection Name :</p>
                  <p>Details xxx:</p>
                  <p>Details xxxx:</p>
                </div>

                <button>Save Broker</button>
              </div>
            </div>
          </div>
        </section>

        <section className="third_setting">
          <div class="container">
            <div class="row col-12">
        
            <div class="col-sm">Broker</div>
            <div class="col-sm">Broker Id</div>
              <div class="col-sm">Connection Name</div>
              <div class="col-sm">First entry on</div>
              <div class="col-sm">Last token created</div>
              <div class="col-sm">Generate new token</div>
              <div class="col-sm">Connection status</div>
            </div>
            <div class="row col-12">
        
        <div class="col-sm">Kotak</div>
        <div class="col-sm">User***</div>
          <div class="col-sm">KotakAccount1</div>
          <div class="col-sm">1/12/2023</div>
          <div class="col-sm">10/12/2023</div>
          <div class="col-sm">Created new token</div>
          <div class="col-sm">Running/Stopped</div>
        </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default Setting;

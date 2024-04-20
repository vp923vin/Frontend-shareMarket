import React from "react";
// import Header from "../components/Header";-
import "../Page/Profile.css";
import { useContextApi } from "../components/context/UseContext";
import { Link } from "react-router-dom";


function SwitchCheckbox(props) {
  return (
    <div className="form-check form-switch checkBox-in">
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

function Profile(props) {

  const { theme } = useContextApi()


  return (
    <>
      <section className={`profile_page relative ${theme}`}>
        <div className="container">
          <div className="row align-items-center input_forms_row">
            <div className="col-lg-2">
              <img src="public/images/profilee.png" alt="profile" />
            </div>
            <div className="col-12 col-lg-8">
              <form action="" className="profile-form">
                <div className="row">
                  <div className="user">
                    <input type="text" name="user" placeholder="User Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-4 col-md-4  px-0">
                    <div className="user">
                      <input
                        type="number"
                        name="user"
                        placeholder="Whatsapp Number"
                      />
                    </div>
                    <div className="user">
                      <input
                        type="text"
                        name="user"
                        placeholder="Current Password"
                      />
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-md-4">
                    <div className="user">
                      <input
                        type="text"
                        name="user"
                        placeholder="Email"
                      />
                    </div>
                    <div className="user">
                      <input
                        type="password"
                        name="user"
                        placeholder="New Password"
                      />
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-md-4">
                    <div className="user">
                      <input
                        type="text"
                        name="user"
                        placeholder="City (Search With Country)"
                      />
                    </div>
                    <div className="user">
                      <input
                        type="password"
                        name="user"
                        placeholder="Confirm New Password"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-2">
              <p className="my_plan">My Plan validity deatils</p>
            </div>
          </div>

          {/* <div className=" button_off mt-5"> */}
          <div className="row button_off">
            <div className="col-sm-5">
              <SwitchCheckbox
                className="live_tr"
                id="flexSwitchCheckDefault"
                label="Change to dark theme/Change to light theme"
              />
            </div>
            <div className="col-sm-5 checkBox-btn2">
              <SwitchCheckbox
                className="live_tr"
                id="flexSwitchCheckDefault"
                label="Disable the scroll on dashboard"
              />
            </div>
          </div>
        {/* </div> */}

        <div className="container footer-menu">
          <div className="menu">
            <ul>
              <li>My Referral</li>
              <li>Help</li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="">Feedback</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>


        </div>

        {/* <div className="container button_off dark">
          <div className="row pt-5 ">
            <div className="col-6">
              <SwitchCheckbox
                className="live_tr"
                id="flexSwitchCheckDefault"
                label="Change to dark theme/Change to light theme"
              />
            </div>
            <div className="col-6">
              <SwitchCheckbox
                className="live_tr"
                id="flexSwitchCheckDefault"
                label="Disable the scroll on dashboard"
              />
            </div>
          </div>
        </div>

        <div className="container footer-menu dark">
          <div className="menu">
            <ul>
              <li>My Referral</li>
              <li>Help</li>
              <li>About Us</li>
              <li>Feedback</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div> */}

      </section>
    </>
  );
}

export default Profile;

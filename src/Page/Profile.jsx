import React from "react";
// import Header from "../components/Header";-
import "../Page/Profile.css";
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

function Profile(props) {

 const {theme}= useContextApi()


  return (
    <>
      <section className={`profile_page h-screen relative ${theme}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <img src="public/images/profilee.png" alt="profile" />
            </div>
            <div className="col-12 col-lg-8 col-md-8">
              <form action="">
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
            <div className="col-2">
              <p className="my_plan">My Plan validity deatils</p>
            </div>
          </div>
        </div>

        <div className="container button_off">
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

        <div className="container absolute bottom-8 ">
          <div className="menu">
            <ul>
              <li>My Referral</li>
              <li>Help</li>
              <li>About Us</li>
              <li>Feedback</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

      </section>
    </>
  );
}

export default Profile;

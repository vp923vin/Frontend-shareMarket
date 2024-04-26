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
  const { theme, toggleTheme } = useContextApi();

  return (
    <>
      <section
        className={`profile_page relative  dark:text-white dark:bg-[#212529]  `}
      >
        <div className="container">
          <div className="row align-items-center input_forms_row">
            <div className="col-lg-2">
              <img src="public/images/profilee.png" alt="profile" />
            </div>
            <div className="col-12 col-lg-8 mt-2 lg:mt-0">
              <form action="" className="profile-form">
                <div className="row">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="border-2  w-full sm:w-auto border-gray-500 focus:outline-slate-700 dark:border-blue-700 px-3.5 lg:px-[2.2rem]  bg-transparent py-1.5 "
                      name=""
                      placeholder=" Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-3 sm:gap-4">
                  <div className=" mb-4">
                    <input
                      className="border-2 w-full border-gray-500 focus:outline-slate-700 dark:border-blue-700 px-3.5 bg-transparent py-1.5 "
                      type="number"
                      name=""
                      placeholder="Whatsapp Number"
                    />
                  </div>
                  <div className="">
                    <input
                      className="border-2 border-gray-500 w-full focus:outline-slate-700 dark:border-blue-700 px-3.5 bg-transparent py-1.5 "
                      type="text"
                      name=""
                      placeholder="Current Password"
                    />
                  </div>

                  <div className="">
                    <input
                      className="border-2 w-full border-gray-500 focus:outline-slate-700 dark:border-blue-700 px-3.5 bg-transparent py-1.5 "
                      type="text"
                      name=""
                      placeholder="Email"
                    />
                  </div>
                  <div className="">
                    <input
                      className="border-2  w-full border-gray-500 focus:outline-slate-700 dark:border-blue-700 px-3.5 bg-transparent py-1.5 "
                      type="password"
                      name=""
                      placeholder="New Password"
                    />
                  </div>

                  <div className="">
                    <input
                      className="border-2 w-full border-gray-500 focus:outline-slate-700 dark:border-blue-700 px-3.5 bg-transparent py-1.5 "
                      type="text"
                      name=""
                      placeholder="City (Search With Country)"
                    />
                  </div>
                  <div className="">
                    <input
                      className="border-2 w-full border-gray-500 focus:outline-slate-700 dark:border-blue-700 px-3.5 bg-transparent py-1.5 "
                      type="password"
                      name=""
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-2">
              <p className="my_plan border-2 border-gray-500 focus:outline-slate-700 dark:border-blue-700  ">
                My Plan validity deatils
              </p>
            </div>
          </div>

          {/* <div className=" button_off mt-5"> */}
          <div className="row button_off">
            <div className="col-sm-5">
              <SwitchCheckbox
                id="themeSwitch"
                checked={theme === "dark"}
                onChange={toggleTheme}
                label={
                  theme === "light"
                    ? "Change to dark theme"
                    : "Change to light theme"
                }
              />
            </div>
            <div className="col-sm-5 checkBox-btn2">
              <SwitchCheckbox
                className="live_tr"
                id="flexSwitchCheckDefault"
                label=" Diasable the scroll on dashboard "
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
                  <Link to="/feedback">Feedback</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;

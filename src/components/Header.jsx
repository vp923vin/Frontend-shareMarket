import React from "react";
import "../components/Header.css";

import { useContextApi } from "./context/UseContext";
import { Link } from "react-router-dom";

function Header() {
  const { handleLogout } = useContextApi();

  return (
    <header class=" head_sec">
      <div class="container">
        <div class="row">
          <div>
            <div class=" flex justify-between items-center ">
              <div>
                <h2>Dashboard</h2>
              </div>
              <div class="dropdown">
                <Link
                  class="btn btn-secondary dropdown-toggle"
                  to="#"
                  role="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-user"></i>
                </Link>
                <ul class="dropdown-menu" aria-labelledby="userDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li onClick={handleLogout}>
                    <Link class="dropdown-item cursor-pointer ">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="">
            <ul class="flex justify-between flex-wrap mt-2 ">
              <li class="nav-item">
                <Link
                  class="nav-link  text-gray-900 hover:text-gray-900 dark:text-white"
                  to="#"
                >
                  {" "}
                  Order placing tool
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link  text-gray-900 hover:text-gray-900 dark:text-white"
                  to="#"
                >
                  {" "}
                  Market structure
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link  text-gray-900 hover:text-gray-900 dark:text-white"
                  to="/scaner"
                >
                  {" "}
                  Scanners
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link  text-gray-900 hover:text-gray-900 dark:text-white"
                  to="/setting"
                >
                  {" "}
                  Settings
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-gray-900 hover:text-gray-900 dark:text-white   "
                  to="#"
                >
                  {" "}
                  Trade Diary
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

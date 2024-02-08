import React from "react";
import "../components/Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BiSolidUser } from "react-icons/bi";
function Header() {
  return (
    <header class="bg-dark text-light head_sec">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  {" "}
                  Order placing tool
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  {" "}
                  Market structure
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  {" "}
                  Scanners
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  {" "}
                  Settings
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  {" "}
                  Trade Diary
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-2 text-md-end mt-2 mt-md-0">
          <BiSolidUser />
            <DropdownButton id="dropdown" title="" > 
            
              <Dropdown.Item href="action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="action-3">Logout</Dropdown.Item>
          
          
            </DropdownButton>
          </div>




        </div>
      </div>
    </header>
  );
}

export default Header;

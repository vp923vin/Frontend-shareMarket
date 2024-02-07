import React from 'react'
import '../components/Header.css'

function Header() {
  return (
    <header class="bg-dark text-light head_sec">
    <div class="container-fluid">
        <div class="row">
            
            <div class="col-md-10">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#"> Order placing tool</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#"> Market structure</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#"> Scanners</a> 

                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">  Settings</a>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#"> Trade Diary</a>

                    </li>
                    
                </ul>
            </div>

           
            <div class="col-md-2 text-md-end mt-2 mt-md-0">
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user"></i> 
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="userDropdown">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header
import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header class="header_wrapper" id="home">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
    
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         
          <i class="fa-solid fa-bars-staggered "></i>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav menu-navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <Link to = "about2" span={true} smooth = {true} className='nav-link'>About </Link>
            </li>
            <li class="nav-item">
            <Link to = "skill" span={true} smooth = {true} className='nav-link'>Skills </Link>
            </li>
            <li class="nav-item">
            <Link to = "project" span={true} smooth = {true} className='nav-link'>Projects </Link>
            </li>
            <li class="nav-item">
            <Link to = "contact" span={true} smooth = {true} className='nav-link'>Contact </Link>
            </li>
            <li class="nav-item nav1">
            <Link to = "contact" span={true} smooth = {true} className='main-btn2'>Hire Me </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header
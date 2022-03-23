import { Link } from 'react-router-dom'
import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {useRef} from "react"
import '../styles/navbar.scss';

export default function Navbar() {
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav');
    }

  return (
    <header>
       <Link to='/' className='navbar-logo'>
       <h3>TRVL</h3>
       <img src={require('../assets/images/globe-3-64 (1).png')}/>
       </Link>
        <nav  ref={navRef}>
            <Link onClick={showNavbar} to='/'>Home</Link>
            <Link onClick={showNavbar} to='/services'>Services</Link>
            <Link onClick={showNavbar} to='/products'>Products</Link>
            <Link onClick={showNavbar} to='/contactUs'>Contact Us</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>

         

    </header>
  )
}


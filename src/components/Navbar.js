import React, { useState } from 'react'
import './Navbar.css'
import { GiCupcake } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [openClose, setOpenClose] = useState(false);

  const navButton = () => {
    setOpenClose(!openClose);
  }

  const closeNav = () => {
    setOpenClose(false);
  }

  return (
    <nav>
        <div className='nav-logo'>
            <h1><GiCupcake />JadeSweet's</h1>
        </div>

        <div className='nav-option'>
            <div className='open-btn'>   
                <button onClick={navButton}>{openClose ? <FaTimes /> : <FaBars />}</button>
            </div>
            <div className={`nav-links ${openClose ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link to='/' onClick={closeNav}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={closeNav}>About</Link>
                    </li>
                    <li>
                        <Link to='/menu' onClick={closeNav}>Menu</Link>
                    </li>
                    <li>
                        <Link to='/contact' onClick={closeNav}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
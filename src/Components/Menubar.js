import React from 'react'
import './Menubar.css'
import { GiCupcake } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

const Menubar = () => {
  return (
    <nav>
        <header>
            <h1><GiCupcake />JadeSweet's</h1>
        </header>
        <div className='navbar'>
            <input type='checkbox' id='check'/>
            <label htmlFor='check' id='checked'><FaBars /></label>
            
        
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'> our Menu</a></li>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        
        </div>
    </nav>
  )
}

export default Menubar
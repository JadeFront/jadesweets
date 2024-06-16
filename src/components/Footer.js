import React from 'react'
import './Footer.css'
import  { Link } from'react-router-dom'
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='suggestion-container'>
                <h1>your suggestions and reviews are appreciated.</h1>
                <div className='suggestion'>
                    <input type='text' placeholder='suggestion or review'/>
                    <button type='submit'>send</button>
                </div>
            </div>

            <div className='navigation-container'>
                <Link to='/'>home</Link>
                <Link to='/menu'>our menu</Link>
                <Link to='/about'>about us</Link>
                <Link to='/contact'>contact</Link>
            </div>

            <div className='social-container'>
                <a href='#'><FaFacebookF /></a>
                <a href='#'><FaInstagram /></a>
                <a href='#'><FaXTwitter /></a>
                <a href='#'><FaThreads /></a>
                <a href='#'><FaTiktok /></a>
            </div>

            <div className='footer-end'>
                <p>Copyright &#169; 2024 JadeSweet's &#124; Powered by JadeFront</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer
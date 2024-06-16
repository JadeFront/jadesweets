import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about'>
      <div className='about-container'>
        <div className='about-grid'>
          <div className='grid-1 grid'></div>
          <div className='grid-2 grid'></div>
          <div className='grid-3 grid'></div>
        </div>

        <div className='about-info'>
          <h5>About</h5>
          <h1>JadeSweet's</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </section>
  )
}

export default About
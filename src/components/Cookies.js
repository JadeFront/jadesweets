import React from 'react'
import './Desserts.css'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Cookies = () => {

    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='product-container'>
        <div className='product'>

            <div className='cookies-container'>
              <h1>JadeSweet's Cookies</h1>
                <div className='cookies-list'>
                    <Carousel responsive={responsive}>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/ChocolateChipCookies.png'/>
                          <p>Chocolate Chip Cookies</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/OatmealRaisinCookies.png'/>
                          <p>Oatmeal Raisin Cookies</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/Gingersnaps.png'/>
                          <p>Gingersnaps Cookies</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/Snickerdoodles.png'/>
                          <p>Snickerdoodles Cookies</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/ButterCookies.png'/>
                          <p>Butter Cookies</p>
                        </div>
                    </div>
                    </Carousel>
                </div>
            </div>

            
        </div>

        <div className='cookies-content'>
              <div className='content'>
                <h1>Sweet treats, unique delights,
                Bite into something extraordinary
                </h1>
                <Link to='/menu'>order</Link>
              </div>
            </div>
    </div>
  )
}

export default Cookies
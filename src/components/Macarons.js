import React from 'react'
import './Desserts.css'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Macarons = () => {

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

            <div className='macarons-container'>
              <h1>JadeSweet's Macarons</h1>
                <div className='macarons-list'>
                    <Carousel responsive={responsive}>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/ChocolateMacarons.png'/>
                          <p>Chocolate Macarons</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/CranberryMacarons.png'/>
                          <p>Cranberry Macarons</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/VanillaMacarons.png'/>
                          <p>Vanilla Macarons</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/PistachioMacarons.png'/>
                          <p>Pistachio Macarons</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/RedVellvetMacarons.png'/>
                          <p>Red Vellvet Macarons</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/PeanutButterMacarons.png'/>
                          <p>Peanut Butter Macarons.png</p>
                        </div>
                    </div>
                    </Carousel>
                </div>
            </div>

            
        </div>

        <div className='macarons-content'>
              <div className='content'>
                <h1>Share love, share macaroons.
                Sweet and delicate, just like you.
                </h1>
                <Link to='/menu'>order</Link>
              </div>
            </div>
    </div>
  )
}

export default Macarons
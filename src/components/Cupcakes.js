import React from 'react'
import './Desserts.css'
import  { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Cupcakes = () => {

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

            <div className='cupcakes-container'>
              <h1>JadeSweet's Cupcakes</h1>
                <div className='cupcakes-list'>
                    <Carousel responsive={responsive}>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/Caramelcupcake.png'/>
                          <p>Caramel Cupcake</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/Chocolatecupcake.png'/>
                          <p>Chocolate Cupcake</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/Redvelvetcupcakes.png'/>
                          <p>Red Velvet Cupcake</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/Mintcupcake.png'/>
                          <p>Mint Cupcake</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item'>
                          <img src='./images/Vanillacupcake.png'/>
                          <p>Vanilla Cupcake</p>
                        </div>
                    </div>
                    </Carousel>
                </div>
            </div>

            
        </div>

        <div className='cupcakes-content'>
              <div className='content'>
                <h1>When you share a cupcake you share love.
                Treat yourself some cupcakes.
                </h1>
                <Link to='/menu'>order</Link>
              </div>
            </div>
    </div>
  )
}

export default Cupcakes
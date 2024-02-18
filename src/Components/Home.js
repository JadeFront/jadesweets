import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'

class Home extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    };
    return (
      <div className='home-container'>
        <div className='home'>
            <p className='logo'>.</p>
            <Slider {...settings}>
            <div className='cookies'>
            </div>
            <div className='macarons'>
            </div>
            <div className='cupcakes'>
            </div>
            </Slider>
        </div>
        
      </div>
    );
  }
}

export default Home;

import React from 'react'
import './Home.css'
import Carousel from '../components/Carousel'
import Macarons from '../components/Macarons';
import Cookies from '../components/Cookies';
import Cupcakes from '../components/Cupcakes';
import Best from '../components/Best';
import { Link } from 'react-router-dom';

const Home = () => {
  const images = [
    './images/cookie.png',
    './images/macaron.png',
    './images/cupcake.png',
  ];
  return (
    <section className='home'>
      <div className='carourel-container'>
        <Carousel images={images} interval={3000} />
      </div>

      <div className='home-introduction'>
        <div className='introduction-container'>
          <h2>Welcome to</h2>
          <h1>JadeSweet's</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis volutpat varius. Sed suscipit orci vel eros consectetur, et dignissim mauris dictum. Etiam suscipit nisl in sodales tristique. Praesent malesuada mi purus, eget feugiat ligula accumsan id.</p>
          <Link to='/about'>Read more</Link>
        </div>
      </div>

      <Macarons />
      <Cookies />
      <Cupcakes />
      <Best />
    </section>
  )
}

export default Home
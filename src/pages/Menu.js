import React from 'react'
import MenuMacarons from '../components/MenuMacarons'
import MenuCookies from '../components/MenuCookies'
import MenuCupcakes from '../components/MenuCupcakes'

const Menu = () => {
  return (
    <section className='menu-wrapper'>
      <MenuMacarons />
      <MenuCookies />
      <MenuCupcakes />
    </section>
  )
}

export default Menu
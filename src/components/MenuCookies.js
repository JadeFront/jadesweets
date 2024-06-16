import React from 'react'
import './Menu.css'

const MenuCookies = () => {
    const menuCookies = [
        {
            image: './images/ButterCookies.png',
            name: 'Butter Cookies',
            price: 13,
        },
        {
            image: './images/ChocolateChipCookies.png',
            name: 'ChocolateChip Cookies',
            price: 16,
        },
        {
            image: './images/Gingersnaps.png',
            name: 'Gingersnaps',
            price: 12,
        },
        {
            image: './images/OatmealRaisinCookies.png',
            name: 'Oatmeal Raisin Cookies',
            price: 13,
        },
        {
            image: './images/Snickerdoodles.png',
            name: 'Snicker Doodles',
            price: 15,
        }
    ]
  return (
    <section className='menu-item'>
        <div className='item-wrapper'>
            <div className='item-title'>
                <h1>Cookies</h1>
            </div>

            <div className='item-card-wrapper'>
                {menuCookies.map((cookies) => (
                    <div className='item-card'>
                        <img src={cookies.image}/>
                        <h1>{cookies.name}</h1>
                        <p>₱ {cookies.price}</p>
                        <button>order</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MenuCookies
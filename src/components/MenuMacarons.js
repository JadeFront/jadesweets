import React from 'react'
import './Menu.css'

const MenuMacarons = () => {
    const menuMacarons = [
        {
            image: './images/ChocolateMacarons.png',
            name: 'Chocolate Macarons',
            price: 15,
        },
        {
            image: './images/CranberryMacarons.png',
            name: 'Cranberry Macarons',
            price: 20,
        },
        {
            image: './images/PeanutButterMacarons.png',
            name: 'Peanut Butter Macarons',
            price: 18,
        },
        {
            image: './images/PistachioMacarons.png',
            name: 'Pistachio Macarons',
            price: 20,
        },
        {
            image: './images/RedVellvetMacarons.png',
            name: 'Redvelvet Macarons',
            price: 18,
        },
        {
            image: './images/VanillaMacarons.png',
            name: 'Vanilla Macarons',
            price: 15,
        }
    ]
  return (
    <section className='menu-item'>
        <div className='item-wrapper'>
            <div className='item-title'>
                <h1>Macarons</h1>
            </div>

            <div className='item-card-wrapper'>
                {menuMacarons.map((macarons) => (
                    <div className='item-card'>
                        <img src={macarons.image}/>
                        <h1>{macarons.name}</h1>
                        <p>₱ {macarons.price}</p>
                        <button>order</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MenuMacarons
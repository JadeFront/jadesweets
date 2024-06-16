import React from 'react'

const MenuCupcakes = () => {
    const menuCupcakes = [
        {
            image: './images/Caramelcupcake.png',
            name: 'Caramel Cupcake',
            price: 12,
        },
        {
            image: './images/Chocolatecupcake.png',
            name: 'Chocolate Cupcake',
            price: 15,
        },
        {
            image: './images/Coffeecupcake.png',
            name: 'Coffee Cupcake',
            price: 10,
        },
        {
            image: './images/Mintcupcake.png',
            name: 'Mint Cupcake',
            price: 15,
        },
        {
            image: './images/Redvelvetcupcakes.png',
            name: 'Redvelvet Cupcake',
            price: 18,
        },
        {
            image: './images/Vanillacupcake.png',
            name: 'Vanilla Cupcake',
            price: 12,
        }
    ]
  return (
    <section className='menu-item'>
    <div className='item-wrapper'>
        <div className='item-title'>
            <h1>Cupcakes</h1>
        </div>

        <div className='item-card-wrapper'>
            {menuCupcakes.map((cookies) => (
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

export default MenuCupcakes
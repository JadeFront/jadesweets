import React from 'react'
import './Best.css'

const Best = () => {
  return (
    <div className='bestseller-container'>
        <div className='bestseller-intro'>
            <h1>Most Favorite</h1>
        </div> 

        <div className='bestseller'>
            <div className='bestcookie'>
            <img src='./images/bs-cookie.png'/>
            <h1>Chocolate Chip Cookie</h1>
            <p>chocolate chips, brown and white sugar,
                vanilla, melted butter, egg, flour,
                baking soda, salt, cornstarch.
            </p>
            </div>

            <div className='bestmacaron'>
                <img src='./images/bs-macaron.png'/>
                <h1>Red Velvet Macaron</h1>
                <p>almond flour, cocoa powder, red food coloring,
                    cream of tartar, eggs, cream cheese, powdered sugar,
                    vanilla, butter.
                </p>
            </div>

            <div className='bestcupcake'>
                <img src='./images/bs-cupcake.png'/>
                <h1>Caramel Cupcake</h1>
                <p>fresh milk, all-purpose flour, cornstarch,
                     baking powder, salt, eggs, brown and white sugar, 
                     vanilla, salted butter, all-purpose cream.
                </p>
            </div>
        </div>
        <div className='menu-container'>
            <div className='menu'>
                <h1>baked with love and passion.</h1>
                <p>taste love each bite</p>
                <a href='#'>view menu</a>
            </div>
        </div>
    </div>
  )
}

export default Best
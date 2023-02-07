import React from 'react'
import {BOOKS} from '../../books'

export const Cart = () => {
  return (

    <div className='cart'>

          <div>
            <h1>My Cart Items</h1>
          </div>
           <div className="cartitems">
                {BOOKS.map((book)=>
                 {})}
           </div>
    </div>
  )
}

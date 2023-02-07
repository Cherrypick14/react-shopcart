import React,{useContext}from 'react'
import {BOOKS} from '../../books'
import { ShopContext } from '../../context/shop-context'

export const Cart = () => {
   const {cartItems} = useContext(ShopContext)
  return (

    <div className='cart'>

          <div>
            <h1>My Cart Items</h1>
          </div>
           <div className="cartitems">
                {BOOKS.map((book)=>
                 { })}
           </div>
    </div>
  )
}

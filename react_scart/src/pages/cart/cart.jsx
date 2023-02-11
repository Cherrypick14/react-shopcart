import React,{useContext}from 'react'
import {BOOKS} from '../../books'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import '../../styles/cart.css'

import { useNavigate } from 'react-router-dom'

export const Cart = () => {
   const {cartItems,getCartTotalAmount} = useContext(ShopContext)
   const totalAmount = getCartTotalAmount()

   const navigate = useNavigate()

  return (

    <div className='cart'>

          <div>
            <h1>My Cart Items</h1>
          </div>
           <div className="cartItems">
                { BOOKS.map((book)=>
                 {if (cartItems[book.id] !== 0){
                        return <CartItem data ={book}/>
                 }})}
           </div>
           <div className="checkout">
             <p> Subtotal:$ { totalAmount }</p>
             <button onClick={()=> navigate("/")}>Continue Shopping</button>
             <button>Checkout</button>
           </div>

    </div>
  )
}

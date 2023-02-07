import React,{useContext}from 'react'
import {BOOKS} from '../../books'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import '../../styles/cart.css'

export const Cart = () => {
   const {cartItems} = useContext(ShopContext)
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
    </div>
  )
}

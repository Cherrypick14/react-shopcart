import React,{useContext}from 'react'

import {ShopContext} from '../../context/shop-context'

export const Book = (props) => {

    const {id,bookTitle,author,price,bookImage} = props.data

    const {addToCart,cartItems} = useContext(ShopContext)

   const  cartItemAmount = cartItems[id];
  return (
    <div className='book'>
        <img src ={bookImage} />

        <div className="description">
          <p>
            <b>{bookTitle}</b>
            </p>
          <p>
            <i>{author}</i>
            </p>
          <p> ${price}</p>
        </div>
        <button className="addToCartBtn" onClick={()=> addToCart(id)}>
          Add to Cart{cartItemAmount > 0 && <>{(cartItemAmount)}</>}
        </button>

    </div>
  )
}

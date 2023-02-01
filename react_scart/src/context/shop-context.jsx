import { Books } from 'phosphor-react';
import React,{createContext, useState} from 'react'
import { BOOKS } from '../../src/books';

export const ShopContext = createContext(null);

// getting initial cart item
// add more products to the cart
// handle the changes automatically

const getDefaultCart =() =>{
    let cart ={}
    for(let i = 1; i< BOOKS.length + 1; i++){
        cart[i] = 0
    }
    return cart ;
};

export const ShopContextProvider = (props) => {
    const[cartItems, setCartItems] = useState(getDefaultCart())

  return (

    <ShopContext.Provider>
        {props.children}


    </ShopContext.Provider>
  )
}

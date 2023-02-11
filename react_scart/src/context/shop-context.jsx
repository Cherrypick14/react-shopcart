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

    const addToCart = (itemId) =>{

       setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) =>{

       setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
   };

    const updateCartItemCount = (newAmount, itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]: newAmount}));
    };

   const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemCount};

  return (


    <ShopContext.Provider value={contextValue}>

        {props.children}


    </ShopContext.Provider>
  )
}

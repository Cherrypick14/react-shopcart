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

    const getCartTotalAmount = () =>{
        let totalAmount = 0
        for(const item in cartItems){
          if(cartItems[item] > 0){
             let itemInfo = BOOKS.find((book)=> book.id === Number(item));
               totalAmount = cartItems[item] * itemInfo.price
          }
        }
        return totalAmount;
    }

    const addToCart = (itemId) =>{

       setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) =>{

       setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
   };

    const updateCartItemCount = (newAmount, itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]: newAmount}));
    };

   const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getCartTotalAmount
};

  return (


    <ShopContext.Provider value={contextValue}>

        {props.children}


    </ShopContext.Provider>
  )
}

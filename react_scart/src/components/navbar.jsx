import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import '../styles/Navbar.css';



export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <Link to ="/" style={{color:'#fff', textDecoration:'none'}}> Shop </Link>
            <Link to ="/cart"> 
            <ShoppingCart size={24} style={{color:'#fff', marginLeft:'5px'}}/>
            </Link>
        </div>
    </div>
  )
}

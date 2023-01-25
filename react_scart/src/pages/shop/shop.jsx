import React from 'react'
import {BOOKS} from '../../books'
import { Book } from './book'

export const Shop = () => {
  return (
    <div className='shop'>
      <div className="shopTitle">
        <h1>Mooney's Bookstore</h1>
      </div>
      <div className="books">
           {BOOKS.map((book)=>(
             <Book data={book}/>
           ))}
      </div>
    </div>
  )
}

import React from 'react'

export const Book = (props) => {
    const {id,bookTitle,author,price,bookImage} = props.data
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
        <button className="addToCartBtn">
          Add to Cart
        </button>

    </div>
  )
}

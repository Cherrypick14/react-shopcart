import React from 'react'

export const CartItem= (props) => {

  const {id,bookTitle,author,price,bookImage} = props.data
  return (
    <div className='cartitem'>

      <img src={bookImage}/>

      <div className='description'>
        <p>
          <b>{bookTitle}</b>
          </p>
        <p>
          <b>{author}</b>
          </p>
        <p>${price}</p>
      </div>

    </div>
  )
}

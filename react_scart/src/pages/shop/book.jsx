import React from 'react'

export const Book = (props) => {
    const {id,bookTitle,author,price,bookImage} = props.data
  return (
    <div className='book'>
        <div className="bookid">{id}</div>
         <div className="title">{bookTitle}</div>
         <div className="author">{author}</div>
         <div className="price">{price}</div>
         <div className="bookimage">{bookImage}</div>
    </div>
  )
}

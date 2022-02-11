import React from 'react';
import './item.css'
 import { Link } from 'react-router-dom'
const Item = ({movie}) => {
  return (
    <Link to={`/product/${movie.id}`}>
  <div className='item-wrap'>
    <img src={movie.imgUrl} alt={movie.title} />
    <p>{movie.title}</p>
    <p>{movie.price}</p>
  </div>
  </Link>
  )
};

export default Item;
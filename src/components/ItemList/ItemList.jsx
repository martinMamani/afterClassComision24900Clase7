import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"

const ItemList = ({movies}) => {
  return (<div className='itemList-wrap'>
  {
    movies.map((movie)=>(
      <Item key={movie.id} movie={movie}></Item>
        ))
      }
  </div>
  )
}

export default ItemList;

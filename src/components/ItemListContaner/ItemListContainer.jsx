import React, { useState ,useEffect} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import './itemListContainer.css'
import { getItems } from '../../api/api';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

 const [movies, setMovies] = useState([]);
 const [isLoading, setIsLoading] = useState(false)
 const { catID } = useParams();


 useEffect(() => {
    getItems()
    .then((films)=> {
        catID ? setMovies(films.filter(film => film.category === catID ))
        : setMovies(films);
    })
}, [catID])

  return (
  <div className='ilc-wrap'>
      <h2 className='greet'>{greeting}</h2>
      <ItemList movies={movies}></ItemList>
      
  </div>
  )
};

export default ItemListContainer;

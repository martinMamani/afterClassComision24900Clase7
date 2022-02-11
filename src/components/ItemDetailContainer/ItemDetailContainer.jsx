import { useState,useEffect } from "react"
import { getItems } from '../../api/api'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [movie, setMovie] = useState({});
    // const [isLoading ,setIsLoading]=useState(true)
    const {itemID} = useParams()
    
    useEffect(() => {
        getItems()
        .then(function(films){
            const film = films.find((film) => film.id === Number(itemID));
            setMovie(film);
            console.log(itemID)
        });
    }, [itemID]);


    return(
        <div className="detail-wrap">
            {/* {isLoading
            ?<h2>Cargando...</h2>
            : */}
               <ItemDetail
                item={movie} 
                />
            {/* } */}
        </div>
            )
}

export default ItemDetailContainer
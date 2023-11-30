import { filterCards, orderCards } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import "./favorites.css"

export default function Favorites({ onClose }) {

    const dispatch = useDispatch()

    const myFavorites = useSelector(state => state.myFavorites)


    return <div>
        
        <div className='cardP'>
            {
                myFavorites.map((favorite) => {
                    return <Card
                        key={favorite.id}
                        id={favorite.id}
                        name={favorite.name}
                        status={favorite.status}
                        species={favorite.species}
                        gender={favorite.gender}
                        origin={favorite.origin}
                        image={favorite.image}
                        onClose={onClose}
                    />
                })
            }
        </div>
    </div>
}
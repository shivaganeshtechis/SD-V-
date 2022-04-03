import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavourites } from '../reducks/favourites/selectors'
import { fetchFromLocalStorage } from '../reducks/favourites/operations'
import Header from '../components/Common/Header'
import FavCard from '../components/Common/FavCard'
import Footer from '../components/Common/Footer'

function Favourites() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);
    console.log(favourites);
    useEffect(() => {
        dispatch(fetchFromLocalStorage());
    }, []);

    return (
    <div>
        <Header/>
        <div className='content'>
            <h1>
                Favorites
            </h1>
            < div className='movie'>
                {favourites && favourites.map(favourite => 
                    <FavCard favourite={favourite}/>)}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Favourites
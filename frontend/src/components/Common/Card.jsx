import React, {useEffect, useState} from 'react'
import redheart from '../../assets/img/red-heart-icon.svg'
import star from '../../assets/img/star.png'
import trailer from '../../assets/img/trailer-button.png'
import { addFavourite } from '../../reducks/favourites/operations'
import { useSelector, useDispatch } from 'react-redux'
import { getFavourites } from '../../reducks/favourites/selectors'



function Card ({movie}) {
    const dispatch = useDispatch();

    const clickFavourite = movie =>{
        dispatch(addFavourite(movie));
    };

    // to add function fior click button
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector)
    const [showLikeButton, setshowLikeButton] = useState(true);
    useEffect(() => {
        let favoriteMovie = favourites.filter(favourite => favourite.id === movie.id)
        if(favoriteMovie.length > 0 ){
            setshowLikeButton(false);
        }
    }, [favourites])

  return (
    <div className='movie-card'>
        <div className="Movies">
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src={movie.image} alt=""/>
                    {showLikeButton && (
                <div className='like-icon'
                onClick={()=> {
                    clickFavourite(movie);
                }}>
                    <img src={redheart} alt="" />
                </div>
                )}
                </div>
                <div className="Movies-details">
                    <p>{movie.name}</p>
                    <div className="ratings-trailer">
                        <div className='extra-info'>
                            <img className="star" src={star} alt="" />
                            <div className="ratings">4.5/5</div>
                        </div>
                        <a className="trailer-button" href={movie.trailer_link} target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
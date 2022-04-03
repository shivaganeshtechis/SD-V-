import React from 'react'
import star from '../../assets/img/star.png'
import trailer from '../../assets/img/trailer-button.png'
import redheart from '../../assets/img/red-heart-icon.svg'
import { deleteFavourite } from '../../reducks/favourites/operations'
import { useDispatch } from 'react-redux' 

function FavCard ({ favourite }) {
    const dispatch = useDispatch();
  return (
    <div>
        <div className='movie-card'>
            <div className="Movies">
                <div className="Movies-info">
                    <div className="Movies-poster">
                        <img className="Movies-img" src={favourite.image} alt=""/>
                        <div className='like-icon'>
                            <img onClick={() => 
                            dispatch(deleteFavourite(favourite.id))}
                            src={redheart} alt="" />
                        </div>
                    </div>
                    <div className="Movies-details">
                        <p>{favourite.name}</p>
                        <div className="ratings-trailer">
                            <div className='extra-info'>
                                <img className="star" src={star} alt="" />
                                <div className="ratings">4.5/5</div>
                            </div>
                            <a className="trailer-button" href={favourite.trailer} target="_blank" type="image"> <img src={trailer} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavCard
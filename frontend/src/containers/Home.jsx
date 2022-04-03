import React, {useState, useEffect} from 'react'
import { getMovies } from '../reducks/movies/selectors';
import Card from '../components/Common/Card'
import queryString from 'query-string'; 
import Footer from '../components/Common/Footer'
import Cover from '../components/Common/Cover';
import API from '../API'
import { useSelector } from 'react-redux'

const api = new API();
function Home() {
    const parsed = queryString.parse(window.location.search);
    const [moviesComingSoon, setmoviesComingSoon] = useState(null);
    const [moviesNewReleased, setmoviesNewReleased] = useState(null);
    const selector = useSelector(state => state);
    const movies = getMovies(selector);

    useEffect(() => {
        api.getMovies({ release_type: 'Coming Soon'})
            .then(movies => {
                setmoviesComingSoon(movies);
            })
            .catch(error => {
                alert('Failed to load')
            })

        api.getMovies({ release_type: 'Newly Released'})
            .then(movies => {
                setmoviesNewReleased(movies);
            })
            .catch(error => {
                alert('Failed to load')
            })       
    }, [])

  return (
    <div>
        <Cover/>
      <div className="content">       
        <h1>
            Newly Released
        </h1>
        <div className="Movies">
            {moviesNewReleased && moviesNewReleased.results.length > 0 ? (
                <div className='movie'>
                    {moviesNewReleased.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div>
                   <p>No movies for now</p>
                </div>
            )}
        <h1>
            Coming Soon
        </h1>
        <div className='Movies'>
            {moviesComingSoon && moviesComingSoon.results.length > 0 ? (
                <div className='movie'>
                    {moviesComingSoon.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div>
                   <p>No movies for now</p>
                </div>
            )}  
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
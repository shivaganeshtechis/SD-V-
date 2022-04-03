import React, { useEffect, useState } from 'react'
import API from '../API'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import Card from '../components/Common/Card'

// API CALL
const api = new API();
const Category = () => {
    const [categoryAction, setcategoryAction] = useState(null)
    const [categoryComedy, setcategoryComedy] = useState(null)
    const [categoryDrama, setcategoryDrama] = useState(null)
    const [categoryHorror, setcategoryHorror] = useState(null)
    
    useEffect(() => {
        api.getMovies({category_id: '1'})
        .then(movies => {
            setcategoryAction(movies);
        })
        .catch(error =>{
           alert('Failer to connect') 
        })

        api.getMovies({category_id: '2'})
        .then(movies => {
            setcategoryComedy(movies);
        })
        .catch(error =>{
            alert('Failer to connect') 
         })
        
         api.getMovies({category_id: '3'})
         .then(movies => {
             setcategoryDrama(movies);
         })
         .catch(error =>{
             alert('Failer to connect') 
          })

        api.getMovies({category_id: '4'})
          .then(movies => {
              setcategoryHorror(movies);
          })
          .catch(error =>{
              alert('Failer to connect') 
           });
    }, [])
    return (
        <div>
            <Header/>
            {/* Action */}
            <h1>
                Action
            </h1>
            {categoryAction && categoryAction.results.length > 0 ? (
                <div class="movie">
                    {categoryAction.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='divider'>
                    <p>Cannot found movie for you....</p>
                </div>
            )}

            {/* Comedy */}
            <h1>
                Comedy
            </h1>
            {categoryComedy && categoryComedy.results.length > 0 ? (
                <div class="movie">
                    {categoryComedy.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='divider'>
                    <p>Cannot found movie for you....</p>
                </div>
            )}

            {/* Drama */}
            <h1>
                Drama
            </h1>
            {categoryDrama && categoryDrama.results.length > 0 ? (
                <div class="movie">
                    {categoryDrama.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='divider'>
                    <p>Cannot found movie for you....</p>
                </div>
            )}
        
            {/* Horror */}
            <h1>
                Horror
            </h1>
            {categoryHorror && categoryHorror.results.length > 0 ? (
                <div class="movie">
                    {categoryHorror.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='divider'>
                    <p>Cannot found movie for you....</p>
                </div>
            )}
    
            <Footer/>
        </div>
    );
};
export default Category;
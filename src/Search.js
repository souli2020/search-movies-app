import React, { useContext} from "react";
import {Context} from "./Context"
import MovieCard from './movieCard.js';

export default function SearchMovies(){
 
     const {query, movies, searchMovies, handleChange} = useContext(Context)
    
    
    // let updated = movies.filter(movie => movie.poster_path).map(movie =>({...movie, isFavorited:false}))
    // console.log(updated)
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={handleChange}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
            {movies.map(movie => (
                    
                     <MovieCard movie={movie} key={movie.id} />
                ))}                
            </div>    
        </>
    )
}

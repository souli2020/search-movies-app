import React,{useContext} from "react";
import {Context} from "./Context"
import useHover from "./useHover"

export default function MovieCard({movie}){
     const {toggleFavorite, addToWatchList} = useContext(Context)
     const{hovered, mouseEnter, mouseLeave} = useHover()
     
     function heartIcon(){
         if(movie.isFavorited){
           return  <i
                onClick={()=>{toggleFavorite(movie.id)}}
                className="ri-heart-fill favorite"></i>
         }
         else if(hovered){
             return <i
                onClick={()=>{toggleFavorite(movie.id)}}
                className="ri-heart-line favorite"></i>
         }
     }
     
     
    return (
         <div className="card" 
         onMouseEnter={()=>mouseEnter()}
         onMouseLeave={()=>mouseLeave()}
         
          >
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p>
            <p className="card--desc">{movie.overview}</p>
            
                     { heartIcon()}
             <i 
             onClick={()=>addToWatchList(movie)}
             className="ri-add-circle-fill cart"><small>add to watchlist</small></i>
              </div>

        </div>
    )
}
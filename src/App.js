import React,{useContext} from 'react';
 import SearchMovies from "./Search";
import{Link, Routes, Route} from "react-router-dom"
import WatchList from './watchList';
import { Context } from './Context';
 

export default function App () {
   
    const{watchList, handleWatchlist, watch} = useContext(Context)
    return (
        
      <div className="container">

 <h1 className="title"> React Movie Search </h1>
                  
               {watchList.length > 0 && watch && <Link to="/watchlist"> <h2 className="watchlist"
               onClick={()=>handleWatchlist()}
               ><i className="ri-eye-line">Watchlist</i></h2>
               </Link>}
          <Routes>
         <Route exact path="/" element={ <SearchMovies/> } />
         <Route path="/watchlist" element={ <WatchList/> } />
         </Routes>
       
      </div>
    )
  }

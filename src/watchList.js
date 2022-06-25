import React,{useContext} from "react"
import { Context } from "./Context"
import Card from "./Card"
 import { Link } from "react-router-dom"

export default function WatchList(){
    const{watchList,home} = useContext(Context)
    let list = watchList.map(movie =>(
        <div >
          <Card movie={movie}/>
          
           </div>

    ))
    
    return(
        <div className="wrapper"> 
         {list}
         {watchList.length === 0 && <p>You have no movies in the watchlist</p>}
          <Link className="home-link" to="/" onClick={home}>Home</Link>
        </div>
    )
}
import React,{useState} from "react"
const Context = React.createContext()

function ContextProvider({children}){
    const [movies, setMovies] = useState([])
     const [query, setQuery] = useState('')
      const [watchList, setWatchList]= useState([])
      const [watch, setWatch]= useState(true)
     
                const searchMovies = async (e) => {
                    e.preventDefault();
                            
                    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=5&include_adult=false`;
                    
                    try {
                        const res = await fetch(url);
                        const data  = await res.json();
                        let updated = data.results.filter(movie => movie.poster_path).map(movie =>({...movie, isFavorited:false}))
                        setMovies(updated);
                    }catch(err){
                        console.error(err);
                    }
                }
                
                
      function handleChange(e){
                        setQuery(e.target.value)
           }
                    
      function toggleFavorite(id){

                    setMovies( movies.map(movie =>(movie.id === id? {...movie, isFavorited: !movie.isFavorited}: movie)))
          }
      function addToWatchList(movie) {
        if(!watchList.includes(movie)){

            setWatchList(prev => [...prev, movie])
         }

      }   
      function removeFromList(id) {

        setWatchList(watchList.filter(movie => movie.id !== id))

     }  
     function handleWatchlist(){
        setWatch(false)
     }
     function home(){
        setWatch(true)
     }
    
                
    return(
        <Context.Provider value={
            {
               query,
               movies,
               searchMovies,
               handleChange,
               toggleFavorite,
               addToWatchList,
               watchList,
               removeFromList,
               handleWatchlist,
               home,
               watch
               }
            }>
            
        {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}
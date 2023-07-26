import React from "react";
import MovieCard from "./CardItem";



const MovieList = () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=eb8fdbc264b1fcfbea74dab235e43bb0'
    const [popularMovie, setPopularMovie] = React.useState([])

    React.useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setPopularMovie(data.results);
        })
    }, [])
    return ( 
        <div className="grid grid-cols-5 gap-5">
            {popularMovie.map((movieReq)=>
            <MovieCard key={movieReq.id} {...movieReq}/>)}
        </div>
     );
}
 
export default MovieList;
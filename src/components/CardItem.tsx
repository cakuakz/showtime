
const MovieCard = ({ title, poster_path, vote_average, release_date, }) => {

const API_IMG = 'http://image.tmdb.org/t/p/w500'
    return ( 
        <div className="flex flex-col">
            <img src={API_IMG+poster_path} alt="poster" className="rounded-lg shadow-lg w-[150px] h-[175px]"/>
            <p className="text-white text-[20px] w-[150px] truncate">{title}</p>
            <div className="flex flex-col space-7-[48px]">
                <div className="flex flex-row items-center gap-[4px]">
                    <img src="rating-stars-icon.png" alt="rating" className="w-[20px]"/>
                    <p className="text-white">{vote_average}</p>
                </div>
                <p className="text-white text-[16px]">{release_date}</p>
            </div>    
        </div>
     );
}
 
export default MovieCard;
import axios from "axios"


    const searchUrl = 'https://api.themoviedb.org/3/search/movie'
    const apiKey = 'eb8fdbc264b1fcfbea74dab235e43bb0'

    const searchMovie = async (q) => {
        const search = await axios.get(`${searchUrl}?query=${q}&api_key=${apiKey}`)
        return search.data
    }

const Navbar = () => {
    
    const searchBar = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q)
            
        }
    }

    return ( 
        <nav className="flex flex-row py-[40px] px-[96px] bg-[#2E2E2E] content-center text-white justify-between sticky top-0 z-10 backdrop-blur-md">
                <img src="logo_showtime.png" alt="logo" className="w-[150px]"/>
                <div className="flex flex-row gap-x-10">
                    <input type="text" placeholder="Search" className="py-1 px-3 mr-[82px] rounded-lg text-gray-600" />
                </div>
            </nav>
     );
}
 
export default Navbar;
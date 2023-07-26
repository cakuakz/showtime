
import Navbar from "../components/Navbar";
import MovieList from "../components/CardList";




const Home = () => {
    return ( 
        <div>
            <Navbar />
            <div className="px-[96px] pt-[100px] pb-[50px] bg-[#2E2E2E]">
                <h1 className="text-white text-[32px] font-semibold mb-[16px]">Trending</h1>
                <MovieList />
            </div> 
        </div>
     );
}
 
export default Home;
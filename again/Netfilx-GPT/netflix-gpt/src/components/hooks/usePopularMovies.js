import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constatnts";

const useNowPopularMovies = () => {
    
    //fetch the data from TMDB and update store
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
        const json = await data.json();
        // console.log(json)
        dispatch(addNowPopularMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
};

export default useNowPopularMovies;
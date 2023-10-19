import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constatnts";
import { useEffect } from "react";
import { addTrailerVideo } from "../../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  //fetch trailer video
  const dispatch = useDispatch();
 
  //fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results;
    
    dispatch(addTrailerVideo(trailer));

  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

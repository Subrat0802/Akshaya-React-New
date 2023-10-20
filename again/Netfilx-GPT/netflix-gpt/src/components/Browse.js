import { useSelector } from "react-redux";
import { GptSearch } from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import useNowPopularMovies from "./hooks/usePopularMovies";

const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);

  useNowPlayingMovies();
  useNowPopularMovies()

  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearch /> 
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        ) 
      }
      
      
      
    </div>
  );
};

export default Browse;

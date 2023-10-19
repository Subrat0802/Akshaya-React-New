
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
        mainContainer
            - video bg
            - video title
        Secondary Container
            - movie list * n
                -cards * n
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

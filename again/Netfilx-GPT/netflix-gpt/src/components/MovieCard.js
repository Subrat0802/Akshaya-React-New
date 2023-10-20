import { IMG_CDN_URL } from "./constatnts";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 mr-6 ">
      <img className="rounded" src={IMG_CDN_URL + posterPath} alt="movie card" />
    </div>
  );
};

export default MovieCard;

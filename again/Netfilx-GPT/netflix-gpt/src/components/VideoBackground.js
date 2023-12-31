
import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";



export const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store=> store.movies?.trailerVideo);
    useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
      className="w-screen aspect-video  "
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1&&rel=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

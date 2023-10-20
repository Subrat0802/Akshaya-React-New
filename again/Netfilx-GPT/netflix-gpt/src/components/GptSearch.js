import { GptSearchBar } from "./GptSearchBar";
import { GptMovieSuggetion } from "./GptMovieSuggetion";
import { background_url } from "./constatnts";

export const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="overflow-x-hidden opacity-95"
          src={background_url}
          alt="bgImage"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggetion />
    </div>
  );
};

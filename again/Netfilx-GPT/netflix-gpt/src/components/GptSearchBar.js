import { useRef } from "react";
import openai from "../utils/openai";

export const GptSearchBar = () => {
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system suggest some movie for the query" +
      searchText.current.value +
      ". only give me names of movies,  comma saperated. like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi mil gaya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery}],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult.choices);
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" p-2 m-4 col-span-9 rounded-lg bg-gray-800"
          type="text"
          placeholder="What would you like to watch today!"
        />
        <button
          className=" py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 grid grid-cols-12 rounded-lg">
        <input
          className=" p-2 m-4 col-span-9 rounded-lg bg-gray-800"
          type="text"
          placeholder="What would you like to watch today!"
        />
        <button className=" py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

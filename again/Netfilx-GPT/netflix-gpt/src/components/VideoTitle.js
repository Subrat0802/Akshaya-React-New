export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[12%] w-screen aspect-video px-24 h-100 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h2 className="py-6  w-1/4">{overview}</h2>
      <div>
        <button className="bg-white text-black p-3 px-8 rounded-md hover:opacity-80 text-xl">
            Play
        </button>
        <button className="mx-3 bg-gray-500 text-white p-3 px-12 hover:opacity-80 rounded-md text-xl bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

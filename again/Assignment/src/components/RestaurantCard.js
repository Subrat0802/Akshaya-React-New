import { CDN_URL } from "../utils/constents";

const RestaurantCard = ({ resInfo }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resInfo;
  return (
    <div
      className="h-[25rem] border border-black
        bg-black text-[#d6d6d6] w-56 hover:scale-95 transition-all ease 2s
        hover:text-[#00C544] rounded-lg cursor-pointer overflow-hidden"
    >
      <img
        className="h-40 w-[100%] rounded-t-lg  "
        alt="resImg"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-2 ">
        <p className="text-2xl mb-2 font-semibold ">{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>Rating {avgRating}</p>
        <p>Cost {costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData?.info;

  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="m-4 p-2 w-[230px] bg-[#f0f0f0] h-[420px] rounded-lg hover:bg-[#dfdfdf] " >
      <img className="rounded-lg h-[150px] w-[100%] mb-3 "  src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time {sla.deliveryTime} minutes</h4>
      <p>{loggedInUser}</p>
    </div>
  );
};

export default RestaurantCard;

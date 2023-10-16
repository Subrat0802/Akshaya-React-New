import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauratMenu";
import RestaurantCategory from "./RestaurantCatagories";


const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  
  const dummy = "Dummy data";
  
  const resInfo = useRestaurantMenu(resId)

  const [showIndex, setShowIndex] = useState(null)

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2438775&lng=77.4346625&restaurantId=" +resId+ "&catalog_qa=undefined&submitAction=ENTER");

  //   const json = await data.json();

  //   console.log(json);

  //   setResInfo(json.data)
  // }

  if(resInfo === null){
    return <Shimmer />
  } 

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const items = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // console.log(items);

  const catagories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=> 
    c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log("Hello",catagories);

  // console.log(itemCards);

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="text-lg">{cuisines.join(", ")} - Rs. {costForTwoMessage}</p>

      {catagories.map((el, index) => (
        <RestaurantCategory 
          key={el?.card.card?.title} 
          data={el?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
      
    </div>
  );
}; 
export default RestaurantMenu;

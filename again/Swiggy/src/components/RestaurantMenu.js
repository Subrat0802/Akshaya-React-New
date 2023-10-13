import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauratMenu";


const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  
  const resInfo = useRestaurantMenu(resId)

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

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines} - Rs. {costForTwoMessage}</p>
      <br/>
      <h2>Menu</h2>
      <ul>
      {itemCards.map(el => <li key={el.card.info.id}>{el.card.info.name} - Rs. {el.card.info.defaultPrice/100}</li>)}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li> */}
      </ul>
    </div>
  );
}; 
export default RestaurantMenu;

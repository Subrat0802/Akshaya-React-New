import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCatagories from "./RestaurantCatagories";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const items = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log(items[1]?.card?.card);

  const { itemCards, title } = items[1]?.card?.card;

  return (
    <div className="pt-28 bg-[#0F0F0F] min-h-[100vh] text-white text-center ">
      <h1 className="font-bold text-3xl">{name}</h1>
      <h1>{cuisines.join(", ")}</h1>
      <h1>Cost {costForTwoMessage}</h1>
      {itemCards.map((cat) => {
        return (
          <RestaurantCatagories
            key={cat.card.info.id}
            resItems={cat.card.info}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

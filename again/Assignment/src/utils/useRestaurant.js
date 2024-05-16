import React, { useEffect, useState } from 'react'
import { RES_API } from './constents';

const useRestaurant = () => {

    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchResData();
      }, []);
    
      const fetchResData = async () => {
        const data = await fetch(RES_API);
        const json = await data.json();
        // console.log(json);
        setRestaurantData(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      };
  return restaurantData, filteredRestaurants, setFilteredRestaurants, setRestaurantData;
}

export default useRestaurant
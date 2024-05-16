import RestaurantCard from "./RestaurantCard";
import Carausal from "./Carausal";
import { useEffect, useState } from "react";
import { RES_API } from "../utils/constents";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  // console.log(restaurantData);

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

  const handleSearchRestaurants = () => {
    const searchedRestaurant = restaurantData.filter((el) =>
      el.info.name.toLowerCase().includes(searchInput)
    );
    setFilteredRestaurants(searchedRestaurant);
  };

  if(restaurantData.length === 0) return <Shimmer />

  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-[#0F0F0F] pb-4">
      <Carausal />

      {/*search  */}
      <div className="w-full mt-4 p-2 flex justify-center">
        <input
          className="text-black border border-[#0F0F0F] rounded-s-full w-[40%] p-2 bg-[#d9d9d9] "
          placeholder="Search Your Restaurant Hare!"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="bg-black text-white p-2 px-4 mr-3 rounded-e-full font-semibold hover:text-[#00C544]"
          onClick={handleSearchRestaurants}
        >
          Search
        </button>
        <button
          onClick={() => {
            const topRatedRes = restaurantData.filter(
              (el) => el.info.avgRating > 4
            );
            setFilteredRestaurants(topRatedRes);
          }}
          className="bg-[#00C544] rounded-full  p-2 px-4  font-semibold hover:text-white"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div></div>

      {/* resCard  */}
      <div className="flex flex-wrap w-[90%] justify-center items-center gap-4 mt-5">
        {filteredRestaurants.map((res) => {
          return <Link key={res.info.id} to={"/restaurant/"+res.info.id}><RestaurantCard  resInfo={res.info} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;

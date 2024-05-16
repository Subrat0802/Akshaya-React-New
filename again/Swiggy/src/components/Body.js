import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local state variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //whenever state variable update react triggers a reconcilation cycle (re-render the component)
  // console.log("Body Rendered"); 

  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2438775&lng=77.4346625&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // ..optional chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>

  // conditional rendering
    if(listOfRestaurants.length === 0){
      return <Shimmer />
    }

  return (
    <div className="body">
      <div className="flex ">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restaurants"
            className="border border-solid ml-4 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 bg-[#dbdbdb] hover:bg-[#c2c1c1] mx-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-300 px-4 hover:bg-green-200 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-6 items-center justify-center ">
        {filteredRestaurant.map((el) => (
          <Link key={el.info.id} to={"/restaurants/"+ el.info.id}><RestaurantCard  resData={el} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import React, { useEffect, useState } from "react";
import { Restaurant_API } from "./constents";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const data = await fetch(Restaurant_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;

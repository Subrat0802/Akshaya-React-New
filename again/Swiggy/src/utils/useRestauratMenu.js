import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    //fetchData

    const [resinfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2438775&lng=77.4346625&restaurantId=" +resId+ "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        setResInfo(json.data);
    }

    return resinfo;
}

export default useRestaurantMenu;
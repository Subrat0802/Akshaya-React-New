import React from "react";

const RestaurantCatagories = (props) => {
  const { name, finalPrice, price } = props.resItems;
  console.log(props.resItems);
  return (
    <div className="flex justify-center ">
      <h1>{name}</h1>
      <h1 className="text-[#00C544]">
        - Rs. {finalPrice / 100 || price / 100}
      </h1>
    </div>
  );
};

export default RestaurantCatagories;

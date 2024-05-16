import React, { useState, useEffect } from "react";
import { carausal_IMG } from "../utils/mockData";
import CarausalCard from "./CarausalCard";

const Carausal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carausal_IMG.length);
    }, 2000);

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="w-1/2 mt-28">
      <CarausalCard 
        carImg={carausal_IMG[currentIndex]} 
      />
    </div>
  );
};

export default Carausal;
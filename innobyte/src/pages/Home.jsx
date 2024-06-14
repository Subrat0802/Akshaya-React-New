import React from "react";
import header from "../asset/header.jpg";
const Home = () => {
  return (
    <div className="h-[100vh] flex text-black pt-11">
      <img className=" h-full object-cover" src={header}  />
      <div className="flex bg-[#264855] flex-col text-white justify-center items-center gap-3 pt-5  w-full" >
        <p className="text-xl underline underline-offset-8  ">Simple - Unique - Friendly</p>
        <p className="text-3xl text-ellipsis text-center">Make Yourself At Home In Our Guest House.</p>
        <a target='/_blank' href='https://api.whatsapp.com/send?phone=919007062180'><button className='bg-[#219EBC] py-2 px-3 rounded-xl font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Book Now</button></a>
      </div>
    </div>
  );
};

export default Home;

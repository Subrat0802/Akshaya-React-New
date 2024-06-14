import React from 'react'
import { SiHotelsdotcom } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center py-4 bg-[#023047] text-white fixed top-0 w-full z-10'>
        <div className=''>
            <p className='text-2xl flex items-center gap-1 font-semibold'><SiHotelsdotcom /> {" "} Kingsukh Guest House</p>
        </div>

        <div className='w-[40%]'>
            <ul className='flex justify-between items-center text-xl '>
                <NavLink to={"/"}><li>Home</li></NavLink>
                <NavLink to={"/about"}><li>About</li></NavLink>
                <NavLink to={"/services"}><li>Services</li></NavLink>
                <NavLink to={"/rooms"}><li>Rooms</li></NavLink>
                <NavLink to={"/gallery"}><li>Gallery</li></NavLink>
                <NavLink to={"/contact"}><li>Contact</li></NavLink>
            </ul>
        </div>
        <div>
            <a target='/_blank' href='https://api.whatsapp.com/send?phone=919007062180'><button className='bg-[#219EBC] py-2 px-3 rounded-xl font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Book Now</button></a>
        </div>
    </div>
  )
}

export default Navbar
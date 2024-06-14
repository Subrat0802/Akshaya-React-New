import React from 'react'
import small from "../asset/small.jpg";
import large from "../asset/large.jpg";
import room1 from "../asset/room1.jpg";

const Rooms = () => {
  return (
    <div className=' gap-5  pt-20   min-h-[100vh] bg-[#264855] text-white pb-12'>
        <div className='p-5 pl-20'>
           <p className='text-3xl text-white '>Our Living Room <div className='w-14 border border-[#FB8500]'></div></p>
           <p className='text-4xl font-bold mt-3'>The Most Memorable Rest Time Starts Here.</p>
        </div>
        <div className='pl-20 flex gap-8'>
            <div className='bg-[#023047] rounded-lg flex flex-col w-[300px] pb-4' >
                <img className='rounded-t-lg' src={small}/>
                <p className='text-2xl px-2'>Cozy Haven Room</p>
                <p className='text-gray-300 px-2'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                <p className='text-gray-300 px-2'>Starting from <span className='text-white'>Rs. 1000/night</span></p>
                <a target='/_blank' href='https://api.whatsapp.com/send?phone=919007062180'><button className='bg-[#219EBC] flex justify-center items-center w-40 mt-5 py-2 px-3 mx-auto font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Book Now</button></a>
            </div>
            <div className='bg-[#023047] rounded-lg flex flex-col w-[300px] pb-4' >
                <img className='rounded-t-lg' src={large}/>
                <p className='text-2xl px-2'>Cozy Haven Room</p>
                <p className='text-gray-300 px-2'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                <p className='text-gray-300 px-2'>Starting from <span className='text-white'>Rs. 1000/night</span></p>
                <a target='/_blank' href='https://api.whatsapp.com/send?phone=919007062180'><button className='bg-[#219EBC] flex justify-center items-center w-40 mt-5 py-2 px-3 mx-auto font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Book Now</button></a>
            </div>
            <div className='bg-[#023047] rounded-lg flex flex-col w-[300px] pb-4' >
                <img className='rounded-t-lg' src={room1}/>
                <p className='text-2xl px-2'>Cozy Haven Room</p>
                <p className='text-gray-300 px-2'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                <p className='text-gray-300 px-2'>Starting from <span className='text-white'>Rs. 1000/night</span></p>
                <a target='/_blank' href='https://api.whatsapp.com/send?phone=919007062180'><button className='bg-[#219EBC] flex justify-center items-center w-40 mt-5 py-2 px-3 mx-auto font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Book Now</button></a>
            </div>
        </div>
    </div>
  )
}

export default Rooms

//<a target='/_blank' href='https://api.whatsapp.com/send?phone=919007062180'><button className='bg-[#219EBC] py-2 px-3 rounded-xl font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Book Now</button></a>
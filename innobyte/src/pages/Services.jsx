import React from 'react'
import { PiSecurityCameraThin } from "react-icons/pi";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { MdOutlineFastfood } from "react-icons/md";
import { SlSupport } from "react-icons/sl";

const Services = () => {
  return (
    <div className='pt-24 flex flex-col min-h-[100vh] w-full  items-center bg-[#264855] text-white'>
        <p className='text-4xl font-semibold'>Services</p>
        <div className='w-full flex flex-col justify-center items-center'>
            
            <div className='bg-gray-900 mt-14 text-2xl bg-opacity-50 flex justify-around items-center  w-[90%] rounded-md shadow-2xl h-[100px]'>
                <div className='flex flex-col justify-center items-center'>
                    <PiSecurityCameraThin />
                    <p>High Class Security</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <AiTwotoneCustomerService />
                    <p>24 Hours Room Service</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <MdOutlineFastfood />
                    <p>Restaurant</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SlSupport />
                    <p>Tourist Guide Support</p>
                </div>
            </div>
            <div className='bg-gray-900 text-2xl bg-opacity-50 flex justify-around items-center mt-5 w-[90%] rounded-md shadow-2xl h-[100px]'>
                <div className='flex flex-col justify-center items-center'>
                    100+
                    <p>Bookings Completed</p>
                </div>
                
                <div className='flex flex-col justify-center items-center'>
                    150+
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>

        <a target='/_blank' href='https://api.whatsapp.com/send?phone=919007062180'><button className='bg-[#219EBC] mt-20 py-2 px-5 rounded-xl font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Book Now</button></a>
    </div>
  )
}

export default Services
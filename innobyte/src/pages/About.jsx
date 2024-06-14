import React, { useState } from 'react'
import out from "../asset/out.jpg"
import recep from "../asset/recep.jpg";
import large from "../asset/large.jpg"
import services from "../asset/service.jpg"


const images = [
    large,
    out,
    recep,
    large,
    services
]

const About = () => {

    const [img, setImg] = useState(0)

    const setImgInc = () => {
        setImg(img+1)
        if(img === images.length - 1){
            setImg(0)
        }
    }

    const setImgPrev = () => {
        setImg(img-1)
        if(img === 0){
            setImg(images.length-1)
        }
    }
  return (
    <div className='lg:flex gap-5 justify-center pt-14 items-center min-h-[100vh] bg-[#264855]'>
        <div className="w-[40%]">
            <img className='max-h-[400px] w-[600px] object-cover' src={images[img]} />
            <div className=' flex justify-center gap-3 mt-3'>
                <button onClick={setImgPrev} className='bg-[#219EBC] py-2 px-3 rounded-lg font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Prev</button>
                <button onClick={setImgInc} className='bg-[#219EBC] py-2 px-3 rounded-lg font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Next</button>
            </div>
        </div>
        <div className="w-[50%] text-white text-center px-6">
            <p className='text-3xl font-bold mt-2 underline underline-offset-4 mb-3' >About Us</p>
            <p>The Best Holidays Start Here!</p>
            <p className='text-gray-300'>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
            <p className='text-blue-200 mt-3'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156 Contact us: +91 9007062180</p>
            <a target='/_blank' href='https://api.whatsapp.com/send?phone=919007062180'><button className='bg-[#219EBC] py-2 px-3 rounded-xl font-semibold hover:bg-[#4db5cf] transition-all duration-200'>Book Now</button></a>
        </div>
    </div>
  )
}

export default About
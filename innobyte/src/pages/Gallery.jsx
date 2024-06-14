import React from 'react'
import room1 from "../asset/room1.jpg";
import out from "../asset/out.jpg"
import recep from "../asset/recep.jpg";
import large from "../asset/large.jpg"
import services from "../asset/service.jpg"
import small from "../asset/small.jpg";
import one from "../asset/1.jpg";
import ayodhya from "../asset/ayodhya.webp";
import baranti from "../asset/baranti.webp";
import flower from "../asset/flower.jpg";

const images = [services, small, one, ayodhya, baranti, flower, room1, out, recep, large ]

const Gallery = () => {
  return (

    <div className='bg-[#264855] pb-10 text-white'>
        <h1 className='text-center text-5xl font-bold pt-24'>Our Gallery </h1>
    <div className='flex flex-wrap gap-3 justify-center items-center pt-5'>
        {
            images.map((el, i) => {
                return <img className='w-[300px] grayscale hover:grayscale-0 rounded-md h-[300px] object-cover hover:cursor-pointer hover:scale-95 transition-all duration-200 ' key={i} src={el}/>
            } )
        }
    </div>
    </div>
  )
}

export default Gallery
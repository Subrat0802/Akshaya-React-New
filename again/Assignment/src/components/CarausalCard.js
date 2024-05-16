import React from 'react'

const CarausalCard = (props) => {
  return (
    <div className=' mb-2'>
        <img className='h-[380px] w-[100%]' src={props.carImg}/>
    </div>
  )
}

export default CarausalCard
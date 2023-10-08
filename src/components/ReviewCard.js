import React from 'react'
import { star } from '../assets/icons';

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='text-center max-w-sm info-text mt-6'>{feedback}</p>
        <div className='gap-2.5 flex justify-center items-center'>
            <img src={star} width={24} height={24} className='object-contain m-0'/>
            <p className='text-slate-gray text-xl font-montserrat'>({rating})</p>
        </div>
        <h3 className='text-3xl text-center font-bold font-palanquin mt-1'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard;
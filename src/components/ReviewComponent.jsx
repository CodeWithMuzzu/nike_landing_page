import React from 'react'
import { star } from '../assets/icons'

const ReviewComponent = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 max-w-md'>
            <img className='rounded-full w-28 h-28' src={imgURL} alt={`image of ${customerName}`} w />
            <p className='my-4 text-center font-light font-montserrat text-lg tracking-wide leading-normal'>{feedback}</p>
            <div className='flex my-3'>
                <img src={star} alt="star" width={24} height={24} ></img>
                <p className='font-light text-xl font-montserrat'
                >({rating})</p>
            </div>
            <h4 className='font-palanquin text-2xl font-bold'>{customerName}</h4>
        </div>
    )
}

export default ReviewComponent

import React from 'react'
import ReviewComponent from '../components/ReviewComponent'
import { reviews } from '../constants'

const CustomerReview = () => {
  return (
    <section className='flex  justify-center items-center flex-col '>
      <div className='flex flex-col justify-center items-center max-w-xl'>
        <h3 className='text-4xl font-bold font-palanquin text-center'>What Our <span className='text-coral-red'>Customers </span> Say?</h3>
        <p className='font-light leading-8 mt-3 text-center font-montserrat text-xl'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>

      <div className='flex mt-24 justify-center items-center flex-1 max-lg:flex-col flex-row gap-20'>
        {reviews.map((review)=>{
          return <ReviewComponent key={review.customerName}  imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        })}
      </div>
    </section>
  )
}

export default CustomerReview

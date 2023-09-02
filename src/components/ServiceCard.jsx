import React from 'react'

const ServiceCard = ({imgURL , label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 justify-center items-center bg-coral-red flex rounded-full' >
        <img src={imgURL} alt='imagelabel' width={24} height={24} />
      </div>
      <h3 className='text-3xl font-palanquin font-bold'>{label}</h3>
      <p className='font-light font-montserrat mt-3 break-words text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard

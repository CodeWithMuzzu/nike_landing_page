import React from 'react'


const ShoeCard = ({ imgURL, changeBigShoeImage, BigShoeImg }) => {

    const handleClick = () => {
        if (BigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-2 rounder-xl ${BigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm flex-1`}
            onClick={handleClick}>
            <div>
                <img src={imgURL.thumbnail} alt='shoe Collection' width={127} height={103} className='object-contain'></img>
            </div>
        </div>
    )
}

export default ShoeCard

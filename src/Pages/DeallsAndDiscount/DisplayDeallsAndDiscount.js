import React from 'react';
import './DeallsAndDiscount.css'

const DisplayDeallsAndDiscount = ({ discountTour }) => {
    const { img, place_title, days, years, ratting, desc, cost } = discountTour;
    return (
        <div className="card card-compact rounded w-full h-full bg-base-100 shadow-xl ">
            <div className='discount-img'>
                <img src={img} className='w-full h-full' alt="Shoes" />
            </div>
            <div className="discount-text p-5">
                <h1 className='text-white'>Hello world</h1>
                <div className='flex items-center justify-between'>
                    <h2 className="card-title text-white text-[25px]">{place_title}</h2>
                    <p className='text-[25px] font-semibold text-white'>{cost}</p>
                </div>
                <p className='text-white text-[18px] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum sapiente neque magni, ea dolore dolores.</p>
            </div>
        </div>
    );
};

export default DisplayDeallsAndDiscount;
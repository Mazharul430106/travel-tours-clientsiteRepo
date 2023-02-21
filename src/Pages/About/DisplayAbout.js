import React from 'react';
import { FaSmile } from 'react-icons/fa';

const DisplayAbout = ({ aboutdata }) => {
    const { img, place, cost, ratting } = aboutdata;
    return (
        <div className="card mb-20 card-compact rounded-none w-full bg-base-100 shadow-xl">
            <figure>
                <img className='h-full' src={img} alt="image not found"/>
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">{place}</h2>
                    <h3 className='font-bold'>{cost}</h3>
                </div>
                <h4 className='flex items-center gap-1'>
                    <FaSmile ></FaSmile>    
                    <span className='font-semibold'> {ratting}</span>
                </h4>
            </div>
           
        </div>
    );
};

export default DisplayAbout;

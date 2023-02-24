import React from 'react';
import { FaSmile, FaUndo, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayPerfectTours = ({ perfectTour }) => {
    const {img, place_title, days, years, ratting, desc, cost} = perfectTour;

    return (
        <div className="card card-compact w-full rounded-none bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <div className='flex justify-between items-center'>
                <h2 className="card-title text-2xl text-black">{place_title}</h2>
                <span className='text-2xl text-primary'>{cost}</span>
            </div>
            <div className='flex'>
                <FaSmile className='text-xl text-gray-400'></FaSmile>
                <span className='pl-2 text-[18px] text-gray-400'>{ratting}</span>
            </div>
            <p className='text-[18px] leading-[2rem] py-5 text-gray-500'> {desc.length > 50 ? <>{desc.slice(0, 80) + '....'} <Link to='' className='hover:text-blue-500'>Read More</Link></> : <>{desc}</>}</p>
            <hr />
            <div className='flex py-5'>
                <p className='flex items-center text-[18px]'>
                    <FaUndo className='text-gray-400'></FaUndo>
                    <span className='pl-1 text-gray-400'>{days}</span>
                </p>
                <p className='flex items-center ml-[-200px] text-[18px]'>
                    <FaUser className='text-gray-400'></FaUser>
                    <span className='pl-1 text-gray-400'>{years}</span>
                </p>
            </div>

        </div>
    </div>
    );
};

export default DisplayPerfectTours;
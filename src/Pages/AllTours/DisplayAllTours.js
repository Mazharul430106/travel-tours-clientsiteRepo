import React from 'react';
import { FaFacebookF, FaSmile, FaTwitter, FaUndo, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayAllTours = ({ allTour }) => {
    const { img, place_title, days, years, ratting, desc, cost } = allTour;
    return (
        
        <div className="card my-10 rounded card-side bg-base-100 shadow-xl">
            <figure><img src={img} className="lg:w-[450px] h-full" alt="Image Not Found" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{place_title}</h2>
                <div className='flex items-center'>
                    <FaSmile></FaSmile>
                    <span className='pl-2'>{ratting}</span>
                </div>
                <p>
                    {desc.length > 50 ? <>{desc.slice(0, 100) + '...'} <Link> Read More </Link></> : <>{desc}</>}
                </p>
                <div className='flex py-5'>
                    <span className='flex items-center'>
                        <FaUndo></FaUndo><span className='pl-2'>{days}</span>
                    </span>
                    <span className='flex items-center pl-8'>
                        <FaUser></FaUser><span className='pl-2'>{years}</span>
                    </span>
                </div>
                <hr className='pt-2' />
                <div className='flex items-center justify-between'>
                    <div className='flex items-center text-xl'>
                        <span className='text-teal-400 font-semibold'>{cost} </span>
                        <span className='pl-2'>Per Person</span>
                    </div>
                    <div className='flex item-center gap-5'>
                        <a href=""> <FaFacebookF className='text-blue-900'></FaFacebookF></a>
                        <a href=""> <FaTwitter className='text-sky-400'></FaTwitter></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DisplayAllTours;
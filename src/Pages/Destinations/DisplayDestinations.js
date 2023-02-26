import React from 'react';

const DisplayDestinations = ({ destination }) => {
    console.log(destination)
    const { name, picture } = destination;

    return (
        <div className="card rounded w-full glass">
            <figure><img src={picture} alt="image not found" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="py-[12px] text-[18px] px-4 text-white bg-teal-400 border-none rounded">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayDestinations;
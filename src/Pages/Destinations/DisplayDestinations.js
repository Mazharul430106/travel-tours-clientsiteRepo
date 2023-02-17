import React from 'react';

const DisplayDestinations = ({ destination }) => {
    console.log(destination)
    const { name, picture } = destination;

    return (
        <div className="card w-full glass">
            <figure><img src={picture} alt="image not found" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayDestinations;
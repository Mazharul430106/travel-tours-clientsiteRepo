import React, { useEffect, useState } from 'react';
import DisplayDestinations from './DisplayDestinations';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    return (
        <div className='px-[5%] py-5 pb-10'>

            <div className='text-center py-5 pb-10 '>
                <h1 className='title lg:text-5xl text-3xl font-semibold'>Select Your Destination</h1>
                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quia hic ducimus quam dolorum ullam omnis quod? Molestias maxime, <br /> distinctio minus consectetur iure est, aliquam sit porro esse neque ducimus.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    destinations.map(destination => <DisplayDestinations destination={destination}></DisplayDestinations>)
                }
            </div>
        </div>
    );
};

export default Destinations;
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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    destinations.map(destination => <DisplayDestinations destination={destination}></DisplayDestinations>)
                }
            </div>
        </div>
    );
};

export default Destinations;
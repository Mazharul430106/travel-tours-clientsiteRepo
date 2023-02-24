import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayPerfectTours from './DisplayPerfectTours';

const PerfectTours = () => {

    const [perfectTours, setPerfectTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/perfect_tour?title=perfect_tour')
            .then(res => res.json())
            .then(data => setPerfectTours(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className='text-center text-5xl font-semibold'>Find Your Perfect Tours</h2>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-[7%] py-20'>
                {
                    perfectTours.map(perfectTour => <DisplayPerfectTours key={perfectTour._id} perfectTour={perfectTour}></DisplayPerfectTours>)
                }
            </div>
            <div className='text-center pb-5'>
                <button className='border p-3 px-8 bg-blue-400 font-semibold text-white text-center text-xl uppercase'><Link>view all tours</Link></button>
            </div>
        </div>
    );
};

export default PerfectTours;
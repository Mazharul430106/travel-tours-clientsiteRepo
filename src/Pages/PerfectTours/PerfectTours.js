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
            <div className='text-center'>
                <h2 className='text-5xl font-semibold'>Find Your Perfect Tours</h2>
                <p className='pt-5 text-[20px] text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia officiis, totam optio saepe dolorum delectus expedita aliquam consectetur magni eligendi <br /> ratione soluta ullam? Recusandae iste possimus ab nemo quasi quae, tempora placeat aperiam perferendis. Exercitationem quasi rerum!</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-20'>
                {
                    perfectTours.map(perfectTour => <DisplayPerfectTours key={perfectTour._id} perfectTour={perfectTour}></DisplayPerfectTours>)
                }
            </div>
            <div className='text-center pb-20'>
                <button className='border p-3 px-8 bg-teal-400 rounded font-semibold text-white text-center text-xl uppercase'><Link to='/allTours'>view all tours</Link></button>
            </div>
        </div>
    );
};

export default PerfectTours;
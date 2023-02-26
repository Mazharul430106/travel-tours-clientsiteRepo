import React, { useEffect, useState } from 'react';
import DisplayAllTours from './DisplayAllTours';
import HeroAllTour from '../../asets/Images/hero-alltours.jpg';

const AllTours = () => {
    const [allTours, setAllTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allTours')
            .then(res => res.json())
            .then(data => setAllTours(data))
    }, [])
    return (
        <div>
            <div>
                <img src={HeroAllTour} className="w-full" alt="" />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-[7%]'>
                <div className='col-span-2'>
                    {
                        allTours.map(allTour => <DisplayAllTours key={allTour._id} allTour={allTour}></DisplayAllTours>)
                    }
                </div>
                <div className='col-span-1'>
                    <h1>This is aside</h1>
                </div>
            </div>
        </div>
    );
};

export default AllTours;
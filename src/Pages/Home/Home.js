import React from 'react';
import DeallsAndDiscount from '../DeallsAndDiscount/DeallsAndDiscount';
import PerfectTours from '../PerfectTours/PerfectTours';
import PopularTours from '../PopularTours/PopularTours';
import Sliders from '../Sliders/Sliders/Sliders';

const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <div className='px-[7%]'>
                <PopularTours></PopularTours>
                <DeallsAndDiscount></DeallsAndDiscount>
                <PerfectTours></PerfectTours>
            </div>
        </div>
    );
};

export default Home;
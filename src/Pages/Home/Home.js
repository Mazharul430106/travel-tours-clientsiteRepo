import React from 'react';
import PerfectTours from '../PerfectTours/PerfectTours';
import PopularTours from '../PopularTours/PopularTours';
import Sliders from '../Sliders/Sliders/Sliders';

const Home = () => {
    return (
        <div>
           <Sliders></Sliders>
           <PopularTours></PopularTours>
           <PerfectTours></PerfectTours>
        </div>
    );
};

export default Home;
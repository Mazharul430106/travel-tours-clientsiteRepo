import React, { useEffect, useState } from 'react';
import DisplayPopularTours from './DisplayPopularTours';

const PopularTours = () => {
    const [popularTours, setPopularTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/popularTours?title=popular_tour')
            .then(res => res.json())
            .then(data => setPopularTours(data))
    }, [])

    return (
        <div>
            <div className='py-16 text-center'>
                <h1 className='text-5xl font-semibold'>Most Popular Tours</h1>
                <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel repellat officia tempore consequuntur omnis sapiente cumque accusantium error molestiae eos et itaque a laborum <br /> temporibus distinctio veniam eligendi nobis, dicta nulla dolorum magnam animi rem. Optio quod, delectus fugiat laudantium libero tenetur dignissimos architecto.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-[7%] py-5 pb-20'>
                {
                    popularTours.map(ppTour => <DisplayPopularTours key={ppTour._id} popularTours={ppTour}></DisplayPopularTours>)
                }
            </div>
        </div>
    );
};

export default PopularTours;
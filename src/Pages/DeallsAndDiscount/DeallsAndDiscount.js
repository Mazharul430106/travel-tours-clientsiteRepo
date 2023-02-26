import React, { useEffect, useState } from 'react';
import DisplayDeallsAndDiscount from './DisplayDeallsAndDiscount';

const DeallsAndDiscount = () => {
    const [discountTours, setDiscountTours] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/discountTours?title=discount_tour')
            .then(res => res.json())
            .then(data => setDiscountTours(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            <div className='col-span-2'>
                <div>
                    <h2 className='text-5xl font-semibold lg:text-left text-center'>Deals & Discount </h2>
                    <p className='pt-5 text-[20px] text-gray-500 lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam minima impedit ratione ut tempora. Cupiditate, culpa sit! Nam animi asperiores accusantium nisi explicabo consectetur.</p>
                </div>
                <div className='grid lg:grid-rows-1 lg:grid-flow-col gap-5 py-10 pb-20'>
                    {
                        discountTours.map(discountTour => <DisplayDeallsAndDiscount key={discountTour._id} discountTour={discountTour}></DisplayDeallsAndDiscount>)
                    }
                </div>
            </div>
            <div className='col-span-1'>

                <h1>This is good</h1>
            </div>
        </div>
    );
};

export default DeallsAndDiscount;
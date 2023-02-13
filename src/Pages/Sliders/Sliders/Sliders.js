import React from 'react';
import image1 from '../../../asets/Images/img1.jpg'
import image2 from '../../../asets/Images/img2.jpg'
import image3 from '../../../asets/Images/img3.jpg'
import image4 from '../../../asets/Images/img4.jpg'
import Slides from '../Slides/Slides';


const Sliders = () => {

    const sliderItems = [
        {
            image: image1,
            prev: 5,
            id : 1,
            next : 2
        },
        {
            image: image2,
            prev: 1,
            id : 2,
            next : 3
        },
        {
            image: image3,
            prev: 2,
            id : 3,
            next : 4
        },
        {
            image: image4,
            prev: 3,
            id : 4,
            next : 1
        },
    ]


    return (
        <div className='carousel w-full'>
            {
                sliderItems.map(sliderItem=> <Slides key={sliderItem.id} sliderItem={sliderItem}></Slides>)
            }
        </div>
    );
};

export default Sliders;
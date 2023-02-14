import React from 'react';
import image1 from '../../../asets/Images/img1.jpg'
import image2 from '../../../asets/Images/img2.jpg'
import image3 from '../../../asets/Images/img3.jpg'
import image4 from '../../../asets/Images/img4.jpg'
import image5 from '../../../asets/Images/img5.jpg'
import image6 from '../../../asets/Images/img6.jpg'
import image7 from '../../../asets/Images/img7.jpg'
import Slides from '../Slides/Slides';


const Sliders = () => {

    const sliderItems = [
        {
            image: image1,
            prev: 7,
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
            next : 5
        },
        {
            image: image5,
            prev: 4,
            id : 5,
            next : 6
        },
        {
            image: image6,
            prev: 5,
            id : 6,
            next : 7
        },
        {
            image: image7,
            prev: 6,
            id : 7,
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
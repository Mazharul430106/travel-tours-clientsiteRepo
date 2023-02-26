import React, { useEffect, useState } from 'react';
import DisplayPopularTours from './DisplayPopularTours';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PpTours from './PpTours.css';
import Slider from 'react-slick';

const PopularTours = () => {
    const [popularTours, setPopularTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/popularTours?title=popular_tour')
            .then(res => res.json())
            .then(data => setPopularTours(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div>
            <div className='py-16 text-center'>
                <h1 className='text-5xl font-semibold'>Most Popular Tours</h1>
                <p className='pt-5 text-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel repellat officia tempore consequuntur omnis sapiente cumque accusantium error <br /> molestiae eos et itaque a laborum temporibus distinctio veniam eligendi nobis, dicta nulla dolorum magnam animi rem Optio quod.</p>
            </div>
            <div className='py-5 pb-20'>
                <Slider {...settings}>
                    {
                        popularTours.map(ppTour => <div className='p-4'><DisplayPopularTours key={ppTour._id} popularTours={ppTour}></DisplayPopularTours></div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default PopularTours;
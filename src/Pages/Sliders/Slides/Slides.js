import React from 'react';

const Slides = ({ sliderItem }) => {
    const { image, id, prev, next } = sliderItem;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={image} alt='' className="w-full h-[700px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Slides;
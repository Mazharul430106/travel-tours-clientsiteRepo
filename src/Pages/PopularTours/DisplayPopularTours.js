import React from 'react';

const DisplayPopularTours = ({ popularTours }) => {
    const { img, place_title, cost, days, years, title, ratting } = popularTours;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl rounded-none">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{place_title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default DisplayPopularTours;
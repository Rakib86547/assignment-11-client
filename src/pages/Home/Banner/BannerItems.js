import React from 'react';
import './BannerItems.css';

const BannerItems = ({slide}) => {
    const {img, id, next, prev} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="slide-image">
                <img src={img} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-[35%]">
                <h1 className='text-5xl font-bold text-white'>
                    Albert law firm
                </h1>
            </div>

            <div className="absolute flex justify-end left-5 transform -translate-y-1/2 top-[45%]">
                <p className='text-xl text-white'>
                   We are leading law firm in financial and business. <br />
                   With more than 20 years of experience
                </p>
            </div>

            <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-5 top-[65%]">
               
                <button className="btn btn-secondary">Contact Now</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;
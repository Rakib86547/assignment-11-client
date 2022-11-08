import React from 'react';
import image1 from '../../../assest/banner/1.jpg';
import image2 from '../../../assest/banner/2.jpg';
import BannerItems from './BannerItems';


const Banner = () => {
    const bannerlSlide = [
        {
            img: image1,
            prev: 2,
            id: 1,
            next: 2
        },
        {
            img: image2,
            prev: 1,
            id: 2,
            next: 2
        }
    ]
    return (
        <div className="carousel w-full">
             {
                bannerlSlide.map(slide => <BannerItems
                key={slide.id}
                slide={slide}
                ></BannerItems>)
             }
        </div>
    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
    const { image, title, details, _id, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                   <img className='cursor-pointer' src={image} alt="" />
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <h3 className='text-red-500 font-bold'>{price}</h3>
                <p className='font-semibold'>
                    {
                        details.length > 100 ? <p>{details.slice(0, 100)}<span>....</span></p> : { details }
                    }
                </p>
                <div className="card-actions justify-start">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
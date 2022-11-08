import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const { image, title, details, } = useLoaderData();
    return (
        <div className='w-[90%] mx-auto'>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                <h2 className="card-title font-bold block mt-10 text-4xl">{title}</h2>
                   
                    </figure>
                <div className="card-body">
                <img className='w-full mx-auto h-[550px]' src={image} alt="Shoes" />
                    <p className='font-semibold'>
                        {details}
                    </p>
                    <div className="card-actions justify-center">
                        <Link to='/all_services'>
                            <button className="btn btn-primary">Services</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;
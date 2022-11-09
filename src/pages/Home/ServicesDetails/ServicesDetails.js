import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const { image, title, details, review } = useLoaderData();
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

            <div className='my-14'>
                <h1 className='text-center font-semibold text-3xl'>Review for this Service</h1>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={review.image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">{review.name}</h4>
                               
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                            
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>{review.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;
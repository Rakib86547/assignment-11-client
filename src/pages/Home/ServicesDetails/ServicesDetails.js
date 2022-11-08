import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const { image, title, details, _id } = useLoaderData();
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className='font-semibold'>
                        {details}
                    </p>
                    <div className="card-actions justify-start">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">Services</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;
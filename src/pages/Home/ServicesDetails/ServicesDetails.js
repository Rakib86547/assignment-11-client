import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const ServicesDetails = () => {
    const { image, title, details, review } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const photoURL = user?.photoURL;
        const review = form.review.value;

        const reviews = {
            providerName: name,
            email,
            photoURL,
            review,
            serviceName: title,
            serviceImage : image
        };
        fetch('https://assignment-11-server-ecru-gamma.vercel.app/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                toast.success('Thank you for your review')
                form.reset()
            }
            
            console.log(data)
        })
        .catch(err => console.error(err))
    }
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

            <div className='mb-10'>
                <h1 className='text-center text-3xl font-bold my-10'>Add Your Review</h1>
                <div>
                    <form onSubmit={handleReview}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered input-primary w-full" />

                            <input name='email' type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered input-primary w-full" />

                            <input name='photoURL' type="text" placeholder="photURL" defaultValue={user?.photoURL} readOnly className="input input-bordered input-primary w-full" />
                        </div>
                        <textarea name='review' className="textarea textarea-bordered h-24 w-full mt-2" placeholder="review"></textarea>
                        {
                            user?.email ? <>
                            <button className='btn btn-primary'>Add Review</button>
                           
                            </> :
                            <p>
                                Please Login to add review <Link to='/login' className='text-green-600 font-semibold'>Login</Link>
                            </p>
                        }
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;
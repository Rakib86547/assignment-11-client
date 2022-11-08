import React from 'react';
import image from '../../../assest/about/1.jpg';

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-[90%] mx-auto my-10'>
            <div className='p-10'>
                <h1 className='text-4xl font-bold text-blue-600'>About Albert</h1>
                <p className='font-semibold mt-5'>
                    We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <button className="btn btn-outline btn-secondary mt-10">Learn More</button>
            </div>

            <div>
                <img className='rounded-xl' src={image} alt="" />
                
            </div>
        </div>
    );
};

export default About;
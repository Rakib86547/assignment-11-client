import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-ecru-gamma.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='w-[90%] mx-auto'>
            <div className='text-center mt-14'>
                <h3 className='text-blue-600 font-bold'>Services</h3>
                <h1 className='text-4xl font-bold'>Provide Best Services</h1>
            </div>
            <div className='my-14 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center mb-10'>
                <Link to='/all_services'>
                    <button className='btn btn-outline btn-secondary'>See All Services <FaArrowRight className='ml-2' />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    useTitle('All_Services')
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all_services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-center text-blue-600 font-bold mt-10 text-4xl'>All Services</h1>
            <div className='my-14 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    allServices.map(services => <AllServicesCard
                    key={services._id}
                    services={services}
                    ></AllServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;
import React, { useEffect, useState } from 'react';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all_services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            <h1>all: {allServices.length}</h1>
        </div>
    );
};

export default AllServices;
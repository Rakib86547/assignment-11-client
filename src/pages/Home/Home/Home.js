import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Success from '../Success/Success';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Success></Success>
        </div>
    );
};

export default Home;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Share/Footer/Footer';
import Headers from '../../pages/Share/Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';

const Success = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow grid grid-cols-1 lg:grid-cols-5 gap-5 text-center mb-10 w-[90%] mx-auto">

            <div className="stat">
                <div className="stat-value">900</div>
                <div className="stat-title">Solved Cases</div>
            </div>

            <div className="stat">
                <div className="stat-value">98%</div>
                <div className="stat-title">Winning Cases</div>
            </div>

            <div className="stat">
                <div className="stat-value">300</div>
                <div className="stat-title">Happy Clients</div>
            </div>
            <div className="stat">
                <div className="stat-value">100</div>
                <div className="stat-title">Award Winning</div>
            </div>
            <div className="stat">
                <div className="stat-value">700</div>
                <div className="stat-title">Cup Coffee</div>
            </div>

        </div>
    );
};

export default Success;
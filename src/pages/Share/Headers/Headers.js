import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUniversity } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Headers = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const headerMenu = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-bold'><Link to='/reviews'>My Reviews</Link></li>
                    <li className='font-bold'><Link to='/add_service'>Add Service</Link></li>
                    <li className='font-bold'><Link><button onClick={handleSignOut}>Log Out</button></Link></li>
                </>
                :
                <li className='font-bold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {headerMenu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-4xl">
                    <FaUniversity />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {headerMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div>
        </div>

    );
};

export default Headers;
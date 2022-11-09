import React from 'react';
import { Link } from 'react-router-dom';
import {FaGoogle, FaGithub} from 'react-icons/fa';
import image from '../../assest/login/11.png';
const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left w-1/2">
                            
                            {image}
                        </div>
                        <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className='flex justify-center text-4xl'>
                                    <button><FaGoogle className='mr-4'/></button>
                                    <button> <FaGithub/></button>
                                </div>
                                <p className='text-center'>Don`t have an account? <Link to='/signup' className='text-blue-500'>Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
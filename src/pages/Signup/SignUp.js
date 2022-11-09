import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        createUser(email, photoURL, password)
        .then((result) => {
            const user = result.user;
            form.reset();
            setSuccess(true);
            console.log(user);
        })
        .catch(error => console.error(error))
        console.log(email, password, photoURL);
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left w-1/2">

                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phot Url</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered" required/>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                </div>
                                <p className='text-green-600'>
                                    {success && <span>Sign Up Successfully</span>}
                                </p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                                <p className='text-center'>Already have an account? <Link to='/signup' className='text-blue-500'>Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
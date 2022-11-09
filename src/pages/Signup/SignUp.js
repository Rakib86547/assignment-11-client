import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
   const {createUser} = useContext(AuthContext);

   const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(photoURL, email, password)
    .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
    })
    .catch(err => console.error(err))
    console.log(name, photoURL, email, password);
   }
    return (
        <div className="hero ">
            <div className="hero-content w-[40%]">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />
                        </div>
                        <p className='text-center'>Already have an account? <Link to='/login' className='text-green-600'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
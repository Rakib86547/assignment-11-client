import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';



const Login = () => {
    useTitle('Login');
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                
                const currentUser = {
                    email: user.email
                }
                fetch('https://assignment-11-server-ecru-gamma.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('albert-token', data.token);
                        navigate(from, { replace: true })
                    })
            })
            .catch(err => console.error(err));
    }

    const handleGoogleSign = (provider) => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;

                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="hero ">
            <div className="hero-content w-[40%]">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                       
                        <p className='text-center'>Don`t` have an account? <Link to='/signup' className='text-green-600'>Sign Up</Link></p>
                    </form>
                    <div className='text-3xl flex justify-center pb-7'>
                            <button onClick={handleGoogleSign}><FaGoogle className='text-red-600' /></button>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
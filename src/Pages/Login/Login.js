import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {

        event.preventDefault()

        const password = event.target.password.value;
        const email = event.target.email.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password)

    }

    if (user) {
        navigate(from, { replace: true });
    }

    console.log(user)

    return (
        <div className='my-12'>
            <h1 className='text-2xl font-bold text-center'>Welcome to Face App</h1>
            <div className='flex justify-center items-center mb-10'>
                <div className="card w-96 bg-gray-200 shadow-xl">
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">Login</h2>


                        <form onSubmit={handleLogin} >


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>

                                <input type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    className="input input-bordered w-full max-w-xs"

                                />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>

                                <input type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <input className='btn  w-full max-w-xs' type="submit" value="Login" />
                        </form>

                        <p className='text-lg'><small>Don't Have Account? <Link className='text-error font-semibold' to='/register'>Register</Link ></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
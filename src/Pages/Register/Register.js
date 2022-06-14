import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleRegister = async (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        console.log(name, email, password)

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })

    }

    if (user) {
        navigate('/')
    }


    console.log(user)
    console.log(error)

    return (
        <div className='flex justify-center items-center my-12'>
            <div className="card w-96 bg-gray-200 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form onSubmit={handleRegister} >


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>

                            <input type="text"
                                placeholder="Your Name"
                                name='name'
                                className="input input-bordered w-full max-w-xs"

                            />

                        </div>
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






                        <input className='btn  w-full max-w-xs' type="submit" value="Register" />
                    </form>

                    <p className='text-lg'><small>Already Have Account? <Link className='text-error font-semibold' to='/login'>Login</Link ></small></p>




                </div>
            </div>
        </div>
    );
};

export default Register;
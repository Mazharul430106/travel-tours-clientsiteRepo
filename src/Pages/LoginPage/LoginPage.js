import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="hero my-12 mt-32">
            <div className="hero-content lg:w-[550px] w-full flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form action="">
                            <h1 className='text-3xl text-center font-bold'>Login Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>

                        <div className='form-control'>
                            <button className='btn btn-primary'>Login With Google</button>
                        </div>
                        <div className='flex justify-between'>
                            <span>Create an account</span>
                            <span><Link to='/register'>Please Register</Link></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const LoginPage = () => {

    const { register, handleSubmit } = useForm();
    const { signInUser, logInWithGoogle } = useContext(AuthContext);
    const loginSubmitForm = (data) => {
        // console.log(data);

        signInUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            
        })
        .catch(error=> {
            console.log(error)
        })
    }

    const handleGoogleLogin = ()=>{
        logInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error=> {
            console.log(error)
        })
    }



    return (
        <div className="hero my-12 mt-32">
            <div className="hero-content lg:w-[550px] w-full flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(loginSubmitForm)}>
                            <h1 className='text-3xl text-center font-bold'>Login Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register('name', { required: true })} placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register('password', { required: true })} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-teal-400 border-none">Login</button>
                            </div>
                        </form>

                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>

                        <div className='form-control'>
                            <button onClick={handleGoogleLogin} className='btn bg-teal-400 border-none'>Login With Google</button>
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
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider';

const RegisterPage = () => {

    const {register, handleSubmit} = useForm();
    const {createUser} = useContext(AuthContext);
    // console.log(createUser);

    const registerSubmitForm = (data)=> {
        // console.log(data)

        createUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user); 
        })
        .catch(error=> {
            console.log(error);
        })
    }

    return (
        <div className="hero my-12 mt-32 ">
            <div className="hero-content lg:w-[550px] w-full flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(registerSubmitForm)}>
                            <h1 className='text-3xl text-center font-bold'>Register Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name",{required: true})} placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", {required: true})} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", {required: true})} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-teal-400 border-none">Register</button>
                            </div>
                        </form>
                        <div className='flex justify-between'>
                            <span>All ready have an account</span>
                            <span><Link to='/login'>Please login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
import React from 'react';
import aboutImg from '../../asets/Images/aboutUs.jpg';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section className='bg-section'>
                <img className='w-full' src={aboutImg} alt="" />

            </section>
            <section>
                <div className='flex justify-between px-[5%] bg-gray-200 py-6'>
                    <h1 className=' text-xl'> Travel-Tour / About Us</h1>
                    <div className='flex items-center'>
                        <FaFacebookF></FaFacebookF> <span className='px-2'> <Link href=""> facebook</Link></span>
                        <FaTwitter></FaTwitter> <span className='pl-2'><Link href=""> twitter</Link></span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
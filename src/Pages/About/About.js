import React, { useEffect, useState } from 'react';
import aboutImg from '../../asets/Images/aboutUs.jpg';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DisplayAbout from './DisplayAbout';

const About = () => {

    const [aboutdatas, setAboutdatas] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/aboutUs')
        .then(res=> res.json())
        .then(data=> setAboutdatas(data))
    },[])

    return (
        <div>
            <section className='about-hero-section'>
                <img className='w-full' src={aboutImg} alt=""/>
            </section>
            <section className='about-text-section bg-slate-100'>
                <div className='flex justify-between px-[7%] bg-gray-200 py-6'>
                    <h1 className='text-xl'>Travel-Tour / About Us </h1>
                    <div className='flex items-center'>
                        <FaFacebookF className="text-blue-900"></FaFacebookF> <span className='px-2'> <Link> facebook</Link></span>
                        <FaTwitter className='text-blue-500'></FaTwitter> <span className='pl-2'><Link> twitter</Link></span>
                    </div>
                </div>
            </section>

            <section className='px-[7%] pt-24 pb-20'>
                <div className='grid grid-flow-row-dense lg:grid-cols-3 gap-10'>
                    <div className='lg:col-span-2'>
                        <h1 className="lg:text-4xl text-3xl font-bold pb-5">About Us</h1>
                        <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maxime. Ab eum quia eligendi, suscipit sapiente qui delectus officia animi perferendis non ut molestias magni, quis expedita? Fugiat soluta animi incidunt deserunt sint voluptas blanditiis quaerat pariatur illum! Vitae, a perferendis animi dolor, eum cumque sed laudantium et nemo ullam reiciendis deserunt iusto libero doloremque architecto saepe quam quaerat exercitationem, aspernatur eveniet. Eum voluptatem veniam corrupti hic nobis porro molestiae quod nostrum, eveniet assumenda, reprehenderit exercitationem saepe, sed similique? Nulla, aspernatur libero error quae voluptate autem ipsam quisquam dignissimos assumenda eius quia est tempore minima quas cupiditate maiores vitae dolor.</p><br />
                        <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus sunt fugit aperiam hic iste, unde explicabo expedita eum autem, cumque ipsam nemo fuga quod. Sunt cumque neque consectetur. Maiores cum alias quia enim quod cupiditate vel debitis nam nesciunt. Magni, nam nulla pariatur quod et incidunt natus illo exercitationem molestiae vero. Quidem, necessitatibus! Vel recusandae natus saepe aliquid aperiam!</p>

                        <br />
                        <p className="text-zinc-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit soluta, incidunt consequuntur explicabo laudantium repellat sapiente iure eligendi aliquam quia enim excepturi magnam molestias maxime, quis recusandae sit quam quo, culpa quae assumenda minus eos? Nulla quo ullam iusto et sequi doloribus quisquam molestias, sed labore unde dicta sunt ratione perspiciatis tempora corporis, neque libero soluta non magnam accusamus! Error officia earum quae vitae consectetur maxime vero in omnis ipsam quo et ut, rem quaerat dolores praesentium minus ab illum.</p>
                    </div>
                    <div className=''>
                        <div>
                            <iframe className='w-full h-[300px] rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239749035!2d90.27919580478637!3d23.780887453399934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1676804212874!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
                        </div>
                        <h2 className='text-2xl font-semibold py-5 pt-7'>Bangladesh Office</h2>
                        <div className=''>
                            <p className='className="text-zinc-500"'>302/5 Mirpur Dhaka Bangladesh</p>
                            <p className='pt-2 className="text-zinc-500"'>Phone : <span> +88 017-66430106</span></p>
                            <p className='pt-2 className="text-zinc-500"'>Fax : <span> +88 (0) 303 0000 002</span></p>
                            <p className='pt-2 className="text-zinc-500"'>Email : <span>travelTours106@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-[7%]'>
                <div>
                    <h1 className='text-3xl font-bold pb-5'>We Are Suggested</h1>
                    <hr className='py-5' />
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        aboutdatas.map(aboutdata=> <DisplayAbout key={aboutdata._id} aboutdata={aboutdata}></DisplayAbout>)
                    }
                </div>

            </section>


             


        </div>
    );
};

export default About;
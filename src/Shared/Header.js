import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../asets/Images/logo.png';
const Header = () => {

    const menuItems = [
        <li><Link to='/'>HOME</Link></li>,
        <li><Link to='/about'>ABOUT</Link></li>,
        <li tabIndex={0}>
            <Link className="justify-between" to='/pages'>PAGES</Link>
            <ul className="p-2">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
            </ul>
        </li>,
        <li><Link to='/destination'>DESTINATIONS</Link></li>,
        <li><Link to='/register'>REGISTER</Link></li>,
        <li><Link to='/login'>LOGIN</Link></li>,
    ]

    return (
        <div className="navbar bg-base-100 px-[7%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <span className='pr-2'>
                        <img className='w-[30px]' src={Logo} alt="" /> 
                    </span>
                    Travel-Tour
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;
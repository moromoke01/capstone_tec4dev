import React, { Component,useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Logo from '../../Assets/Insightify Logo.png'; // Import your logo image
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

        return (
            <nav className='bg-gray-100 py-6 px-5 flex items-center justify-between shadow-md relative font-bold text-xl'>
                <div className='flex items-center cursor-pointer' onClick={handleClick}>
                    <img src={Logo} width={60} height={60} alt="Logo" />
                    <h2 className='text-purple-800 text-sm ml-3'>...the best online career compass</h2>
                </div>
                <div className='hidden md:flex items-center space-x-8'>
                    {MenuItems.map((item, index) => (
                        <a key={index} className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {clicked ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <div className={`${clicked ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-purple-500 text-white flex-col items-center py-5 space-y-3 z-10 md:hidden`}>
                    {MenuItems.map((item, index) => (
                        <a key={index} className={item.cName} href={item.url} onClick={handleClick}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </nav>
        );
    };
    
    export default Navbar;
    
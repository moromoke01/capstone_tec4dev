import React, { Component, useState } from 'react';
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
    <nav className='h-28 text-3xl font-bold p-4 px-8 shadow-md bg-gray-100 flex items-center justify-between'>
    <div className='flex items-center cursor-pointer' onClick={handleClick}>
        <img src={Logo} width={100} height={100} alt="Logo" className="mr-3 pointer flex ml-3 items-center flex-col" />
        <h2 className='text-lg font-normal text-left text-[#09070A] leading-5 mt-0.75rem'>...the best online career compass</h2>
    </div>
    <div className='flex sm:hidden items-center space-x-6 px-6'>
        {MenuItems.map((item, index) => (
            <a key={index} className={item.cName} href={item.url}>
                {item.title}
            </a>
        ))}
    </div>
    <div className='md:hidden ' onClick={handleClick}>
        {clicked ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
    </div>
    <div className={`${clicked ? 'flex-col' : 'hidden'} absolute flex-col top-3 mt-20 left-0 w-full bg-[#9C13BE] text-white items-center py-5 space-y-3 z-1 `}>
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
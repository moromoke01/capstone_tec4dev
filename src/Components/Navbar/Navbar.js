import React, { useState,useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../../Assets/Insightify Logo.png';

const Navbar = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isDesktopViewActive, setIsDesktopViewActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };
  const checkWindowSize = () => {
    if (window.innerWidth > 768) {
      setIsDesktopViewActive(true);
    } else {
      setIsDesktopViewActive(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <header className="bg-white items-stretch w-full fixed top-0 ">
      <nav className="h-[60px] w-auto mx-auto flex justify-between items-center ">
        {/* Logo and hamburger icon */}
        <div className="flex mr-8 items-center cursor-pointer" onClick={handleHamburgerClick}>
          <img src={Logo} width={100} height={100} alt="Logo" />
          <h2 className="text-sm mr-8 font-medium ml-3">...the best online career compass</h2>
        </div>
        {/* Desktop menu */}
        {isDesktopViewActive && (
          <div className="ml-12 mr-0 items-end justify-between text-black items-center py-5 space-y-3">
            <a className="hover:text-bg-[9C13BE] px-2 mx-2" href="/">Homes</a>
            <a className="hover:text-bg-[9C13BE] px-2 mx-2" href="/">Explore</a>
            <a className="hover:text-bg-[9C13BE] px-2 mx-2" href="/">Result</a>
            <a className="hover:text-bg-[9C13BE] px-2 mx-2"href="/">Contact Us</a>
            <a className="hover:text-bg-[9C13BE] px-2 mx-2" href="/">Contact Us</a>
            <a href="/signUp" className="text-white bg-[#9C13BE] px-6 py-2 rounded-md font-bold mb-5">Sign Up</a>
            <a href="/signUp" className="text-black bg-outline-[#9C13BE] px-6 py-2 rounded-md font-bold mb-5">Take Test</a>

          </div>
        )}
        {/* Mobile menu toggle icon */}
        <div className="md:hidden" onClick={handleHamburgerClick}>
          {isHamburgerActive ? <AiOutlineClose size={30} color="black" /> : <AiOutlineMenu size={30} color="black" />}
        </div>
        {/* Mobile menu */}
        {isHamburgerActive && (
          <div className="absolute  top-full    w-full bg-white text-black  flex-col items-center py-5 space-y-3 md:hidden">
            <a className="block w-full  mb-4 px-[40%] hover:text-bg-[#9C13BE]" href="/">Home</a>
            <a className="block w-full mb-4 px-[40%]  hover:text-bg-[#9C13BE]" href="/">Explore</a>
            <a className="block w-full mb-4 px-[40%]  hover:text-bg-[#9C13BE]" href="/">Result</a>
            <a className="block w-full mb-4 px-[40%]  hover:text-bg-[#9C13BE]" href="/">About </a>
            <a className="block w-full mb-5  px-[40%]  hover:text-bg-[#9C13BE]" href="/">Contact </a>
            <a href="/signUp" className="block text-white  mb-5 mx-[40%] mt-4 bg-purple-600 rounded-md font-bold " onClick={handleHamburgerClick}>Sign Up</a>      
            <a href="/signUp" className=" block w-full mb-5  px-[40%] mt-4 border-purple-600 rounded-md font-bold " onClick={handleHamburgerClick}>Take Test</a>          
            </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
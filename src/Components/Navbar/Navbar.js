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
    <header className="ml-0 pr- bg-white  w-full fixed top-0 ">
      <nav className="h-[60px] ml-0 mr-8  flex justify-between items-center ">
        {/* Logo and hamburger icon */}
<<<<<<< HEAD
        <div className="flex flex-cols mr-8 items-center cursor-pointer" onClick={handleHamburgerClick}>
=======
        <div className="flex-col ml-4 mr-0 items-center cursor-pointer" onClick={handleHamburgerClick}>
>>>>>>> upstream/main
          <img src={Logo} width={100} height={100} alt="Logo" />
          <h2 className="text-sm mr-8 font-medium ml-3">...the best online career compass</h2>
        </div>
        {/* Desktop menu */}
        {isDesktopViewActive && (
          <div className="ml-12 mr-0 items-end justify-between text-black items-center py-5 space-y-3">
            <a className="hover:text-bg-[9C13BE] px-2 font-bold  text-md mx-2" href="/">Home</a>
            <a className="hover:text-bg-[9C13BE] px-2 font-bold  text-md mx-2" href="/Explore">Explore</a>
            <a className="hover:text-bg-[9C13BE] px-2 font-bold text-md mx-2" href="/Result">Result</a>
            <a className="hover:text-bg-[9C13BE] px-2 font-bold text-md mx-2"href="/About">About Us</a>
            <a className="hover:text-bg-[9C13BE] px-2 font-bold text-md mx-2" href="/Contact">Contact Us</a>
            <button className="text-white bg-[#9C13BE] text-md px-6 py-2.5 rounded-md font-bold mb-5"><a href="/signUp" >Sign Up</a></button>
            <button class="relative mx-5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="/signUp" >Take Test</a>
              </span>
              </button>
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
            <a className="block w-full mb-4 px-[40%]  hover:text-bg-[#9C13BE]" href="/Explore">Explore</a>
            <a className="block w-full mb-4 px-[40%]  hover:text-bg-[#9C13BE]" href="/Result">Result</a>
            <a className="block w-full mb-4 px-[40%]  hover:text-bg-[#9C13BE]" href="/About">About Us </a>
            <a className="block w-full mb-5  px-[40%]  hover:text-bg-[#9C13BE]" href="/Contact">Contact </a>
            <button className="block  mx-[38%] text-white bg-[#9C13BE] text-md px-6 py-2.5 rounded-md font-bold mb-5"><a href="/signUp" >Sign Up</a></button>
            <button class="block relative mx-[38%] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="/signUp" >Take Test</a>
              </span>
              </button>            </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

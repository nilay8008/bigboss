'use client';

import LogoImage from '../assets/icons/man.svg';
import MenuIcon from '../assets/icons/menu.svg';
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="px-4">
        <div className="hidden md:flex items-center justify-center fixed z-[999] w-full mt-4">
          <motion.div
            className="flex p-1 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="py-4 flex items-center justify-between">
              <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
                <MenuIcon className="text-white" />
              </div>
              <nav className='text-white gap-6 items-center hidden sm:flex'>
                <a href="#about" className='text-opacity-100 text-white hover:text-opacity-100 transition'>About Me</a>
                <a href="#features" className='text-opacity-100 text-white hover:text-opacity-100 transition'>Features</a>
                <a href="#updates" className='text-opacity-100 text-white hover:text-opacity-100 transition'>Updates</a>
                <a href="#shop" className='text-opacity-100 text-white hover:text-opacity-100 transition'>Shop</a>
                <a href="#customers" className='text-opacity-100 text-white hover:text-opacity-100 transition'>Customers</a>
                <a href="#offers" className='text-opacity-100 text-white hover:text-opacity-100 transition'>Offers</a>
                <a href="#franchise" className='text-opacity-100 text-white hover:text-opacity-100 transition'>Franchise</a>
                <button className='py-2 px-4 rounded-lg text-white text-opacity-100'>Book An Appointment</button>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

  return (
    <nav className='py-4 w-full h-[15%] items-center px-4 bg-sky-700 text-gray-100 flex justify-between'>
        <span className=' z-10 text-gray-100 text-3xl font-bold'>Angozi Lab</span>
        <ul className={!nav ? "hidden md:flex" : ' absolute top-0 left-0 w-full h-screen bg-sky-700 flex flex-col justify-center items-center text-gray-100'}>
            <li className=' py-6 text-4xl md:text-2xl hover:border-b-2'><a href="/">Home</a></li>
            <li className=' py-6 text-4xl md:text-2xl hover:border-b-2'><a href="/about">About</a></li>
            <li className=' py-6 text-4xl md:text-2xl hover:border-b-2'><a href="/Experience">Skill</a></li>
            <li className=' py-6 text-4xl md:text-2xl hover:border-b-2'><a href="/work">Experience</a></li>
            <li className=' py-6 text-4xl md:text-2xl hover:border-b-2'><a href="/contact">Contact</a></li>
        </ul>
       {!nav ? <FaBars className=' md:hidden z-10 text-gray-100 ' onClick={handleClick} size={30}/> : 
        <FaTimes className=' md:hidden text-gray-100 z-10' size={30} onClick={handleClick}/>}
        <ul className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-sky-300 duration-300'>
            <a href="https://www.linkedin.com/in/ochuko-angozi-738113250" target="_blank" className=' flex justify-between items-center w-full text-gray-100 text-2xl px-1'>
              LinkedIn <FaLinkedin /></a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-black duration-300'>
            <a href="https://github.com/FullyAngozi?tab=repositories" target="_blank" className=' flex justify-between items-center w-full text-gray-100 text-2xl px-1'>
              Gitbub <BsGithub /></a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-red-500 duration-300'>
            <a href="/contact" className=' flex justify-between items-center w-full text-gray-100 text-2xl px-1'>
              Email <SiMinutemailer /></a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
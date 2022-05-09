import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import '../index.css'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0AA1DD] text-[#E8F9FD]  '>
      <div>
        <Link to='home' smooth={true} duration={500}>
        <img src={Logo} alt='Logo Image' style={{ width: '120px' }} />
        </Link>
       
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className="text-xl">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-xl">
          <Link to='about' offset={-190} smooth={true} duration={500}>
            About 
          </Link>
        </li>
       
        <li className="text-xl">
          <Link to='skills' offset={130} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-xl">
          <Link to='work' offset={40} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="text-xl">
          <Link to='contact'offset={140}  smooth={true} duration={500}>
            Contact
          </Link>
        </li>





      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 bg-[#0AA1DD]'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0AA1DD] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} offset={-90} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
       
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} offset={-90} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} offset={250}  to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} offset={105} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/renzo-beccari/'
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Ren991'
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:beccrenzo@gmail.com'
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>  
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

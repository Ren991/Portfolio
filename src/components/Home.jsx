import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0AA1DD]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-xl text-[#E8F9FD]'>Hi, my name is</p>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Renzo Beccari
         
        </h1>
       
        
        <h1 className='text-6xl sm:text-7xl font-bold text-[#79DAE8]'>
          I'm a Full-Stack MERN Developer.
        </h1>
        
        
        <p className='text-[#E8F9FD] py-4 max-w-[700px]'>
        I’m a full-stack developer specializing in building and 
          designing responsive full-stack web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={800}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#79DAE8]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

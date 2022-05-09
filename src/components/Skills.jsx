import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import Redux from '../assets/redux.svg';

const Skills = () => {
  return (
    <div name='skills' style={{paddingTop:360}} className='w-full h-screen bg-[#0AA1DD] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#C4DDFF] '>Skills</p>
              <p className='text-white font-bold py-4 text-2xl '>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#62b4]'>
                  <img className='w-20 mx-auto' style={{marginTop:20}}  src={HTML} alt="HTML icon" />
                  <p className='my-4 text-white '>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#62b4]'>
                  <img className='w-20 mx-auto' style={{marginTop:20}}  src={CSS} alt="HTML icon" />
                  <p className='my-4 text-white'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#62b4]'>
                  <img className='w-20 mx-auto' style={{marginTop:20}} src={JavaScript} alt="HTML icon" />
                  <p className='my-4 text-white'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#62b4]'>
                  <img className='w-20 mx-auto' style={{marginTop:20}}  src={ReactImg} alt="HTML icon" />
                  <p className='my-4 text-white'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#62b4]'>
                  <img className='w-20 mx-auto' style={{marginTop:20}}  src={GitHub} alt="HTML icon" />
                  <p className='my-4 text-white'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#62b4]'>
                  <img className='w-20 mx-auto' style={{marginTop:20}}  src={Node} alt="HTML icon" />
                  <p className='my-4 text-white'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#62b4]'>
                  <img className='w-20 mx-auto' style={{marginTop:20}}  src={Mongo} alt="HTML icon" />
                  <p className='my-4 text-white'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#62b4]'>
                  <img className='w-20 mx-auto' style={{marginTop:20}} src={Redux} alt="HTML icon" />
                  <p className='my-4 text-white'>REDUX</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
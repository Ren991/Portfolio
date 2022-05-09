import React from 'react';
import ReactSports from '../assets/ReactSports.PNG';
import Mytinerary from '../assets/Mytinerary.png'
import WeatherApp from '../assets/WeatherApp.png'
import PetShop from '../assets/PetShop.png';
import amazingEvents from '../assets/amazingEvents.png';
import mdhl from '../assets/mdhl.png'


const Work = () => {
  return (
    <div name='work' style={{paddingTop:310}} className='w-full md:h-screen text-gray-300 bg-[#0AA1DD]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#C4DDFF]'>
            Work
          </p>
          <p className='text-white font-bold py-6 text-2xl'>// Check out some of my recents Projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ReactSports})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 pt-8 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider' >
                React Sports
              </span>
              <h1 className='text-l font-bold text-white'>Ecommerce</h1>
              <h3 style={{textDecoration:"underline"}}>Technologies:</h3>
              <p className='text-xs font-bold text-white'>React.js-Material UI-Boostrap-Redux-Node.js-Express-MongodB-JWT-JOI-Passport-Paypal</p>
              
              
              
              <div className='pt-8 text-center' style={{marginBottom:35}}>
                <a href='https://reactsport.herokuapp.com/' target="_blank" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Ren991/React-Sports' target="_blank" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Mytinerary})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                My Tinerary
              </span>
              <h1 className='text-l font-bold text-white'>CRUD Web App</h1>
              <h3>Technologies:</h3>
              <p className='text-xs font-bold text-white'>React.js-Material UI-Boostrap-Redux-Node.js-Express-MongodB-JWT-JOI-Passport</p>
              <div className='pt-8 text-center'>
                <a href='https://mytinerary-beccari.herokuapp.com/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Ren991/mytinerary-Beccari' target="_blank" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather App
              </span>
              <h1 className='text-l font-bold text-white'>Frontend App</h1>
              <h3>Technologies:</h3>
              <p className='text-s font-bold text-white'>React.js-Axios-CSS-</p>
              <div className='pt-8 text-center'>
                <a href='https://weather-webapp2022.herokuapp.com/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Ren991/Weather-app' target="_blank" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PetShop})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Franco Petshop
              </span>
              <h1 className='text-l font-bold text-white'>Ecommerce</h1>
              <h3>Technologies:</h3>
              <p className='text-s font-bold text-white'>Javascript-Axios-Html-Css-Boostrap</p>
              <div className='pt-8 text-center'>
                <a href='https://ren991.github.io/Franco-petshop/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Ren991/Franco-petshop' target="_blank" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${amazingEvents})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Amazing Events
              </span>
              <h1 className='text-l font-bold text-white'>Frontend App</h1>
              <h3>Technologies:</h3>
              <p className='text-s font-bold text-white'>Javascript-Axios-Html-Css-Boostrap</p>
              <div className='pt-8 text-center'>
                <a href='https://ren991.github.io/amazingEvents/' target="_blank" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Ren991/amazingEvents' target="_blank" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mdhl})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Mighty Ducks Hockey League
              </span>
              <h1 className='text-l font-bold text-white'>Frontend App</h1>
              <h3>Technologies:</h3>
              <p className='text-s font-bold text-white'>Html-Css-Boostrap</p>
              <div className='pt-8 text-center'>
                <a href='https://ren991.github.io/migthyDucksLeague/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Ren991/migthyDucksLeague' target="_blank" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

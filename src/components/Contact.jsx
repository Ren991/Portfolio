import React from 'react'

const scrollTop = ()=>{
  window.scrollTo(0, 0)
}


const Contact = () => {
  return (
    <div name='contact' style={{paddingTop:250}} className='w-full  bg-[#0AA1DD] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/444ab019-b3d8-4d89-a7f2-c1e8d629b2b5" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C4DDFF] text-gray-300'>Contact</p>
                <p className='text-white font-bold py-4 text-2xl'>// Submit the form below or shoot me an email - beccrenzo@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            
        </form>
       
    </div>
  )
}

export default Contact
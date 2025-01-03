import React from 'react'
import { useState } from 'react'
import htmlimg from "./images/htmlimg.jpg"
import cssimg from "./images/cssimg.jpg"
import jsimg from "./images/jsimg.png"
import reactimg from "./images/reactimg.jpg"
import gitimg from "./images/gitimg.jpg"
import tailimg from "./images/Tailwind.jpg"
import {HiOutlineDesktopComputer} from "react-icons/hi"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()


const Skills = () => {

  

  return (
    <>
    
      <div className='border-2 md:m-auto md:w-2/3   md:p-10  p-10 bg-slate-800 rounded-md shadow-xl shadow-black relative'>
        <h1 className='text-6xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-pink-500 to-red-600 mb-10 font-mono font-extrabold ' data-aos="zoom-out" data-aos-duration="500" data-aos-easing="linear"><HiOutlineDesktopComputer className=' mr-3 text-fuchsia-600'/>SKILLS</h1>
        <div className='grid grid-cols-1 gap-10 '>
          <div className='border-2 shadow-black shadow-2xl m-auto rounded-md 'data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out">
          <img src={htmlimg} alt='image' className='h-40' loading="lazy"/>
          <p className='text-center text-white p-1 bg-orange-500 font-bold text-xl'>HTML</p>
          </div>
          
          
          <div className='border-4 shadow-black shadow-2xl m-auto rounded-md'data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out">
          <img src={cssimg} alt='image' className='h-40 w-32' loading="lazy"/>
          <p className='text-center text-white p-1 bg-blue-600 font-bold text-xl'>CSS</p>
          </div>
          
          
          <div className='border-2 shadow-black shadow-2xl m-auto rounded-md'data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out">
          <img src={jsimg} alt='image' className='h-40' loading="lazy"/>
          <p className='text-center text-white p-1 bg-yellow-400 font-bold text-xl'>JAVASCRIPT</p>
          </div>
          
          
          <div className='border-4 shadow-black shadow-2xl m-auto rounded-md'data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out">
          <img src={reactimg} alt='image' className='h-40' loading="lazy"/>
          <p className='text-center text-white p-1 bg-sky-500 font-bold text-xl'>REACT JS</p>
          </div>
          
          
          <div className='border-4 shadow-black shadow-2xl m-auto rounded-md'data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out">
          <img src={tailimg} alt='image' className='h-40 w-40' loading="lazy"/>
          <p className='text-center text-white p-1 bg-sky-600 font-bold text-xl'>TAILWIND CSS</p>
          </div>

          <div className='border-4 shadow-black shadow-2xl m-auto rounded-md'data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out">
          <img src={gitimg} alt='image' className='h-40 w-40' loading="lazy"/>
          <p className='text-center text-white p-1 bg-black font-bold text-xl'>GIT</p>
          </div>
        </div>
       
        
      </div>
    
    
    </>
  )
}

export default Skills
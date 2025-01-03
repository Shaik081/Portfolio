import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BsLayoutSidebarInset,BsLayoutSidebarInsetReverse} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()


const TailwindCss = () => {
  
  
  const [togglenav, setToggleNav] = useState(false)
  const [open,setClose] = useState(<BsLayoutSidebarInsetReverse className="text-blue-400 font-bold"/>)

  function Toggle(){
    setToggleNav(!togglenav)
    

    if(togglenav){
      setClose(<BsLayoutSidebarInsetReverse className="text-blue-400"/>)
    }
    else{
      setClose(<BsLayoutSidebarInset className="text-red-500 " />)
    }
  }

  return (
    <>
   
   <nav className="bg-gray-800 border-b-4 border-b-blue-400 shadow-2xl">
        <div className="flex justify-between p-3 items-center relative">
          <Link
            to="/"
            className="text-2xl font-mono font-extrabold text-white bg-gradient-to-r from-green-700 via-cyan-800 to-sky-900 rounded-e-full p-3 uppercase"
          >
            @Shaik
          </Link>

          <div className="text-white font-medium uppercase text-md ">
            <ul className="lg:flex md:flex mobile-view">
              <Link
                to="/"
                className="rounded-full p-2 text-white  hover:text-violet-700 focus:bg-gradient-to-r from-blue-400 to-purple-700 focus:text-white  transition ease-in delay-200  "
              >
                Home
              </Link>
              <Link
                to="/Skills"
                className="ml-10 rounded-full p-2 text-white  hover:text-violet-700 focus:bg-gradient-to-r from-blue-400 to-purple-700 focus:text-white transition ease-in delay-200 "
              >
                Skills
              </Link>
              
              <Link
                to="/About"
                className="ml-10 rounded-full p-2 text-white  hover:text-violet-700 focus:bg-gradient-to-r from-blue-400 to-purple-700 focus:text-white transition ease-in delay-200 "
              >
                About 
              </Link>
              <Link
                to="/Contact"
                className="ml-10 rounded-full p-2 text-white  hover:text-violet-700 focus:bg-gradient-to-r from-blue-400 to-purple-700 focus:text-white transition ease-in delay-200  "
              >
                Contact 
              </Link>
              

            </ul>
            <button
              className="md:hidden text-2xl transition-all ease-in"
              onClick={Toggle}
            >
            {open}
            </button>
          </div>
        </div>
      </nav>
      <nav className="absolute top-20 bottom-1/2 w-full z-50">
        {togglenav && (
        <div data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration='300'>
          <ul className="flex flex-col bg-opacity-60 backdrop-blur-sm backdrop-contrast-100  bg-black p-4 text-center pb-6 text-white uppercase font-bold text-lg md:hidden rounded-xl">
            <li className="mb-2 hover:scale-150 transition-all linear duration-500 delay-0 active:text-black  "><Link to="/" >Home</Link></li>
            <Link to="/Skills" className="mb-2 hover:scale-150 transition-all linear duration-500 delay-0 active:text-black ">Skills</Link>
            <Link to="/About" className="mb-2 hover:scale-150 transition-all linear duration-500 delay-0 active:text-black ">About</Link>
            <Link to="/Contact" className="mb-2 hover:scale-150 transition-all linear duration-500 delay-0 active:text-black  ">Contact</Link>
          </ul>
        </div>

        )}
      </nav>
      
           
    
    </>
  );
};

export default TailwindCss;

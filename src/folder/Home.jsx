import React from "react";
import { FaInstagram,FaFacebook,FaGithub,FaLinkedin,FaArrowCircleRight,FaReact} from "react-icons/fa";
import {SiGmail} from "react-icons/si"
import {WiCloudDown} from 'react-icons/wi'
import profile from "./images/Shaik P2.jpeg"
import { Link } from "react-router-dom"
import Resume from "./PDF/SHAIK CV 1.pdf"


const Home = () => {

  return (
    <> 
    
        <div className="flex flex-wrap md:w-3/5 md:m-auto md:flex justify-center items-center h-[660px]">
          <div>
          
            <div className="flex justify-center items-center">
              <img src={profile} alt="image" className="h-[240px] w-[240px] sm:h-[260px] sm:w-[270px] size " data-aos="zoom-out" data-aos-easing="ease-in-out" loading="lazy"/>
              <div className="ml-4 mt-4 p-2 dark:text-white" data-aos="zoom-in"
                data-aos-easing="ease-in-out">
                <h1 className="text-3xl text-center text-nowrap font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-pink-500 to-rose-600 ">Hi, I am Shaik Masthan</h1>
                <h2 className="mt-5 text-2xl text-center font-bold text-violet-900 dark:text-violet-500 uppercase flex"><FaReact className="ml-3 mr-3 mt-0.5 text-3xl"></FaReact>React JS Developer</h2>
                <p className="mt-5 w-80 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur quo blanditiis expedi</p>
                  <div className="mt-4 flex gap-3">
                    <a href="https://www.instagram.com/king___of___silence/"><FaInstagram className="text-xl"/></a>
                    <a href="https://www.facebook.com/me/"><FaFacebook className="text-xl"/></a>
                    <a href='https://github.com/Shaik081'><FaGithub className="text-xl"/></a>
                    <a href='https://www.linkedin.com/in/shaik-masthan-080a6a304'><FaLinkedin className='text-xl'/></a>
                    <a href="https://mail.google.com/mail/u/0/?pli=1#sent?compose=new"><SiGmail className='text-xl'/></a>
                  </div>
              </div>
            </div>
          </div>
          <div>
          <div className="flex justify-center pb-5 ">
                    <button className="mr-20 border-2 border-gray-600 shadow-2xl shadow-black bg-gray-800 text-lg text-white px-10 py-1 rounded-full ml-4 hover:bg-white hover:text-black hover:transition-all linear duration-100 hover:scale-x-110 active:bg-black active:text-white animate-[anime_1s_ease-in-out_]"><Link to="/About" className="flex">About<FaArrowCircleRight className="ml-3 mt-[5.5px]"></FaArrowCircleRight></Link></button>
                    <button className="bg-blue-700 shadow-2xl shadow-black text-lg text-white px-10 py-1 rounded-full ml-4 hover:bg-blue-900 hover:text-white hover:transition-all linear duration-100  active:bg-violet-800 active:text-white animate-[anime_1s_ease-in-out_]" ><a href={Resume} download="Resume" className="flex" ><WiCloudDown className="text-3xl mr-2"></WiCloudDown>Download CV</a></button>
                    
          </div>
          </div>
          
          </div>
           
    
    
    
    
    
    </>
  )
}
export default Home;


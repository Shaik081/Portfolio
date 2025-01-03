import React from 'react'
import { FaInstagram,FaFacebook,FaGithub,FaLinkedin } from "react-icons/fa";
import {SiGmail} from "react-icons/si"

const Contact = () => {

  return (
      <div className='h-[700px]'>
        <div className='border-2 m-6 bg-blue-500 rounded-xl p-6' data-aos="zoom-in">
          <h1 className='text-2xl text-neutral-200 uppercase font-bold'>Contact</h1>
          <form>
            <div className='grid grid-cols-1 gap-5 mt-4 justify-items-center'>
              <input  type="text" placeholder='Name' required className='border-2 w-52 p-2 rounded-lg'/>
              <input type="email" placeholder='Email' required className='border-2 w-52 p-2 rounded-lg'></input>
              <textarea type="text"placeholder='Message' className='border-2 p-1 h-28 w-52  rounded-lg' required></textarea>
              <button className='border-2 px-3 py-2 rounded-3xl bg-green-800 text-white font-bold hover:bg-green-900 '>Submit</button>
            </div>
          </form>  
            <div className="mt-5 flex justify-center gap-5">
                  <a href="https://www.instagram.com/king___of___silence/"><FaInstagram className="text-3xl"/></a>
                  <a href="https://www.facebook.com/me/"><FaFacebook className="text-3xl"/></a>
                  <a href='https://github.com/Shaik081'><FaGithub className="text-3xl"/></a>
                  <a href='https://www.linkedin.com/in/shaik-masthan-080a6a304'><FaLinkedin className='text-3xl'/></a>
                  <a href="https://www.gmail.com/shaikmas128@gmail.com"><SiGmail className='text-3xl'/></a>
            </div>
        </div>
      </div>
  )
}

export default Contact
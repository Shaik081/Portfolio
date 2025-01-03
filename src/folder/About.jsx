import React from 'react'
import school from './images/school.jpg'
import college from './images/college.jpg'
import {PiCertificateFill} from 'react-icons/pi'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()


const About = () => {
  return (
  <>
    
      <h1 className='ml-20 mt-10 uppercase font-extrabold text-2xl text-violet-600 font-serif' data-aos="fade-right">Education :</h1>
      <div className='grid grid-cols-2 ml-20 mt-1 border-2 shadow-xl rounded-lg p-3 md:w-11/12 sm:w-10/12 w-4/5 bg-orange-100'data-aos="zoom-out" data-aos-duration="500"> 
        <div className='mr-0'>
          <img src={school} alt='image' className='sm:h-52 h-48 w-56 md:h-80 md:w-96 rounded-3xl' loading="lazy"></img>
        </div>
        <div className='bg-slate-100 p-1 rounded-lg' data-aos="zoom-out" data-aos-duration="600"> 
          <h1 className='border-b-2 border-slate-500 uppercase text-red-600 font-bold text-[0.8rem] md:text-xl '>Saradha.matric.hr.sec.school</h1>
          <p className='ml-2 md:text-lg sm:text-sm mb-1 mt-3 font-bold'>X Grade (2017 - 2018)</p>
          <p className='md:text-lg ml-5 font-semibold'>Percentage : 86%</p>
          <p className='ml-2 md:text-lg mt-3 sm:text-sm mb-1 font-bold'>XII Grade(2019 - 2020)</p>
          <p className='md:text-lg sm:text-sm ml-5 font-semibold'>Percentage : 64%</p>
        </div>
        <div className='mt-5'>
          <img src={college} alt="image" className=' h-48 w-56 md:w-96 md:h-80 rounded-3xl' loading="lazy"></img>
        </div>  
        <div className='mt-3 bg-slate-100 p-1 rounded-lg' data-aos="zoom-out" data-aos-duration="600">
            <h1 className='border-b-2 border-slate-500  uppercase text-red-600 font-bold text-sm md:text-xl'>bsa abdur rahman crescent institute of scince and technology</h1>
            <p className='mt-2 ml-2 font-semibold md:text-lg'>Branch : B.TECH</p>
            <p className='mt-2 ml-2 font-semibold md:text-lg'>Course : Computer Science And Engineering </p>
            <p className='mt-2 ml-2 font-semibold md:text-lg'>Passed Out : 2024</p>
            <p className='mt-2 ml-2 font-semibold md:text-lg'>CGPA : 6.9</p>
        </div>
      </div>
        <h1 className='ml-20 mt-10 uppercase font-extrabold text-2xl text-violet-600 font-serif' data-aos="fade-right">Certificate :</h1>
        <div className='grid grid-cols-1 ml-20 mt-1 border-2 shadow-xl rounded-lg p-3 md:w-11/12 sm:w-10/12 w-4/5 bg-amber-100'data-aos="zoom-out" data-aos-duration="500">
            <ul className='font-semibold uppercase p-2'>
              <li className='mb-2 flex'><PiCertificateFill className='text-2xl mr-2 text-red-500'></PiCertificateFill>AWS Basics S3</li>
              <li className='mb-2 flex'><PiCertificateFill className='text-2xl mr-2 text-red-500'></PiCertificateFill>AWS Translate</li>
              <li className='mb-2 flex'><PiCertificateFill className='text-2xl mr-2 text-red-500'></PiCertificateFill>Monolith Research and labs</li>
              <li className='mb-2 flex'><PiCertificateFill className='text-2xl mr-2 text-red-500'></PiCertificateFill>Shine Logics (Internship)</li> 
            </ul>
        </div>
    
  </>   
  )
}

export default About 
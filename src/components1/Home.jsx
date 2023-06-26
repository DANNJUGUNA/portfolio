import React from 'react';
import dan from "../assets/dan.jpeg";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle, AiOutlineDownload} from 'react-icons/ai'
import CV from "../assets/dan resume.docx"
const Home = () => {
 
  return (
    <div className='flex-wrap flex'>
    <div className=' flex-wrap items-center justify-center flex flex-col mt-0 w-[97%]'>
       <p className=' pt-9 mb-1 text-2xl font-semibold text-white lg:text-white'>
        Hi, I'm
       </p>
       <p className='mb-1 text-2xl font-semibold text-white lg:text-white'>
        Dan Njuguna
       </p>
       <p className='mb-1 text-2xl font-semibold text-white lg:text-white'>
        A fullstack developer
       </p>
       <img className=' w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full' src={dan} alt="dan" />
       <div className=' mt-4'>
       <a href={CV}download className='text-white rounded-full p-2 border text-lg font-semibold border-solid border-white hover:bg-white hover:text-black ml-14 lg:text-white lg:text-2xl lg:border-white '>Download CV</a>
       <a href="#contacts" className='text-white rounded-full p-2 border text-lg font-semibold border-solid border-white hover:bg-white hover:text-black lg:text-white lg:text-2xl lg:border-white ml-6' >Lets Talk</a>
       </div>
      
    </div>
     <div className='pt-5 w-[1%] mr-[3%] ml-[-5%]'>
     <a href="https://www.linkedin.com/in/dan-njuguna-7a48a9235/" className='text-white' target="_blank"> <BsLinkedin size={30} /> </a>
      <a href="https://github.com/DANNJUGUNA" className='text-white' target="_blank"> <FaGithub  size={30}/> </a>
      <a href="" target="_blank" className='text-white'>  <AiFillTwitterCircle size={30} /> </a>
     </div>
     </div>
  )
}

export default Home
import React from 'react';
import dan from "../assets/dan.jpeg";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import CV from "../assets/dan resume.docx"
const Home = () => {
 
  return (
    <div className=' flex-wrap items-center justify-center flex flex-col mt-0'>
       <p className=' pt-14 mb-6 text-2xl font-semibold text-white'>
        Hi, I'm
       </p>
       <p className='mb-6 text-2xl font-semibold text-white'>
        Dan Njuguna
       </p>
       <p className='mb-6 text-2xl font-semibold text-white'>
        A fullstack developer
       </p>
       <img className=' w-[400px] h-[400px] rounded-full' src={dan} alt="dan" />
       <div>
       <a href={CV}download className='text-white rounded-full p-2 border border-solid border-white'>Download CV</a>
       <a href="#contacts" className='text-white rounded-full p-2 border border-solid border-white ml-5' >Lets Talk</a>
       </div>
       <div>
       <a href="https://www.linkedin.com/in/dan-njuguna-7a48a9235/" className='text-white' target="_blank"> <BsLinkedin size={30} /> </a>
        <a href="https://github.com/DANNJUGUNA" className='text-white' target="_blank"> <FaGithub  size={30}/> </a>
        <a href="" target="_blank" className='text-white'>  <AiFillTwitterCircle size={30} /> </a>
       </div>
    </div>
  )
}

export default Home
import React from 'react'
import {FaAward} from "react-icons/fa";
import{VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <div className=' flex-wrap mt-3'>
      <div className='flex items-center justify-center text-white text-lg mt-11'>
        <h1 className=' underline font-bold text-2xl'>ABOUT ME</h1>
     
      </div>
      <div className=' flex justify-center text-black gap-5 text-lg font-semibold py-4'>
      <article className='bg-white/50 border border-white rounded-lg border-solid hover:text-white hover:bg-inherit flex items-center flex-col px-6 py-3'>
            <FaAward size={40} className="text-white"/> 
              <h5 className='pt-4'>Experience</h5>
              <small>Entry level</small>
            </article>
            {/* <article className='bg-white/50 border border-white rounded-lg border-solid hover:text-white hover:bg-inherit flex items-center flex-col px-6 py-3'>
            <FaAward size={30} /> 
              <h5 className='pt-4'>Experience</h5>
              <small>3+ years working</small>
            </article> */}
            <article className='bg-white/50 border border-white rounded-lg border-solid hover:text-white hover:bg-inherit flex items-center flex-col px-6 py-3'>
            <VscFolderLibrary size={40} className="text-white"/> 
              <h5 className='pt-4'>Projects</h5>
              <small>2 Completed </small>
            </article>
      </div>
      <div className='flex justify-center items-center'>
      <p className=' w-[70%] pl-8 text-[#ef04c8] font-semibold text-lg flex justify-center items-center'>
          I am a full-stack software developer at my entry level with the knowledge of building applications for both mobile and web platforms. 
          My technology stack includes HTML,CSS,JavaScript, React JS,Ruby and Ruby on Rails.
          I am also a seasoned UI/UX designer who has a keen eye for appealing, functional and easy to use interfaces. 
          I love applying both design and technical skills in every project I take on.
          </p>
      </div>

    </div>
  )
}

export default About

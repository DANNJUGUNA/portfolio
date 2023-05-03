import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'


function Footer() {
  return (
    <footer className='bg-[#03058f]'>
      <a href="" className="footer__logo">DAN NJUGUNA</a>

      <ul className="permalinks">

       <li><a href="#">Home</a></li> 
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#testmonials">Testmonials</a></li>
       <li><a href="#contacts">Contacts</a></li>

      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/dan-njuguna-7a48a9235/" className='text-white' target="_blank"> <BsLinkedin size={30} /> </a>
      <a href="https://github.com/DANNJUGUNA" className='text-white' target="_blank"> <FaGithub  size={30}/> </a>
      <a href="" target="_blank" className='text-white'>  <AiFillTwitterCircle size={30} /> </a>
      </div>

      <div className=" mb-1 text-white text-lg">
        <small>&copy;Dan. All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer
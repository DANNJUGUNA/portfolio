import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


function SocialLinks() {

    const links = [
        {
            id: 1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/dannjuguna/",
            style:"rounded-tr-md"
        },
        {
            id: 2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/DANNJUGUNA",
            
        },
        {
            id: 3,
            child:(
                <>
                Twitter <FaTwitter size={30}/>
                </>
            ),
            href: "",
            
        },
        {
            id: 4,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto: ndan30071@gmail.com",
            
        },
        {
            id: 5,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/Resume.pdf",
            style:"rounded-br-md",
            download:true,
            
        },
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
    <ul>
        {links.map(({id, child, style,href, download }) => (

        <li key={id} className="flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-b from-purple-500 to-white 
        ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" 
        >
            <a href={href}
            className="flex justify-between items-center w-full text-black text-2xl"
            download={download}
            target="_blank"
            rel="noreferrer"
            >  
            {child}
            </a>
        </li>

    ))}
    </ul>
    </div>
  );
  
};

export default SocialLinks

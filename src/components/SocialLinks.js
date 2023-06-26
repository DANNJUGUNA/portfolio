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
            href: "https://www.linkedin.com/in/john-vundi-476a3a261",
            style:"rounded-tr-md"
        },
        {
            id: 2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/Adisia2",
            
        },
        {
            id: 3,
            child:(
                <>
                Twitter <FaTwitter size={30}/>
                </>
            ),
            href: "https://twitter.com/JonVundi?t=C7cEpID8S-KD9vl17HvICg&s=09",
            
        },
        {
            id: 4,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto: johnsonvundy2@gmail.com",
            
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

        <li key={id} className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500  
        ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" 
        >
            <a href={href}
            className="flex justify-between items-center w-full text-white"
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

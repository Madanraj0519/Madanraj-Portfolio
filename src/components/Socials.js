import React from 'react'
import {AiFillTwitterCircle, AiFillLinkedin,AiOutlineMail} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
           <AiFillLinkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/madan-raj-7b8b23232/",
      style: "hover:text-blue-600 hover:scale-125 duration-200 ",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub  />
        </>
      ),
      href: "https://github.com/Madanraj0519",
      style:"hover:text-gray-600 hover:scale-125 duration-200"
    },
    {
      id: 3,
      child: (
        <>
           <AiFillTwitterCircle  />
        </>
      ),
      href: "https://twitter.com/Madan__raj",
      style : "hover:text-sky-600 hover:scale-125 duration-200"
    },
    {
      id: 4,
      child: (
        <>
           <AiOutlineMail />
        </>
      ),
      href: "mailto:madan__raj@hotmail.com",
      style : "hover:text-purple-600 hover:scale-125 duration-200"
    },
    {
      id: 5,
      child: (
        <>
          <BsFillPersonLinesFill  />
        </>
      ),
      href: "/Rezumes.pdf",
      // style: "rounded-br-md",
      style:"hover:text-red-400 hover:scale-125 duration-200",
      download: true,
    },
  ];


  return (
    <div className="text-2xl flex justify-center gap-10 py-3 text-gray-500">
        
     <nav className="nav max-w-full flex align-middle pointer-events-none hover:pointer-events-auto">

      <h4 className="sm-header text-2xl cursor-pointer pointer-events-auto text-teal-600">Follow me on</h4>

    <div className="line w-40 h-1 bg-gray-600 ml-4 mt-4 origin-left relative"></div>

      <ul className="nav-list sm:flex -ml-20">


        {

          links.map(({ id, child, href, style, download}) => (


          <li className="nav-item">
            <a href={href} aria-label='LinkedIn' download={download}
                rel='noreferrer' target={'_blank'}  className="nav-link text-2xl sm:text-4xl">
                    <div className={style}>
                      {child}
                    </div>
            </a>
          </li>

          ))

        }



      </ul>
    </nav>

    </div>
  )
}

export default Socials
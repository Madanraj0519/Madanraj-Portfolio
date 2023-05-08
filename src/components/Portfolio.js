import React from "react";
import huntTheAce from "../assets/portfolio/HuntTheAce.png"
import TenziesGame from "../assets/portfolio/TenziesGame.png"
import Bookapp from "../assets/portfolio/Bookapp.png"
import {BiGitRepoForked} from "react-icons/bi"
import { VscActivateBreakpoints } from "react-icons/vsc";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: huntTheAce,
      demo :'https://madanraj0519.github.io/Hunt-the-ace/',
      github :'https://github.com/Madanraj0519/Hunt-the-ace'
    },
    {
      id: 2,
      src: TenziesGame,
      demo :'https://madanraj0519.github.io/Tenzies-Game/',
      github :'https://github.com/Madanraj0519/Tenzies-Game'
    },
    {
      id: 3,
      src: Bookapp,
      demo :'https://madanraj0519.github.io/Book-App/',
      github :'https://github.com/Madanraj0519/Book-App'
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-slate-900 w-full text-gray-500 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, github }) => (
            <div key={id} className="shadow-md shadow-teal-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                       <a href={demo}  aria-label='LinkedIn'
                             rel='noreferrer' target={'_blank'}  className="nav-link text-2xl sm:text-4xl">
                              <VscActivateBreakpoints size={30} />
                      </a>
                </button>

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                       <a href={github} aria-label='LinkedIn'
                          rel='noreferrer' target={'_blank'}  className="nav-link text-2xl sm:text-4xl">
                            <BiGitRepoForked size={30} />
                       </a>
                </button>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Portfolio;
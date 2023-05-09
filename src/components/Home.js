import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import Socials from './Socials';


const Home = () => {
  return (
 <div  name="home" 
 className='h-screen w-full bg-slate-900'>
     <div className="max-w-screen-lg mx-auto items-center justify-center h-full px-4 md:flex-col">
          
           <div className="flex flex-col text-center justify-center h-full">
              <h2 className="mt-20 text-4xl py-2 text-teal-600 font-medium">
                  Madanraj
             </h2>

             <h3 className="text-3xl py-2 text-gray-500 ">
                 Upcoming Front-End Developer 
              </h3>

              <p className="text-md py-5 leading-8 text-gray-500 ">
                      👋Welocme to my site. I ❤️ to work on web application using technologies like Html, Css, Javascript, React and Tailwind.
              </p>
    
              { <Socials /> }

              
              <div className="mx-auto  rounded-full w-52 h-52 overflow-hidden sm:w-72 sm:h-72 md:h-96 md:w-96 md:rounded-full">
                   <img src={HeroImage} alt='HeroImage' layout="fill" objectFit="cover" />
              </div>

          </div>       
     </div>
 </div>
  )
}

export default Home
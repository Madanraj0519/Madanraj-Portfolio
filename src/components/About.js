import React from "react";
import avatar from "../assets/avatar.png"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-slate-900 text-gray-500"
    >
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        #️⃣ As a recent graduate with a strong foundation in HTML, CSS, JavaScript, and experience with React and Tailwind css. Passionate about creating
           visually appealing and user-friendly websites. Collaborative team player with excellent communication skills and a
                commitment to staying up-to-date with the latest front-end development technologies.
        </p>

          <div>
        </div>
        </div>

        <div >
          <img
            src={avatar}
            alt="my profile"
            className="rounded-2xl mx-auto -mt-6 md:mt-10 w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
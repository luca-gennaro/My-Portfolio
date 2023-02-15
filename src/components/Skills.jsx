import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/typescript.png";
import nodeImage from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";



const Skills = () => {

    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title: "JAVASCRIPT",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: reactImage,
            title: "REACT.JS",
            style: "shadow-cyan-500"
        },
        {
            id: 5,
            src: typescript,
            title: "TYPESCRIPT",
            style: "shadow-blue-500"
        },
        {
            id: 6,
            src: nodeImage,
            title: "NODE.JS",
            style: "shadow-green-500"
        },
        {
            id: 7,
            src: github,
            title: "GIT",
            style: "shadow-white"
        },
        {
            id: 8,
            src: tailwind,
            title: "TAILWIND",
            style: "shadow-cyan-500"
        }
        
    ]

  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full text-white h-screen'
      >
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Skills</p>
               <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0'>
               {skills.map(({ id, src, title, style }) => (
                  <div key={id} className={`flex flex-col items-center justify-center py-2 shadow-md rounded-lg ${style}`}>
                     <img src={src} className="w-20 rounded-md duration-200 hover:scale-105" alt="" />
                     <p className='mt-4'>{title}</p>
                  </div>
               ))}

            </div>
         </div>

      </div>
  )
}

export default Skills
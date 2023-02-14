import React from 'react'
import HeroImage from "../assets/heroImage.jpeg"
import { MdArrowForwardIos } from "react-icons/md"

const Home = () => {
    return (
        <div name="home"
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-white'>
                        I'm a jr Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut amet reiciendis omnis vitae! At, molestias autem quae doloremque quia explicabo provident quo hic commodi iusto doloribus ad illum a.
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300 ml-1'>
                                <MdArrowForwardIos size={15}/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="hero image"
                        className='rounded-2xl mx-auto md:mr-0 w-1/2 md:w-2/3' />
                </div>

            </div>
        </div>
    )
}

export default Home
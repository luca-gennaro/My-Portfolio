import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroImage from "../assets/heroImage.png"
import { MdArrowForwardIos } from "react-icons/md"
import { Link } from "react-scroll";

const Home = () => {

    const [text] = useTypewriter({
        words: ["Luca", "IT enthusiast", "Full Stack Developer"],
        deleteSpeed: 30,
        loop: 0
    })

    return (
        <div name="home"
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                
                <div className='flex flex-col justify-center h-full w-full md:w-2/3' >
                    <h2 className='text-4xl sm:text-5xl font-bold text-white'>
                        Hi, I'm <span className='text-blue-500'>{text}</span> <Cursor />
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut amet reiciendis omnis vitae!
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300 ml-1'>
                                <MdArrowForwardIos size={15}/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="heroImage"
                        className='rounded-2xl mx-auto md:mr-0 w-1/2 md:w-2/3 bg-gradient-to-b from-white to-blue-500' />
                </div>

            </div>
        </div>
    )
}

export default Home
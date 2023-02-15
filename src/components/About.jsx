import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400'>About</p>
            </div>
            <p className='mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis nulla similique reiciendis necessitatibus voluptatem exercitationem animi commodi vero! Libero quis voluptatibus iste, omnis quam sed perspiciatis distinctio nesciunt veniam quibusdam itaque pariatur ea praesentium quas unde consequatur? Facere ipsam aspernatur doloribus sit reprehenderit sequi odio expedita possimus error praesentium.
            </p>

            <br />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis nulla similique reiciendis necessitatibus voluptatem exercitationem animi commodi vero! Libero quis voluptatibus iste, omnis quam sed perspiciatis distinctio nesciunt veniam quibusdam itaque pariatur ea praesentium quas unde consequatur? Facere ipsam aspernatur doloribus sit reprehenderit sequi odio expedita possimus error praesentium.
            </p>
            
        </div>
    </div>
  )
}

export default About
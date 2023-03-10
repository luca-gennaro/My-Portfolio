import React from 'react'

const Contact = () => {
   return (
      <div name="contatti" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
         <div className='flex flex-col p-4 justify-center max-w-screen-lg h-full mx-auto'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Contatti</p>
               <p className='py-6'>Compila il form qui sotto per metterti in contatto con me</p>
            </div>

            <div className='flex justify-center items-center'>
               <form action="https://getform.io/f/e916837f-4cd0-4d99-9972-e97a9332928a" method='POST' className='flex flex-col w-full md:w-1/2'>
                  <input type="text" name='name' placeholder='Inserisci il tuo nome'
                     className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                  />
                  <input type="text" name='email' placeholder='Inserisci la tua email'
                     className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'
                  />
                  <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                  ></textarea>

                  <button className='text-white w-fit px-6 py-3 mx-auto my-8 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer hover:scale-110 duration-300'>Parliamo</button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Contact
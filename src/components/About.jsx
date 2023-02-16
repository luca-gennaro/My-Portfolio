import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Chi sono</p>
                </div>
                <p className='mt-20'>
                    Mi chiamo Luca Gennaro, ho 32 anni. Appassionato di informatica e tecnologia. Inizio da piccolo a "smanettare" e approfondire gli argomenti con delle riviste informatiche e assemblando i miei primi Pc, così da approfondire anche l'aspetto hardware. Conseguo il diploma di Perito Elettronico e Telecomunicazioni. Sperimento software e tecnologie anche nell'ambito della musica, altra passione che mi accompagna da sempre.
                </p>

                <br />

                <p>
                    Una cosa che mi ha da sempre incuriosito e non ho mai approfondito a dovere è la programmazione web, così mi sono messo in gioco frequentando un corso intensivo per diventare Full-Stack Developer e qui ho scoperto un mondo spettacolare e stimolante.
                    Cerco di diventare ogni giorno la versione migliore di me stesso in ogni ambito, mi piace sfidarmi e superare i miei limiti.
                    Il mio obbiettivo è poter dare il mio contributo come programmatore nel realizzare e sviluppare progetti significativi che possano impattare positivamente sulla vita delle persone.
                </p>

            </div>
        </div>
    )
}

export default About
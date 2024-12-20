import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Button from './ui/Button'
import { DiVisualstudio } from 'react-icons/di'


function Hero() {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'> 
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Welcome to our website This my Portfolio Website
          </h2>

         <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-5xl'
            words='Hi I am Induru Udantha an Undergraduate Student in the Faculty of Computing'
         />

         <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            {/* Hi, I'm Induru Udantha In Software Engineer */}
             Sri Lanka Institute of Information Technology - SLIIT
         </p>

            <a href='#about'>
              <Button
              title="Show My Work"
              icon={<DiVisualstudio />}
              position='right' 
              handleCopy={function (): void {
              throw new Error('Function not implemented.')
              } } />
            </a>
      </div>
    </div>
    </div>
  )
}

export default Hero

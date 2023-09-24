"use client"
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export const HomeTopComponent = () => {
  return (
    <div className="w-full h-screen bg-[url('/home-bg.jpeg')] bg-center relative">
      <div className='absolute top-0 left-0 h-screen bg-black/50 w-full z-40 flex justify-center items-center'>
        <div className='flex flex-col items-center w-full'>
            <Image 
              src="/karmun_beyaz.png"
              width={128}
              height={128}
              alt="Logo of the website"
            />
            <p className='uppercase text-white text-6xl mt-5 font-bold'>KARTAL ANADOLU</p>
            <p className='uppercase text-white text-5xl mt-2 font-light'>
              <Typewriter 
                words={['MODEL UNITED NATIONS']}
                typeSpeed={70}
              />
            </p>
        </div>
      </div>
    </div>
  )
}

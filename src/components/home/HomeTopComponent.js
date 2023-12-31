"use client"
import { IconChevronDown } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export const HomeTopComponent = () => {
  return (
    <section id="home" className="w-full h-[calc(100dvh)] relative">
      <div className='absolute top-0 left-0 h-[calc(100dvh)] bg-black/50 w-full z-10 flex justify-center items-center'>
        <div className='flex flex-col items-center w-full'>
            <Image 
              src="/karmun_beyaz.png"
              width={128}
              height={128}
              alt="Logo of the website"
            />
            <p className='uppercase text-white text-3xl sm:text-4xl md:text-6xl mt-5 font-bold'>KARTAL ANATOLIAN</p>
            <p className='uppercase text-white text-3xl sm:text-4xl md:text-6xl font-bold'>HIGH SCHOOL</p>
            <p className='uppercase text-white text-2xl sm:text-3xl md:text-5xl mt-5 font-light'>
              <Typewriter 
                words={['MODEL UNITED NATIONS']}
                typeSpeed={70}
              />
            </p>
        </div>
      </div>
      <div className='absolute z-20 bottom-2 left-1/2 flex flex-col' style={{transform: 'translate(-50%,-50%)'}}>
            <p className='uppercase text-white text-xs md:text-lg mt-2 font-light'>
              <Typewriter 
                words={['Do you want to see more?',"Let's scroll!","You need to be EXCITED!"]}
                typeSpeed={70}
                loop
              />
            </p>
            <Link href="/#committees" className='w-full flex justify-center animate-bounce'>
              <IconChevronDown color="white" />
            </Link>
      </div>
    </section>
  )
}

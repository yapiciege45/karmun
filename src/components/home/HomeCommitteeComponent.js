"use client"
import Link from 'next/link'
import React from 'react'
import { RevealOnScroll } from '../shared/RevealOnScroll'

export const HomeCommitteeComponent = ({ image, link, name }) => {
  return (
    <RevealOnScroll className="w-full md:w-[49%] mt-12 xl:w-[30%] h-48">
        <div className={`w-full h-full bg-center bg-cover relative hover:drop-shadow-2xl transition-all`} style={{backgroundImage: `url(${image})`}}>
          <Link href={link} className='w-full items-center absolute top-[60%] left-1/2 flex flex-col' style={{transform: 'translate(-50%,-50%)'}}>
            <p className='text-3xl text-center text-white font-bold'>{name}</p>
            <div className='border-2 mt-2 text-center bg-white/80 border-white text-black font-bold w-1/2 hover:bg-white hover:drop-shadow-2xl transition-all'>
                MORE INFO
            </div>
          </Link>
        </div>
    </RevealOnScroll>
  )
}

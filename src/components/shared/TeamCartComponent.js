import React from 'react'
import { RevealOnScroll } from './RevealOnScroll'

export const TeamCartComponent = ({ name = 'Ege YAPICI', title = "Head of IT" }) => {
  return (
    <RevealOnScroll className='w-full md:w-[49%] lg:w-[24%] h-32 mt-2 bg-white flex flex-col justify-center items-center border-2 border-purple-950 hover:drop-shadow-2xl transition-all cursor-pointer'>
        <p className='text-2xl font-bold text-[#340000] text-center'>{name}</p>
        <p className='text-lg text-[#340000] text-center'>{title}</p>
    </RevealOnScroll>
  )
}

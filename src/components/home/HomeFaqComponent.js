import Link from 'next/link'
import React from 'react'
import { RevealOnScroll } from '../shared/RevealOnScroll'

export const HomeFaqComponent = () => {
  return (
    <section id='faq' className=' h-64 bg-black/50 w-full flex justify-center items-center flex-col'>
        <RevealOnScroll className='h-full flex flex-col justify-center items-center'>
          <p className='text-4xl text-white font-bold text-center'>FREQUENTLY ASKED QUESTIONS</p>
          <Link href="/faq" className='border-2 mt-5 text-center bg-white/80 border-white text-black font-bold p-3 px-20 hover:bg-white hover:drop-shadow-2xl transition-all'>MORE INFO</Link>
        </RevealOnScroll>
    </section>
  )
}

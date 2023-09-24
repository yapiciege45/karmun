"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { IconX } from '@tabler/icons-react'

export const NavbarComponent = () => {

  const [mobileNavIsShown, setMobileNavIsShown] = useState(false)
  const [conferenceDropdown, setConferenceDropdown] = useState(false)
  

  const toggleNavItem = (item) => {
    console.log(item)
  }

  return (
    <>
      <header className='fixed top-0 h-20 bg-black/80 flex justify-center items-center w-full z-50'>
        <div className='h-20 flex justify-between items-center w-10/12'>
          <div>
            <Image 
              src="/karmun_beyaz.png"
              width={64}
              height={64}
              alt="Logo of the website"
            />
          </div>
          <nav className='h-full lg:w-10/12 xl:w-8/12 hidden lg:flex justify-between items-center'>
            <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>HOME</Link>
            <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>OUR TEAM</Link>
            <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>COMMITTEES</Link>
            <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>FAQ</Link>
            <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>CONTACT</Link>
            <div onMouseEnter={() => setConferenceDropdown(true)} onMouseLeave={() => setConferenceDropdown(false)} className='relative'>
              <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>CONFERENCE</Link>
              <div className={`${conferenceDropdown ? 'absolute' : 'hidden'} right-0 bg-gray-900 flex flex-col w-50 rounded-xl border border-white items-center p-3`}>
                <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>VENUE</Link>
                <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all mt-3'>SCHEDULE</Link>
                <Link href='/' className=' uppercase text-white text-xl hover:opacity-50 transition-all mt-3'>ACCOMMODATION</Link>
              </div>
            </div>
          </nav>
          <div className='h-6 w-12 flex lg:hidden flex-col justify-between' onClick={() => setMobileNavIsShown(true)}>
            <div className='h-0.5 w-12 bg-white'></div>
            <div className='h-0.5 w-12 bg-white'></div>
            <div className='h-0.5 w-12 bg-white'></div>
          </div>
        </div>
      </header>
      <div className={`${mobileNavIsShown ? 'right-0' : '-right-96'} absolute lg:hidden top-0  w-full h-screen bg-gray-900 z-50 transition-all`}>
        <div className='h-20 w-full flex items-center justify-end px-5'>
          <IconX color="white" size={48} onClick={() => setMobileNavIsShown(false)} />
        </div>
        <div className='flex flex-col items-center'>
            <Image 
              src="/karmun_beyaz.png"
              width={64}
              height={64}
              alt="Logo of the website"
            />
          <Link href='/' className=' uppercase text-white text-xl mt-3'>HOME</Link>
          <Link href='/' className=' uppercase text-white text-xl mt-3'>OUR TEAM</Link>
          <Link href='/' className=' uppercase text-white text-xl mt-3'>COMMITTEES</Link>
          <Link href='/' className=' uppercase text-white text-xl mt-3'>FAQ</Link>
          <Link href='/' className=' uppercase text-white text-xl mt-3'>CONTACT</Link>
          <Link href='/' className=' uppercase text-white text-xl mt-3'>CONFERENCE</Link>
          <Link href='/' className=' uppercase text-white text-xl mt-3'>VENUE</Link>
          <Link href='/' className=' uppercase text-white text-xl mt-3'>SCHEDULE</Link>
          <Link href='/' className=' uppercase text-white text-xl mt-3'>ACCOMMODATION</Link>
        </div>
      </div>
    </>
  )
}

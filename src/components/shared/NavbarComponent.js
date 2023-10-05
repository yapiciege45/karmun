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
      <header className='fixed top-0 h-20 bg-[#340000]/80 flex justify-center items-center w-full z-50'>
        <div className='h-20 flex justify-between items-center w-10/12'>
          <Link href='/'>
            <Image 
              src="/karmun_beyaz.png"
              width={64}
              height={64}
              alt="Logo of the website"
            />
          </Link>
          <nav className='h-full lg:w-10/12 xl:w-8/12 hidden lg:flex justify-between items-center'>
            <a href='/#home' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>HOME</a>
            <a href='/#our_team' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>OUR TEAM</a>
            <a href='/#committees' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>COMMITTEES</a>
            <Link href='/faq' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>FAQ</Link>
            <a href='/#contact' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>CONTACT</a>
            <div onMouseEnter={() => setConferenceDropdown(true)} onMouseLeave={() => setConferenceDropdown(false)} className='relative'>
              <Link href='/conference' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>CONFERENCE</Link>
              <div className={`${conferenceDropdown ? 'absolute' : 'hidden'} right-0 bg-[#340000] flex flex-col w-50 rounded-xl border border-white items-center p-3`}>
                <Link href='/venue' className=' uppercase text-white text-xl hover:opacity-50 transition-all'>VENUE</Link>
                <Link href='/schedule' className=' uppercase text-white text-xl hover:opacity-50 transition-all mt-3'>SCHEDULE</Link>
                <Link href='/accommodation' className=' uppercase text-white text-xl hover:opacity-50 transition-all mt-3'>ACCOMMODATION</Link>
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
      <div className={`fixed lg:hidden top-0  w-full h-[calc(100dvh)] bg-[#340000] z-50 transition-all`} style={{right: `${mobileNavIsShown ? '0px' : '1000px'}`}}>
        <div className='h-20 w-full flex items-center justify-end px-5'>
          <IconX color="white" size={48} onClick={() => setMobileNavIsShown(false)} />
        </div>
        <div className='flex flex-col items-center'>
            <Image 
              src="/karmun_beyaz.png"
              onClick={() => setMobileNavIsShown(false)}
              width={64}
              height={64}
              alt="Logo of the website"
            />
          <a href='/#home' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>HOME</a>
          <a href='/#our_team' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>OUR TEAM</a>
          <a href='/#committees' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>COMMITTEES</a>
          <Link href='/faq' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>FAQ</Link>
          <a href='/#contact' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>CONTACT</a>
          <Link href='/conference' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>CONFERENCE</Link>
          <Link href='/venue' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>VENUE</Link>
          <Link href='/schedule' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>SCHEDULE</Link>
          <Link href='/accommodation' className=' uppercase text-white text-xl mt-3' onClick={() => setMobileNavIsShown(false)}>ACCOMMODATION</Link>
        </div>
      </div>
    </>
  )
}

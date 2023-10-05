import { IconLocation, IconMail, IconPhone } from '@tabler/icons-react'
import React from 'react'
import { RevealOnScroll } from './RevealOnScroll'

export const ContactComponent = ({ height = '80vh' }) => {
  return (
    <div id="contact" className={`h-[${height}] flex justify-center bg-black p-5`}>
        <RevealOnScroll className='h-full w-11/12 flex-col md:flex-row flex justify-between'>
            <div className='w-full md:w-5/12 h-full flex flex-col'>
                <h2 className='text-3xl font-bold text-white'>CONTACT INFO</h2>
                <div className='flex flex-col mt-5'>
                    <div className='flex items-center'>
                        <IconPhone color='white' size={20} />
                        <a href='tel:05555555555' className='ml-2 text-white'>0(555) 555 55 55</a>
                    </div>
                    <div className='flex items-center mt-2'>
                        <IconMail color='white' size={20} />
                        <a href='mailto:yapiciege45@gmail.com' className='ml-2 text-white'>yapiciege45@gmail.com</a>
                    </div>
                    <div className='flex items-center mt-2'>
                        <IconLocation color='white' size={20} />
                        <p className='ml-2 text-white'>Cevizli, Karabük Cd. No:10, 34865 Kartal/İstanbul</p>
                    </div>
                </div>
            </div>
            <div className='w-full mt-5 md:mt-0 md:w-5/12 h-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.056838171951!2d29.166329675680274!3d40.914499625194566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac471fd9d3233%3A0xd9ca927c329589fd!2sKartal%20Anadolu%20Lisesi!5e0!3m2!1str!2str!4v1696316955015!5m2!1str!2str" style={{border: 0,width: '100%', height: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </RevealOnScroll>
    </div>
  )
}

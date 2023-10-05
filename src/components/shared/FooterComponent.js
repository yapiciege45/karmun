import { IconHeartFilled } from '@tabler/icons-react'
import React from 'react'

export const FooterComponent = () => {
  return (
    <footer className='w-full flex justify-center h-16 items-center bg-black'>
        <p className='text-md font-bold text-white'>Made by Ege Yapıcı with</p>
        <IconHeartFilled size={16} color='white' className='ml-2 text-red-500' />  
    </footer>
  )
}

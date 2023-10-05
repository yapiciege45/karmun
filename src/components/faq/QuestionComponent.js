"use client"
import { IconChevronDown, IconQuestionMark } from '@tabler/icons-react'
import React, { useState } from 'react'

export const QuestionComponent = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex flex-col w-full cursor-pointer mt-10'>
        <div className='flex justify-between items-center py-3 border-b border-white px-4' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center'>
                <div className='w-8 h-8 border border-white flex justify-center items-center rounded-full'>
                    <IconQuestionMark size={20} color='white' />
                </div>
                <p className='text-white font-bold ml-5 text-sm md:text-lg'>{question}</p>
            </div>
            <IconChevronDown size={24} color='white' />
        </div>
        <div className={`${isOpen ? 'p-4' : 'max-h-0'} transition-all overflow-hidden`}>
            <p className='text-white text-sm md:text-md'>Deneme</p>
        </div>
    </div>
  )
}

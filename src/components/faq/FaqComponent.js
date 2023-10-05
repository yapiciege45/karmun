"use client"
import React from 'react'
import { QuestionComponent } from './QuestionComponent'

export const FaqComponent = ({ faqs }) => {
  return (
    <div className='min-h-screen bg-[#340000] flex justify-center'>
        <div className='flex flex-col w-11/12 items-center'>
            <div className='h-20 w-full'></div>
            <div className='flex flex-col mt-5 w-full md:w-3/4 lg:w-1/2'>
                {
                    faqs.map(faq => (
                        <QuestionComponent question={faq.question} answer={faq.answer} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

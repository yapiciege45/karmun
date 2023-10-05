import { redirect } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export const CommitteeComponent = ({ committee }) => {

  if(!committee) {
    return (
      <div className='w-full min-h-screen flex flex-col bg-[#340000] text-white justify-center items-center'>
        <h1 className='text-white text-2xl font-bold text-center'>Committee can't found.</h1>
        <Link className='text-white text-2xl font-bold text-center underline' href='/#committees'>Go to committees!</Link>
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen flex bg-[#340000] text-white justify-center'>
      <div className='w-11/12 flex flex-col'>
            <div className='h-20 w-full'></div>
            <div className='flex p-5 flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-4/12 flex mb-8 md:mb-0 justify-center'>
                    <Image 
                      src={committee.image_inside}
                      width={250}
                      height={250}
                    />
                </div>
                <div className='w-full md:w-8/12'>
                  <h1 className='text-3xl md:text-start text-center font-bold mb-4'>{committee.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: committee.description }}></div>
                </div>
            </div>
      </div>
    </div>
  )
}

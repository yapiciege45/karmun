"use client"
import React from 'react'
import { HomeCommitteeComponent } from './HomeCommitteeComponent'
import Committees from '../../json/Committees.json'

export const HomeCommitteesComponent = () => {
  return (
    <section id="committees" className='flex justify-center w-full bg-white'>
        <div className='min-h-screen w-11/12 md:w-10/12 p-3 flex justify-between flex-wrap'>
            {
                Committees.map(committee => (
                    <HomeCommitteeComponent 
                        link={committee.link}
                        image={committee.image}
                        name={committee.name}
                    />
                ))
            }
            
        </div>
    </section>
  )
}

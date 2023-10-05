import React from 'react'
import { TeamCartComponent } from '../shared/TeamCartComponent'
import Members from '../../json/Members.json'

export const HomeOurTeamComponent = () => {
  return (
    <section id="our_team" className='min-h-screen w-full flex justify-center bg-[#340000] p-5'>
        <div className='w-11/12 flex flex-wrap justify-between'>
            {
                Members.map(member => (
                    <TeamCartComponent
                        name={member.name}
                        title={member.title}
                    />
                ))
            }
        </div>
    </section>
  )
}

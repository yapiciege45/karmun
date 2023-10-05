import { HomeCommitteesComponent } from '@/components/home/HomeCommitteesComponent'
import { HomeFaqComponent } from '@/components/home/HomeFaqComponent'
import { HomeOurTeamComponent } from '@/components/home/HomeOurTeamComponent'
import { HomeTopComponent } from '@/components/home/HomeTopComponent'
import { ContactComponent } from '@/components/shared/ContactComponent'
import { FooterComponent } from '@/components/shared/FooterComponent'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import React from 'react'

export const HomeContainer = () => {
  return (
    <>
        <NavbarComponent />
          <HomeTopComponent />
          <HomeCommitteesComponent />
          <HomeFaqComponent />
          <HomeOurTeamComponent />
          <ContactComponent />
          <FooterComponent />
    </>
  )
}

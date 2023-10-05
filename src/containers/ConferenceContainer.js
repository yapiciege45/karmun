import { ConferenceComponent } from '@/components/conference/ConferenceComponent'
import { FooterComponent } from '@/components/shared/FooterComponent'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import React from 'react'

export const ConferenceContainer = () => {
  return (
    <>
        <NavbarComponent />
        <ConferenceComponent />
        <FooterComponent />
    </>
  )
}

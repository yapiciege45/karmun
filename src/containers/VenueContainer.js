import { FooterComponent } from '@/components/shared/FooterComponent'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import { VenueComponent } from '@/components/venue/VenueComponent'
import React from 'react'

export const VenueContainer = () => {
  return (
    <>
        <NavbarComponent />
        <VenueComponent />
        <FooterComponent />
    </>
  )
}

import { AccommodationComponent } from '@/components/accommodation/AccommodationComponent'
import { FooterComponent } from '@/components/shared/FooterComponent'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import React from 'react'

export const AccommodationContainer = () => {
  return (
    <>
        <NavbarComponent />
        <AccommodationComponent />
        <FooterComponent />
    </>
  )
}

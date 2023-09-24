import { HomeTopComponent } from '@/components/home/HomeTopComponent'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import React from 'react'

export const HomeContainer = () => {
  return (
    <>
        <NavbarComponent />
        <main>
          <HomeTopComponent />
        </main>
    </>
  )
}

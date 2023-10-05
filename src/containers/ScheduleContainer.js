import { ScheduleComponent } from '@/components/schedule/ScheduleComponent'
import { FooterComponent } from '@/components/shared/FooterComponent'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import React from 'react'

export const ScheduleContainer = () => {
  return (
    <>
        <NavbarComponent />
        <ScheduleComponent />
        <FooterComponent />
    </>
  )
}

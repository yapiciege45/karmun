import { CommitteeComponent } from '@/components/committee/CommitteeComponent'
import React from 'react'
import Committees from '@/json/Committees.json'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import { FooterComponent } from '@/components/shared/FooterComponent'

export const CommitteeContainer = ({ slug }) => {
    const committee = Committees.find(x => x.slug == slug)
  return (
    <>
        <NavbarComponent />
        <CommitteeComponent committee={committee} />
        <FooterComponent />
    </>
  )
}

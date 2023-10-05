import React from 'react'

import Faq from '@/json/Faq.json'
import { FaqComponent } from '@/components/faq/FaqComponent'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import { FooterComponent } from '@/components/shared/FooterComponent'

export const FaqContainer = () => {
  return (
    <>
        <NavbarComponent />
        <FaqComponent faqs={Faq} />
        <FooterComponent />
    </>
  )
}

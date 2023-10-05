import React from 'react'
import { CommitteeContainer } from '@/containers/CommitteeContainer'

export default function Committee({ params }) {
  return (
    <CommitteeContainer slug={params.slug} />
  )
}

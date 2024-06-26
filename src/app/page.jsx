'use client'

import Breadcrumb from './_components/common/breadcrumb/Breadcrumb'
import Satistical from './_components/Satistical/Satistical'
import RecentEmployer from './_components/RecentEmployer/RecentEmployer'
import { listSatistical } from './_data/Data'
import { employerSelector } from '@/lib/features/employer/emloyerSelector'

import { useSelector } from 'react-redux'

export default function Home() {
  const listEmployer = useSelector(employerSelector)

  return (
    <div className='l-topage'>
      <Breadcrumb />
      <Satistical listSatistical={listSatistical} className='mb-6' />
      <RecentEmployer listEmployer={listEmployer} className='mb-6' />
    </div>
  )
}

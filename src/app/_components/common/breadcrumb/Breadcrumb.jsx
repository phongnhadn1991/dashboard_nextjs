import React from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import './Breadcrumb.scss'
import Link from 'next/link'

const Breadcrumb = () => {
  return (
    <div className='c-breadcrumb flex items-center justify-between'>
      <div className='c-breadcrumb_title'>
        <h3 className='text-[18px] font-medium'>Jobs</h3>
      </div>
      <div className='c-breadcrumb_list'>
        <ul>
          <li>
            <Link href='/'>Dashboards</Link>
            <ChevronDoubleRightIcon />
          </li>
          <li>
            <span>Jobs</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumb

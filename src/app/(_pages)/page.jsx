import { v4 as uuidv4 } from 'uuid'
import Breadcrumb from '../_components/common/breadcrumb/Breadcrumb'
import Satistical from '../_components/satistical/Satistical'
import '@/app/_assets/scss/components/_box.scss'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const listSatistical = [
    {
      id: uuidv4(),
      countNum: '256',
      cate: 'Employers',
      status: 'increase',
      percent: '0.40',
      icon: 'UserIcon',
      bgColor: 'bg-primary'
    },
    {
      id: uuidv4(),
      countNum: '4,2026',
      cate: 'Candidates',
      status: 'reduce',
      percent: '0.40',
      icon: 'UserGroupIcon',
      bgColor: 'bg-red-500'
    },
    {
      id: uuidv4(),
      countNum: '48',
      cate: 'Locations',
      status: 'increase',
      percent: '0.82',
      icon: 'GlobeAsiaAustraliaIcon',
      bgColor: 'bg-yellow-500'
    },
    {
      id: uuidv4(),
      countNum: '1,116',
      cate: 'Recruiters',
      status: 'reduce',
      percent: '0.82',
      icon: 'ClipboardDocumentCheckIcon',
      bgColor: 'bg-green-500'
    },
    {
      id: uuidv4(),
      countNum: '1,468',
      cate: 'Subscriptions',
      status: 'increase',
      percent: '0.82',
      icon: 'BellIcon',
      bgColor: 'bg-pink-500'
    },
    {
      id: uuidv4(),
      countNum: '34%',
      cate: 'Upload Ratio',
      status: 'increase',
      percent: '0.82',
      icon: 'PhotoIcon',
      bgColor: 'bg-gray-500'
    }
  ]
  return (
    <div className='l-topage'>
      <Breadcrumb />
      <Satistical listSatistical={listSatistical} className='mb-6' />
      <div className='c-projectSummary'>
        <div className='c-box'>
          <div className='c-boxHeader'>
            <div className='c-box_title'>Project Summary</div>
          </div>
          <div className='c-boxBody'>
            <div className='p-tableResponsive'>
              <table className='table-fixed hover:border-collapse border border-gray-100 w-full'>
                <thead>
                  <tr>
                    <td className='border border-gray-200 text-[13.6px] font-medium text-center p-3'>
                      S.No
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium text-center p-3'>
                      Title
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium text-center p-3'>
                      Assigned To
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium text-center p-3'>
                      Task
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium text-center p-3'>
                      Progress
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium text-center p-3'>
                      Status
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium text-center p-3'>
                      Due date
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className='c-boxFooter'>
            <div className='flex items-center font-normal gap-2 text-gray-500'>
              <span className='text-sm'>Showing 5 Entriers</span>
              <ArrowLongRightIcon className='h-4 w-4' strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

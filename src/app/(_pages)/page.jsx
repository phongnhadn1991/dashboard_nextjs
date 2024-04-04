import { v4 as uuidv4 } from 'uuid'
import Breadcrumb from '../_components/common/breadcrumb/Breadcrumb'
import Satistical from '../_components/Satistical/Satistical'
import RecentEmployer from '../_components/RecentEmployer/RecentEmployer'

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
  const listRecentEmployer = [
    {
      id: uuidv4(),
      fullName: 'Mayor Kelly',
      avart: './images/face1.jpeg',
      role: '1',
      email: 'ngoanmc@concrete-corp.com',
      location: 'vietnam'
    }
  ]
  return (
    <div className='l-topage'>
      <Breadcrumb />
      <Satistical listSatistical={listSatistical} className='mb-6' />
      <RecentEmployer className='mb-6' />
    </div>
  )
}

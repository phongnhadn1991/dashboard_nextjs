import Breadcrumb from '../_components/common/breadcrumb/Breadcrumb'
import Satistical from '../_components/Satistical/Satistical'
import RecentEmployer from '../_components/RecentEmployer/RecentEmployer'
import { listSatistical, listRecentEmployer } from '../_data/Data'

export default function Home() {
  return (
    <div className='l-topage'>
      <Breadcrumb />
      <Satistical listSatistical={listSatistical} className='mb-6' />
      <RecentEmployer
        listRecentEmployer={listRecentEmployer}
        className='mb-6'
      />
    </div>
  )
}

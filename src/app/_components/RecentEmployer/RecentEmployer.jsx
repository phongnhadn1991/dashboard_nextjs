import '@/app/_assets/scss/components/_box.scss'
import {
  ArrowLongRightIcon,
  MapPinIcon,
  TrashIcon,
  UserIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline'

const RecentEmployer = (params) => {
  const { ...restParams } = params
  return (
    <div className={`c-recentEmployer ${restParams.className}`}>
      <div className='c-box'>
        <div className='c-boxHeader'>
          <div className='c-box_title'>Recent Employer</div>
        </div>
        <div className='c-boxBody'>
          <div className='p-tableResponsive'>
            <table className='table-auto border border-gray-100 w-full'>
              <thead>
                <tr>
                  <th className='border border-gray-200 text-[13.6px] font-medium p-3'>
                    <div className='flex items-center justify-center'>
                      <label
                        htmlFor='checkAll'
                        className='form-check-input h-[13px]'
                      >
                        <input
                          type='checkbox'
                          name='checkAll'
                          id='checkAll'
                          className='rounded-md'
                        />
                      </label>
                    </div>
                  </th>
                  <th className='border border-gray-200 text-[13.6px] font-medium p-3'>
                    Employer
                  </th>
                  <th className='border border-gray-200 text-[13.6px] font-medium p-3'>
                    Category
                  </th>
                  <th className='border border-gray-200 text-[13.6px] font-medium p-3'>
                    Role
                  </th>
                  <th className='border border-gray-200 text-[13.6px] font-medium p-3'>
                    Mail
                  </th>
                  <th className='border border-gray-200 text-[13.6px] font-medium p-3'>
                    Location
                  </th>
                  <th className='border border-gray-200 text-[13.6px] font-medium p-3'>
                    Date
                  </th>
                  <th className='border border-gray-200 text-[13.6px] font-medium p-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((e, i) => (
                  <tr key={i} className='hover:bg-primary/5'>
                    <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
                      <div className='flex items-center justify-center'>
                        <label
                          htmlFor='check'
                          className='form-check-input h-[13px]'
                        >
                          <input
                            type='checkbox'
                            name='check'
                            id='check'
                            className='rounded-md'
                          />
                        </label>
                      </div>
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
                      <div className='flex items-center'>
                        <div className='w-8 h-8 flex items-center me-2'>
                          <img
                            src='./images/face1.jpeg'
                            alt=''
                            className='rounded-full inline-block'
                          />
                        </div>
                        <h4>Mayor Kelly</h4>
                      </div>
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
                      <div>
                        <span>Development</span>
                      </div>
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
                      <div>
                        <span className='text-[11px] bg-primary/10 text-primary px-2 py-1 rounded-md capitalize'>
                          Team lead
                        </span>
                      </div>
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
                      <div>Ngoanmc@concrete-corp.com</div>
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
                      <div className='flex items-center gap-1'>
                        <MapPinIcon className='h-4 w-4 text-gray-500' />
                        <span>Vietnam</span>
                      </div>
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
                      <div>Web Apr 3, 2024</div>
                    </td>
                    <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
                      <div className='flex gap-1'>
                        <button
                          type='button'
                          className='bg-success/10 text-success hover:bg-success hover:text-white  p-1 flex items-center justify-center rounded-md w-7 h-7'
                        >
                          <UserIcon className='h-4 w-4' strokeWidth={2} />
                        </button>
                        <button
                          type='button'
                          className='bg-secondary/10 text-secondary hover:bg-secondary hover:text-white p-1 flex items-center justify-center rounded-md w-7 h-7'
                        >
                          <PencilSquareIcon className='h-4 w-4' />
                        </button>
                        <button
                          type='button'
                          className='bg-danger/10 text-danger hover:bg-danger hover:text-white p-1 flex items-center justify-center rounded-md w-7 h-7'
                        >
                          <TrashIcon className='h-4 w-4' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
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
  )
}

export default RecentEmployer

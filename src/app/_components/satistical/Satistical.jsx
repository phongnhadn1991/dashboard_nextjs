import React from 'react'
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'
import * as IconSet from '@heroicons/react/24/outline'
import classNames from 'classnames'

const Satistical = (params) => {
  const { listSatistical, ...restParams } = params
  return (
    <div className={`c-satistical ${restParams.className}`}>
      <div className='c-satistical_list grid grid-cols-12 gap-6'>
        {listSatistical.map((item) => (
          <div
            key={item.id}
            className='c-satistical_item xl:col-span-4 md:col-span-6 sm:col-span-12 bg-white px-5 py-4 flex items-start rounded-md shadow-sm'
          >
            <div
              className={classNames(
                'w-10 h-10 rounded-md flex items-center justify-center',
                item.bgColor ? `${item.bgColor}` : 'bg-primary'
              )}
            >
              {item.icon &&
                React.createElement(IconSet[item.icon], {
                  className: 'h-6 w-6 text-white'
                })}
            </div>
            <div className='ms-4 flex-1'>
              <div className='flex justify-between items-center'>
                <h5 className='font-medium mb-0 leading-none text-[1.25rem]'>
                  {item.countNum}
                </h5>
                <div
                  className={classNames('text-lg flex gap-2', {
                    'text-green-600': item.status === 'increase',
                    'text-red-600': item.status === 'reduce'
                  })}
                >
                  {item.status === 'increase' ? (
                    <ArrowTrendingUpIcon className='h-6 w-6' />
                  ) : (
                    <ArrowTrendingDownIcon className='h-6 w-6' />
                  )}
                  <span className='font-medium'>
                    {item.status === 'increase' ? '+' : '-'}
                    {item.percent}%
                  </span>
                </div>
              </div>
              <div className='uppercase text-xs text-gray-500'>
                Total {item.cate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Satistical

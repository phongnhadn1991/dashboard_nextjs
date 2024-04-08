'use client'
import '@/app/_assets/scss/components/_box.scss'
import employerSlice from '@/lib/features/employer/employerSlice'
import {
  ArrowLongRightIcon,
  MapPinIcon,
  TrashIcon,
  UserIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const RecentEmployer = (params) => {
  const { listEmployer, ...restParams } = params
  const dispatch = useDispatch()

  const [checkedItems, setCheckedItems] = useState([])

  const handleCheckboxChange = (event, itemId) => {
    const isChecked = event.target.checked
    if (isChecked) {
      setCheckedItems([...checkedItems, itemId])
      console.log(checkedItems)
    } else {
      setCheckedItems(checkedItems.filter((id) => id !== itemId))
    }
  }

  const removeItemChecked = () => {
    dispatch(employerSlice.actions.removeByIds(checkedItems))
  }

  useEffect(() => {
    console.log('checkedItems', checkedItems)
  }, [checkedItems])

  return (
    <div className={`c-recentEmployer ${restParams.className}`}>
      <div className='c-box'>
        <div className='c-boxHeader flex justify-between items-start'>
          <div className='c-box_title'>Recent Employer</div>
          <button
            type='button'
            className='bg-danger/10 text-danger hover:bg-danger hover:text-white font-normal text-sm py-1 px-3 rounded-md shadow-sm'
            onClick={removeItemChecked}
          >
            Remove checked
          </button>
        </div>
        <div className='c-boxBody'>
          <div className='p-tableResponsive overflow-auto'>
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
                    Position
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
                {listEmployer.length ? (
                  listEmployer.map((item, idx) => (
                    <ItemEmployer
                      item={item}
                      idx={idx}
                      key={idx}
                      isChecked={checkedItems.includes(item.id)}
                      handleCheckboxChange={handleCheckboxChange}
                    />
                  ))
                ) : (
                  <></>
                )}
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

export const ItemEmployer = (props) => {
  const { item, idx, isChecked, handleCheckboxChange } = props

  const roleTextUser = (num) => {
    return num === '1'
      ? 'Team Led'
      : num === '2'
        ? 'Developer'
        : num === '3'
          ? 'Back Office'
          : 'Order'
  }

  const roleClassUser = (num) => {
    return num === '1'
      ? 'bg-primary/10 text-primary'
      : num === '2'
        ? 'bg-secondary/10 text-secondary'
        : num === '3'
          ? 'bg-success/10 text-success'
          : 'bg-warning/10 text-warning'
  }

  const dispatch = useDispatch()

  const removeUser = (idUser) => {
    dispatch(employerSlice.actions.removeById(idUser))
  }

  return (
    <tr className='hover:bg-primary/5'>
      <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
        <div className='flex items-center justify-center'>
          <label htmlFor={`check-${idx}`} className='form-check-input h-[13px]'>
            <input
              type='checkbox'
              name={`check-${idx}`}
              id={`check-${idx}`}
              className='rounded-md'
              checked={isChecked}
              onChange={(event) => handleCheckboxChange(event, item.id)}
            />
          </label>
        </div>
      </td>
      <td className='border border-gray-200 text-[13.6px] font-medium p-3 min-w-40'>
        <div className='flex items-center'>
          <div className='w-8 h-8 flex items-center me-2'>
            <img
              src={item.avart}
              alt=''
              className='rounded-full inline-block'
            />
          </div>
          <h4>{item.fullName}</h4>
        </div>
      </td>
      <td className='border border-gray-200 text-[13.6px] font-medium p-3 min-w-32'>
        <div>
          <span>{item.position}</span>
        </div>
      </td>
      <td className='border border-gray-200 text-[13.6px] font-medium p-3 min-w-28'>
        <div>
          <span
            className={classNames(
              'text-[11px] px-2 py-1 rounded-md capitalize',
              roleClassUser(item.role)
            )}
          >
            {roleTextUser(item.role)}
          </span>
        </div>
      </td>
      <td className='border border-gray-200 text-[13.6px] font-medium p-3 min-w-32'>
        <div>{item.email}</div>
      </td>
      <td className='border border-gray-200 text-[13.6px] font-medium p-3'>
        <div className='flex items-center gap-1'>
          <MapPinIcon className='h-4 w-4 text-gray-500' />
          <span>{item.location}</span>
        </div>
      </td>
      <td className='border border-gray-200 text-[13.6px] font-medium p-3 min-w-32'>
        <div>{item.dateCreate}</div>
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
            onClick={() => removeUser(item.id)}
          >
            <TrashIcon className='h-4 w-4' />
          </button>
        </div>
      </td>
    </tr>
  )
}

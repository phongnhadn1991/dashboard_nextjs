import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'

const ModalDetailEmployer = ({ showModal, closeModal }) => {
  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='flex gap-5'>
                    <div className='w-32 h-32 flex items-center justify-center'>
                      <img
                        src='./images/face1.jpeg'
                        alt=''
                        className='rounded-full shadow-md'
                      />
                    </div>
                    <div>
                      <h3 className='font-medium text-[18px] flex items-center gap-2'>
                        Mayor Kelly{' '}
                        <span>
                          <span
                            className={classNames(
                              'text-[11px] px-2 py-1 rounded-md capitalize font-normal',
                              'bg-primary/10 text-primary'
                            )}
                          >
                            Team Lead
                          </span>
                        </span>
                      </h3>
                      <div className='text-sm mt-2 leading-6'>
                        <p>Email: mayorKelly@emailUser.com</p>
                        <p>Position: Backend</p>
                        <p>Location: Japan</p>
                        <p>Date: 09/04/2024</p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalDetailEmployer

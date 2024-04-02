'use client'

import {
  TrashIcon,
  ShoppingCartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import './CartDropdown.scss'

const CartDropdown = (props) => {
  const { isOpen, listCart, handleDeleteCart } = props

  return (
    <div
      className={`p-cartDropdown duration-100 ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'} w-[22rem] bg-white absolute z-10 top-[102%] right-0 drop-shadow-xl rounded-b-sm`}
    >
      <div className='p-cartDropdown_head p-4 border-b border-dark-100 flex justify-between items-center'>
        <p className='text-[17px] font-medium text-[#333]'>Cart Items</p>
        <button className='font-[400] py-[5px] px-[10px] leading-none rounded-[0.25rem] text-[11px] bg-green-100 hover:bg-green-200 text-green-700'>
          {listCart.length} items
        </button>
      </div>
      {listCart.length > 0 ? (
        <>
          <div className='p-cartDropdown_list'>
            {listCart.map((e, i) => (
              <div
                key={i}
                className='p-cartDropdown_item flex items-start px-[15px] py-2 hover:bg-blue-50'
              >
                <div className='p-cartItem_thumb w-7 h-7 flex items-center justify-center mr-3'>
                  <img
                    src={e.imageSrc}
                    alt=''
                    className='inline-block rounded-full w-7 h-7'
                  ></img>
                </div>
                <div className='p-cartItem_body flex-1'>
                  <div className='p-cartItem_info flex justify-between items-center'>
                    <h5 className='w-2/3 line-clamp-1'>{e.title}</h5>
                    <div className='p-cartItem_price'>
                      <p>${e.price}.00</p>
                    </div>
                    <div className='p-cartItem_action ms-2'>
                      <button
                        onClick={() => handleDeleteCart(e.id)}
                        type='button'
                        className='flex items-center hover:bg-red-100 p-1 rounded-md'
                      >
                        <TrashIcon
                          className='w-4 h-4 text-red-500'
                          strokeWidth='1.5'
                        />
                      </button>
                    </div>
                  </div>
                  <div className='p-cartItem_detail'>
                    <ul className='text-xs flex'>
                      {e.extend.map((e, i) => (
                        <li key={i}>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='p-cartDropdown_footer p-4'>
            <button
              type='button'
              className='bg-primary hover:bg-primaryHover text-white w-full font-medium p-2.5 text-sm rounded-sm'
            >
              Proceed to checkout
            </button>
          </div>
        </>
      ) : (
        <div className='p-cartDropdown_empty flex flex-col items-center p-12 gap-4'>
          <div className='bg-orange-50 w-14 h-14 flex items-center justify-center rounded-md'>
            <ShoppingCartIcon
              className='w-8 h-8 text-amber-500'
              strokeWidth={1.5}
            />
          </div>
          <div className='text-center'>
            <h6 className='font-medium text-gray-600'>Your Cart is Empty</h6>
            <p className='font-light text-sm text-gray-500'>
              Add some items to make me happy :)
            </p>
          </div>
          <button
            type='button'
            className='bg-gray-100 hover:bg-primaryHover text-primary hover:text-white text-[14px] font-normal py-1 px-2 flex items-center gap-2'
          >
            continue shopping
            <ArrowRightIcon className='h-3 w-3' strokeWidth={1.5} />
          </button>
        </div>
      )}
    </div>
  )
}

export default CartDropdown

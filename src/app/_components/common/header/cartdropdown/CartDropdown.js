'use client'

import { useState, useEffect, useRef } from 'react'
import './CartDropdown.scss'

const CartDropdown = (props) => {

    const { isOpen, listCart, handleDeleteCart } = props

    return (
        <div 
            className={`p-cartDropdown duration-100 ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'} w-[22rem] bg-white absolute z-10 top-[102%] right-0 drop-shadow-xl rounded-b-sm`}
        >
            <div className='p-cartDropdown_head p-4 border-b border-dark-100 flex justify-between items-center'>
                <p className='text-[17px] font-medium text-[#333]'>Cart Items</p>
                <button className="font-[400] py-[5px] px-[10px] leading-none rounded-[0.25rem] text-[11px] bg-green-100 hover:bg-green-200 text-green-700">{ listCart.length } items</button>
            </div>
            {listCart.length > 0
            ? (
                <>
                    <div className='p-cartDropdown_list'>
                    {
                        listCart.map((e, i) => (
                            <div
                                key={i}
                                className='p-cartDropdown_item flex items-start px-[15px] py-2 hover:bg-blue-50'
                            >
                                <div className='p-cartItem_thumb w-7 h-7 flex items-center justify-center mr-3'>
                                    <img
                                        src={e.imageSrc}
                                        alt=''
                                        className='inline-block rounded-full w-7 h-7'
                                    >
                                    </img>
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
                                            type="button" className='flex items-center hover:bg-red-100 p-1 rounded-md'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='p-cartItem_detail'>
                                        <ul className='text-xs flex'>
                                            {e.extend.map((e,i) => (
                                                <li key={i}><span>{e}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }      
                    </div>
                    <div className='p-cartDropdown_footer p-4'>
                        <button
                            type='button'
                            className='bg-primary hover:bg-primaryHover text-white w-full font-medium p-2.5 text-sm rounded-sm'
                        >Proceed to checkout</button>
                    </div>
                </>
            )
            : (
                <div className='p-cartDropdown_empty flex flex-col items-center p-12 gap-4'>
                    <div className='bg-orange-50 w-14 h-14 flex items-center justify-center rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div className='text-center'>
                        <h6 className='font-medium text-gray-600'>Your Cart is Empty</h6>
                        <p className='font-light text-sm text-gray-500'>Add some items to make me happy :)</p>
                    </div>
                    <button
                        type="button"
                        className='bg-gray-100 hover:bg-primaryHover text-primary hover:text-white text-[14px] font-normal py-1 px-2 flex items-center gap-2'
                    >
                        continue shopping
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            )
            }
        </div>
    );
}

export default CartDropdown;

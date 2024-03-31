'use client'

import './Header.scss'
import { useState, useEffect, useRef } from 'react'
import CartDropdown from './cartdropdown/CartDropdown';
import Link from 'next/link';
import useClickOutside from '@/app/_hooks/useClickOutSide';
useRef
const Header = () => {
    const [openCart, setOpenCart] = useState(false);
    const handleDropDownCart = () => {
        setOpenCart(!openCart)
    }

    const [openUser, setOpenUser] = useState(false);
    const handleDropDownUser = () => {
        setOpenUser(!openUser)
    }

    const dataCartJson = [
        {
            id: 1,
            title: 'SomeThing Phone',
            price: 890,
            extend: ['Metallic Blue', '6gb Ram'],
            imageSrc: '/images/1.jpeg'
        },
        {
            id: 2,
            title: 'Stop Watch',
            price: 1200,
            extend: ['Black', 'Analog'],
            imageSrc: '/images/2.jpeg'
        },
        {
            id: 3,
            title: 'Photo Frame',
            price: 350,
            extend: ['White', 'Decoration'],
            imageSrc: '/images/3.jpeg'
        },
        {
            id: 4,
            title: 'Kikon Camera',
            price: 1500,
            extend: ['Black', '50mm'],
            imageSrc: '/images/4.jpeg'
        },
        {
            id: 5,
            title: 'Canvas Shoes',
            price: 220,
            extend: ['Gray', 'Sport'],
            imageSrc: '/images/5.jpeg'
        },
    ]
    const [listCart, setListCart] = useState(dataCartJson)
    const handleDeleteCart = (id) => {
        let filterListCart = listCart.filter(e => e.id !== id)
        setListCart(filterListCart)
    }

    // Click Outside Cart Dropdown
    const refCartDropdown = useRef(null);
    const refUserDropdown = useRef(null);
    useClickOutside(refCartDropdown,() => setOpenCart(false))
    useClickOutside(refUserDropdown,() => setOpenUser(false))
    
    return (
        <header className='p-header bg-white ps-[15rem] fixed w-full h-[60px]'>
            <div className='p-headerNav px-4'>
                <div className='p-nav_container'>
                    <div className='p-nav_hamburger flex flex-col items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className='p-nav_content'>
                        <div className='p-nav_icon p-nav_search px-2 pt-[17.73px] pb-[17px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <div className='p-nav_icon p-nav_cart px-2 pt-[17.73px] pb-[17px] relative z-20' ref={refCartDropdown}>
                            <button type='button' className='relative !p-0 !border-0 flex-shrink-0 !rounded-full !shadow-none align-middle text-xs'
                                onClick={handleDropDownCart}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <div className='flex absolute h-5 w-5 top-[-8px] right-[-6px] end-0 -me-[5px]'>
                                    <span className='relative inline-flex rounded-full h-[14.7px] w-[14px] text-[0.625rem] bg-primary text-white justify-center items-center'>{listCart.length}</span>
                                </div>
                            </button>
                            <CartDropdown isOpen={openCart} listCart={listCart} handleDeleteCart={handleDeleteCart}></CartDropdown>
                        </div>
                        <div className='p-nav_icon p-nav_notice px-2 pt-[17.73px] pb-[17px] relative'>
                            <button type='button' className='relative !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                                <div className='flex absolute h-5 w-5 top-[-8px] right-[-6px] end-0 -me-[5px]'>
                                <span className='animate-slow-ping absolute inline-flex -top-[2px] -start-[2px] h-full w-full rounded-full bg-red-500 opacity-75'></span>
                                    <span className='relative inline-flex rounded-full h-[14.7px] w-[14px] text-[0.625rem] bg-red-500 text-white justify-center items-center'>5</span>
                                </div>
                            </button>
                        </div>
                        <div className='p-nav_user flex items-center px-8 relative cursor-pointer'
                            onClick={handleDropDownUser}
                            ref={refUserDropdown}
                        >
                            <div className='p-user flex items-center'>
                                <div className='p-user_avarta w-8 h-8 flex items-center justify-center'>
                                    <img
                                        src='https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/349799551_5970857749686399_1271567407826670662_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4GTVdSdMDEsAX-SmVjj&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAtCTP7Uw1Adetx5OPAWc7jUdf_oJSqidef4Qokf0aJdQ&oe=660C3838'
                                        alt=''
                                        className='inline-block rounded-full mr-3'
                                    >
                                    </img>
                                </div>
                                <div className='p-user_info'>
                                    <p className='font-medium text-[12px] text-[#536485] leading-1'>Ngoan MC</p>
                                    <p className='font-light text-[11px] text-[#536485] leading-none'>Developer</p>
                                </div>
                            </div>
                            <div className={`w-[11rem] duration-100 ${openUser ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'} bg-white absolute z-10 top-[102%] right-0 drop-shadow-xl rounded-b-sm`}>
                                <ul className='text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50'>
                                    <li>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className='text-[13px] font-normal'>Profile</span>
                                        </Link>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                                            </svg>
                                            <span className='text-[13px] font-normal'>Inbox</span>
                                            <span className='text-green-500 bg-gray-100 text-[10px] font-medium p-1.5 rounded-sm leading-none ml-auto'>25</span>
                                        </Link>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                            </svg>
                                            <span className='text-[13px] font-normal'>Taskmanager</span>
                                        </Link>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                            </svg>
                                            <span className='text-[13px] font-normal'>Setting</span>
                                        </Link>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        </svg>
                                            <span className='text-[13px] font-normal'>Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

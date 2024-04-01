'use client'

import './Header.scss'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, BellIcon, UserCircleIcon, InboxIcon, ClipboardDocumentCheckIcon, AdjustmentsHorizontalIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
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
        <header className='p-header bg-white ps-[15rem] fixed top-0 left-0 w-full h-[60px]'>
            <div className='p-headerNav px-4'>
                <div className='p-nav_container'>
                    <div className='p-nav_hamburger flex flex-col items-center justify-center'>
                        <Bars3Icon className="h-6 w-6 text-gray-500" strokeWidth="1.5" />
                    </div>
                    <div className='p-nav_content'>
                        <div className='p-nav_icon p-nav_search px-2 pt-[17.73px] pb-[17px]'>
                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" strokeWidth="1.5"/>
                        </div>
                        <div className='p-nav_icon p-nav_cart px-2 pt-[17.73px] pb-[17px] relative z-20' ref={refCartDropdown}>
                            <button type='button' className='relative !p-0 !border-0 flex-shrink-0 !rounded-full !shadow-none align-middle text-xs'
                                onClick={handleDropDownCart}
                            >
                                <ShoppingCartIcon className="h-6 w-6 text-gray-500" strokeWidth="1.5"/>
                                <div className='flex absolute h-5 w-5 top-[-8px] right-[-6px] end-0 -me-[5px]'>
                                    <span className='relative inline-flex rounded-full h-[14.7px] w-[14px] text-[0.625rem] bg-primary text-white justify-center items-center'>{listCart.length}</span>
                                </div>
                            </button>
                            <CartDropdown isOpen={openCart} listCart={listCart} handleDeleteCart={handleDeleteCart}></CartDropdown>
                        </div>
                        <div className='p-nav_icon p-nav_notice px-2 pt-[17.73px] pb-[17px] relative'>
                            <button type='button' className='relative !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs'>
                                <BellIcon className="h-6 w-6 text-gray-500" strokeWidth="1.5"/>
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
                                            <UserCircleIcon className="h-4 w-4 text-gray-500" strokeWidth='2'/>
                                            <span className='text-[13px] font-normal'>Profile</span>
                                        </Link>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                            <InboxIcon className="h-4 w-4 text-gray-500" strokeWidth="1.5"/>
                                            <span className='text-[13px] font-normal'>Inbox</span>
                                            <span className='text-green-500 bg-gray-100 text-[10px] font-medium p-1.5 rounded-sm leading-none ml-auto'>25</span>
                                        </Link>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                            <ClipboardDocumentCheckIcon className="h-4 w-4 text-gray-500" strokeWidth="1.5"/>
                                            <span className='text-[13px] font-normal'>Taskmanager</span>
                                        </Link>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                            <AdjustmentsHorizontalIcon className="h-4 w-4 text-gray-500" strokeWidth="1.5"/>
                                            <span className='text-[13px] font-normal'>Setting</span>
                                        </Link>
                                        <Link href="#" className='flex items-center hover:bg-blue-50 gap-2 p-2.5'>
                                            <ArrowRightStartOnRectangleIcon className="h-4 w-4 text-gray-500" strokeWidth="1.5"/>
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

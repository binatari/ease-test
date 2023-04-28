import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TopBanner from '../TopBanner'

const HomeNav = () => {
    const [show, setShow] = useState(true)
    const [openTab, setOpenTab] = useState(false)



    return (
        <>
                <header className={`fixed top-0 left-0 w-full z-[100] nav-bg`}>
            {
                show ? <TopBanner closeBanner={() => setShow(false)} /> : null
            }

            <nav className='flex  justify-between  items-center container mx-auto py-8'>
                <div className='max-h-[40px] flex-shrink-0 max-w-[140px]'>
                    <img src='/images/home.png' className='h-full' />
                </div>
                <ul className='md:flex space-x-16 hidden'>
                    <li>
                        <Link href={'#'} className='text-sm text-white'>
                            Use Cases
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm text-white'>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm text-white'>
                            Company
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm text-white'>
                            Support
                        </Link>
                    </li>
                </ul>



                <div className='flex space-x-4'>
                    <div class="md:hidden">
                        <button class="navbar-burger flex items-center text-white p-3" onClick={() => setOpenTab(!openTab)}>
                            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <button className='text-sm text-white py-2 px-5'>
                        Log In
                    </button>
                    <button className='text-sm text-white bg-white bg-opacity-[0.05] border border-[#FFFFFF0D] py-2 px-5'>
                        Sign Up
                    </button>
                </div>
            </nav>
         
        </header>

        
        {
                openTab ? <div class=" relative z-[1000] md:hidden">
                    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 linear-gradient  overflow-y-auto">
                        <div class="flex items-center mb-8">
                            <div className='max-h-[40px] flex-shrink-0 max-w-[140px]'>
                                <img src='/images/home.png' className='h-full' />
                            </div>
                            <button class="navbar-close" onClick={() => setOpenTab(!openTab)}>
                                <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul className='flex flex-col items-center space-y-6  md:hidden'>
                                <li>
                                    <Link href={'#'} className='text-sm text-white'>
                                        Use Cases
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'} className='text-sm text-white'>
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'} className='text-sm text-white'>
                                        Company
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'} className='text-sm text-white'>
                                        Support
                                    </Link>
                                </li>
                            </ul>
                            <div />

                        </div>
                    </nav>

                </div> : null
            }
        </>

    )
}

export default HomeNav
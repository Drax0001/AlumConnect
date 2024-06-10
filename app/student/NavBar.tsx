"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Home from '../page';
import { FaSearch, FaCaretDown, FaHome, FaCalendarAlt, FaNewspaper, FaUserGraduate } from 'react-icons/fa';
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const currentPath = usePathname();
    return (
    <nav className='font-inter flex justify-between items-center py-1 px-12 shadow-md'>
        <Link href='/'>
            <Image 
                src='/alumconnect_logo.png'
                alt='alumconnect_logo' 
                width={100} 
                height={100}
                priority
            />
        </Link>
        <ul className='flex space-x-12 items-center'>
            <li className={`${currentPath ==='/student/dashboard' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:bg-backgroundGray`}>
                <Link className='flex items-center space-x-1' href='/student/dashboard'>
                    <FaHome size={14} />
                    <p>
                        Dashboard
                    </p>
                    
                </Link>
            </li>
            <li className={`${currentPath ==='/student/events' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:bg-backgroundGray`}>
                <Link className='flex items-center space-x-1' href='/student/events'>
                    <FaCalendarAlt size={14} />
                    <p>
                        Events
                    </p>
                    
                </Link>
            </li>
            <li className={`${currentPath ==='/student/alumnidirectory' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:bg-backgroundGray`}>
                <Link className='flex items-center space-x-1' href='/student/alumnidirectory'>
                    <FaUserGraduate size={14} />
                    <p>
                        Alumni
                    </p>
                    
                </Link>
            </li>
            <li className={`${currentPath ==='/student/resources' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:bg-backgroundGray`}>
                <Link className='flex items-center space-x-1' href='/student/resources'>
                    <FaNewspaper size={14} />
                    <p>
                        Resources
                    </p>
                    
                </Link>
            </li>
        </ul>
        <div className='flex items-center space-x-4'>
            <FaSearch size={24} className='mr-4'  />
            <div className='h-10 w-10 bg-primaryLight rounded-full'>
                {/* <Image /> */}
            </div>
            <p>Berthold</p>
            <FaCaretDown size={24} />
        </div>
    </nav>
  )
}

export default NavBar
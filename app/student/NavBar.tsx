"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Home from '../page';
import { FaSearch, FaCaretDown, FaHome, FaCalendarAlt, FaNewspaper, FaUserGraduate } from 'react-icons/fa';
import { usePathname } from 'next/navigation'
import { getUserId, studentLogout } from '../actions';
import { StudentType } from '@/types';
import LogoutButton from '../components/LogoutButton';
import { useFormState } from 'react-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [userData, setUserData] = useState()
    const [error, formAction] = useFormState(studentLogout, undefined)

    const currentPath = usePathname();

    // useEffect(() => {

    //     const getUserData = async() => {
    //         const data = await getUserId()
    //         setUserData(data)
    //     }
    //     getUserData()
    // }, [])

    //Handles the opening and closing of our nav
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

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
        <ul className={`flex space-x-12 items-center md:flex-col md:justify-center  ${isOpen ? 'md:flex ' : 'md:hidden'}`}>
            <li className={`${currentPath ==='/student/dashboard' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:underline`}>
                <Link className='flex items-center space-x-1' href='/student/dashboard'>
                    <FaHome size={14} />
                    <p>
                        Dashboard
                    </p>
                    
                </Link>
            </li>
            <li className={`${currentPath ==='/student/events' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:underline`}>
                <Link className='flex items-center space-x-1' href='/student/events'>
                    <FaCalendarAlt size={14} />
                    <p>
                        Events
                    </p>
                    
                </Link>
            </li>

            <li className={`${currentPath ==='/student/resources' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:underline`}>
                <Link className='flex items-center space-x-1' href='/student/resources'>
                    <FaNewspaper size={14} />
                    <p>
                        Resources
                    </p>
                    
                </Link>
            </li>
            <li className={`${currentPath ==='/student/mentoring' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:underline`}>
                <Link className='flex items-center space-x-1' href='/student/mentoring'>
                    <FaUserGraduate size={14} />
                    <p>
                        Mentoring
                    </p>
                    
                </Link>
            </li>
        </ul>
        <form action={formAction} className={`${isOpen ? 'lg:flex ' : 'lg:hidden'}`}>
            <LogoutButton />
        </form>
        <button onClick={handleClick} className="flex-col justify-center items-center hidden md:flex">
            <span className={`bg-stone-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
            <span className={`bg-stone-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
            <span className={`bg-stone-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} ></span>  
        </button>
    </nav>
  )
}

export default NavBar
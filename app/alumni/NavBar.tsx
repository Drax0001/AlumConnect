"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Home from '../page';
import { FaSearch, FaCaretDown, FaHome, FaCalendarAlt, FaNewspaper, FaUserGraduate } from 'react-icons/fa';
import { usePathname } from 'next/navigation'
import LogoutButton from '../components/LogoutButton';
import { useFormState } from 'react-dom';
import { alumniLogout } from '../actions';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [error, formAction] = useFormState(alumniLogout, undefined)

    const currentPath = usePathname();

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
            <li className={`${currentPath ==='/alumni/dashboard' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:underline`}>
                <Link className='flex items-center space-x-1' href='/alumni/dashboard'>
                    <FaHome size={14} />
                    <p>
                        Dashboard
                    </p>
                    
                </Link>
            </li>
            <li className={`${currentPath ==='/alumni/events' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:underline`}>
                <Link className='flex items-center space-x-1' href='/alumni/events'>
                    <FaCalendarAlt size={14} />
                    <p>
                        Events
                    </p>
                    
                </Link>
            </li>
            <li className={`${currentPath ==='/alumni/resources' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:underline`}>
                <Link className='flex items-center space-x-1' href='/alumni/resources'>
                    <FaNewspaper size={14} />
                    <p>
                        Resources
                    </p>
                    
                </Link>
            </li>
            {/* <li className={`${currentPath ==='/alumni/mentoring' ? 'active' : ''} transition duration-300  rounded-md  py-2 px-3 hover:underline`}>
                <Link className='flex items-center space-x-1' href='/alumni/mentoring'>
                    <FaUserGraduate size={14} />
                    <p>
                        Mentoring
                    </p>
                    
                </Link>
            </li> */}
        </ul>
        <form action={formAction}>
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
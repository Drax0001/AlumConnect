import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'

interface Props {
    handleClick: () => void
} 

const isLoggedIn = cookies().get("Authorization")

const LandingNav = () => {
  return (
    <nav className='flex justify-between items-center py-1 px-6 border border-b-backgroundGray font-inter'>
        <div className='flex divide-x-2 divide-primary'>
            <Link href='/'>
                <Image 
                    src='/alumconnect_logo.png'
                    alt='alumconnect_logo' 
                    width={80} 
                    height={80}
                    priority
                />
            </Link>
            <Link href='ubuea.cm' className='flex items-center'>
                <Image 
                    src='/ub_logo.png'
                    alt='Ub_logo' 
                    width={60} 
                    height={60}
                    priority
                />
                <h1 className='text-sky-600 font-bold text-sm'>UNIVERSITY <br />OF BUEA</h1>
            </Link>
        </div>
       { !isLoggedIn ? 
       
            <ul className='flex gap-x-4'>
                <li className='hover:font-semibold hover:underline transition duration-200'>
                    <Link href='/student/alumnidirectory'>Alumni</Link>
                </li>
                <li className='hover:font-semibold hover:underline transition duration-200'>
                    <Link href='/student/alumnidirectory'>Sign In</Link>
                </li>
            </ul> :
            <Link className='hover:font-semibold hover:underline transition duration-200' href='/student/dashboard'>Dashboard</Link>
        }
    </nav>
  )
}

export default LandingNav
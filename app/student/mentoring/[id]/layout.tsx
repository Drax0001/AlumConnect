"use client"

import { AlumniType } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode, useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'

interface Props {
    params: { id: number },
    children: ReactNode
}

const AlumniProfile = ({ params: { id }, children}: Props) => {
    const [alumni, setAlumni] = useState<AlumniType>()

    const currentPath = usePathname();

    useEffect(() => {
    const fetchAlumni = async() => {
        const res = await fetch(`http://localhost:3000/api/alumni/profile/${id}`)

        const data = await res.json()

        if(res.ok) {
            //set data to state
            // console.log(data.data)
            setAlumni(data.data)
        } else {
            console.log('failed to fetch')
        }
    }

    fetchAlumni()
    }, [id])

    return (
    <main className='min-h-dvh font-satoshi py-20'>
        <div className='flex w-[60%] space-x-32 mx-auto lg:w-[90%] lg:flex-col'>
            <div className='w-1/4 flex flex-col gap-y-2 items-center lg:w-full '>
                <div className='h-48 w-48 rounded-full bg-backgroundGray mb-2'></div>
                <h1 className='text-primary font-inter text-2xl font-semibold'>{alumni?.username}</h1>
                <p className='text-xl font-medium'>{alumni?.jobTitle}</p>
                <p className='text-textGray font-medium'>No bio yet</p>
                <div className='flex px-6 py-4 justify-between bg-primaryLight2 rounded-lg space-x-10 my-8'>
                <div className='flex flex-col gap-y-2 items-center'>
                    <p className='text-xl'>Blogs</p>
                    <p className='text-4xl text-primary font-bold'>{alumni?.Blogs.length}</p>
                </div>

                <div className='flex flex-col gap-y-2 items-center'>
                    <p className='text-xl'>Events</p>
                    <p className='text-4xl text-primary font-bold'>{alumni?.Events.length}</p>
                </div>
                </div>
                <Link href='#' className='border-4 border-blue-500 py-3 px-5 flex gap-x-2 items-center'>
                <p className='text-blue-500 font-semibold text-xl text-center'>Connect on LinkedIn</p>
                <FaLinkedin size={20} className='text-blue-500' />
                </Link>
            </div>

          {/* Children */}
            <div className='pt-6 flex flex-col gap-y-6'>
                <nav className='flex gap-x-6'>
                    <Link 
                        className={`font-medium ${currentPath ===`/student/mentoring/${id}` ? 'profile--active' : ''} underline-offset-4 decoration-4 decoration-primary transition duration-300  rounded-md  py-2 px-3 hover:underline text-xl`} 
                        href={`/student/mentoring/${id}`}
                    >
                        Resources
                    </Link>
                    
                    <Link 
                        className={`font-medium ${currentPath ===`/student/mentoring/${id}/events` ? 'profile--active' : ''} underline-offset-4 decoration-4 decoration-primary transition duration-300  rounded-md  py-2 px-3 hover:underline text-xl`} 
                        href={`/student/mentoring/${id}/events`}
                    >
                        Events
                    </Link>

                    <Link 
                        className={`font-medium ${currentPath ===`/student/mentoring/${id}/mentees` ? 'profile--active' : ''} underline-offset-4 decoration-4 decoration-primary transition duration-300  rounded-md  py-2 px-3 hover:underline text-xl`} 
                        href={`/student/mentoring/${id}/mentees`}
                    >
                        Mentees
                    </Link>
                </nav>
                {children}
            </div>
        </div>

    </main>
  )
}

export default AlumniProfile
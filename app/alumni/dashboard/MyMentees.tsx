"use client"

import { getUserId } from '@/app/actions'
import { resourceCards } from '@/app/cards'
import { AlumniType } from '@/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const MyMentees = () => {
    const [profile, setProfile] = useState<AlumniType>()

    useEffect(() => {
        const fetchUserData = async() => {
            const user = await getUserId()
            // console.log(id)

            const res = await fetch(`http://localhost:3000/api/alumni/profile/${user?.id}`)

            const data = await res.json()

            if (res.ok) {
                //set data to state
                // console.log(data)
                setProfile(data.data)
            } else {
                console.log(data)
            }
        }

        fetchUserData()
    }, [])
    
    const mentors = [
        {
            name: 'Jane Doe',
            title: 'Software Engineer'
        },
        {
            name: 'John Smith',
            title: 'Product Manager',
        },
        {
            name: 'Sarah Johnson',
            title: 'UX Designer'
        }
    ]

  return (
    <div className='bg-white font-satoshi border border-backgroundGray p-5 rounded-md flex flex-col gap-y-10'>
        <div className='self-center flex flex-col items-center'>
            <h1 className='text-2xl font-inter font-bold text-primary'>My Mentees</h1>
            <Link href='#' className='font-medium hover:underline text-primary'>
                View All
            </Link>
        </div>

        <div className='flex gap-x-4 md:flex-col md:gap-y-4'>
            {mentors.map(card => (
                <div key={card.title} className='bg-primaryLight2 p-4 flex gap-x-4 rounded-md items-center'>
                    <div className='h-12 w-12 rounded-full bg-backgroundGray'>

                    </div>
                    <div>
                        <h1 className='font-inter font-bold text-lg text-primary'>{card.name}</h1>
                        <p className='text-textGray font-medium'>{card.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyMentees
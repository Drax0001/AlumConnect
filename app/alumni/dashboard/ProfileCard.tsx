"use client"

import { getUserId } from '@/app/actions'
import { AlumniType } from '@/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

const ProfileCard = () => {
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

    return (
    <div className='bg-white flex flex-col font-satoshi border border-backgroundGray rounded-md p-5'>
        <Link href='/alumni/profile' className='font-inter font-bold text-center text-2xl text-primary'>Your Profile</Link>
        <button className='flex items-center gap-x-2 text-center self-center font-medium hover:underline'>
            <p className='text- text-primaryprimary'>Edit</p>
            <FaPencilAlt size={10} />
        </button>
        <div className='flex mt-10'>
            <div className='w-1/2 flex flex-col gap-y-4'>
                <div>
                    <p className='text-textGray text-lg font-medium'>Name</p>
                    <p className='font-medium text-primary'>{profile?.username}</p>
                </div>            
                <div>
                    <p className='text-textGray text-lg font-medium'>Job Title</p>
                    <p className='font-medium text-primary'>{profile?.jobTitle}</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-4 w-1/2'>
                <div>
                    <p className='text-textGray text-lg font-medium'>Email</p>
                    <p className='font-medium text-primary'>{profile?.email}</p>
                </div>            
                <div>
                    <p className='text-textGray text-lg font-medium'>Areas of Focus</p>
                    <div className='flex space-x-2'>
                    {
                        profile?.AreasOfFocus.map(area => (
                            <p key={area} className='font-medium text-primary'>{area}</p>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard
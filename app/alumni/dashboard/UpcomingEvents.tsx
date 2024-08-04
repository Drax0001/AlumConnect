"use client"

import { EventType } from '@/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {
    type: string
}


const UpcomingEvents = ({ type }: Props) => {
    const [events, setEvents] = useState<EventType[]>()

    useEffect(() => {
        const fetchEvents = async() => {
            const res = await fetch(`http://localhost:3000/api/alumni/events`)
            const data = await res.json()

            // console.log(data.data)
            if(res.ok) {
            setEvents(data.data)
            } else {
            console.log(data)
            }
        }

        fetchEvents()
    }, [])

  return (
    <div className='bg-white font-satoshi border border-backgroundGray p-5 rounded-md flex flex-col gap-y-12'>
        <div className='self-center flex flex-col items-center'>
            <h1 className='text-2xl font-inter font-bold text-primary'>Upcomming Events</h1>
            <Link href={`/alumni/events`} className='font-medium hover:underline text-primary'>
                View All
            </Link>
        </div>
        <div className='flex flex-col gap-y-4'>
            {events?.slice(0, 3).map(event => (
                <div key={event.title} className='bg-primaryLight2 p-4 flex flex-col gap-y-4 rounded-md'>
                    <h1 className='font-inter font-bold text-lg text-primary'>{event.title}</h1>
                    <p className='text-textGray font-medium'>{event.date}</p>
                    <p className='text-textGray font-medium'>{event.description}</p>
                    <Link href={`/alumni/events/${event.id}`} className='border border-backgroundGray rounded-md py-1.5 px-3 bg-white font-bold w-fit self-end'>Explore</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UpcomingEvents
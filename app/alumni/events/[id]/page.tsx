"use client"

import { EventType } from '@/types'
import React, { useEffect, useState } from 'react'
import { FaCalendarAlt, FaClock, FaLocationArrow, FaUser } from 'react-icons/fa'

interface Props {
    params: { id: number }
}

const EventDetail = ({ params: { id }}: Props) => {
    const [event, setEvent] = useState<EventType>()

    useEffect(() => {
        const fetchEvent = async() => {
            const res = await fetch(`http://localhost:3000/api/alumni/events/${id}`)

            const data = await res.json()
    
            if(res.ok) {
                //set data to state
                setEvent(data.data)
            } else {
                console.log('failed to fetch')
            }
        }

        fetchEvent()
    }, [id])
    
  return (
    <main className='min-h-dvh flex flex-col gap-y-12'>  
        <div className='bg-primary text-white w-full flex justify-around py-16 px-4 items-center font-satoshi md:flex-col md:gap-y-4 md:text-center'>
            <div className='flex flex-col gap-y-3'>
                <h1 className='font-inter text-4xl font-bold'>{event?.title}</h1>
                <div className='flex space-x-4'>
                    <div className='flex items-center space-x-2'>
                        <FaCalendarAlt size={11}/>
                        <p>{event?.date}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaClock size={11}/>
                        <p>{event?.time}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaLocationArrow size={11}/>
                        <p>{event?.location}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-4'>
                <button className='bg-black py-1.5 px-6 md:w-full rounded-md'>Register Now</button>
                <div className='flex items-center space-x-2'>
                    <FaUser size={11} />
                    <p>{event?.attendees.length} Attending</p>
                </div>
            </div>
        </div>

        <div className='flex gap-x-12 font-satoshi w-4/5 mx-auto md:w-11/12 md:flex-col md:gap-y-12'>
            <div className='flex flex-col gap-y-6 w-3/4 md:w-full'>
                <div className='w-full aspect-[2/1] bg-backgroundGray rounded-md'></div>
                <div className='flex flex-col gap-y-4'>
                    <h1 className='font-inter text-2xl font-bold'>About the Event</h1>
                    <p className=''>{event?.description}</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-6 w-1/4 md:w-full'>
                <div className='flex flex-col gap-y-6 border border-backgroundGray rounded-md p-5'>
                    <h1 className='text-2xl font-inter font-bold'>Attendees</h1>        
                    <div className='flex flex-col gap-y-4'>
                        {
                            event?.attendees.length! < 1 ?

                            <p>No attendee yet</p>
                        :
                        event?.attendees.map(attendee => (
                            <div key={attendee.username} className='bg-primaryLight2 p-4 flex rounded-md items-center justify-between'>
                                <div className='flex gap-x-4'>
                                    <div className='h-12 w-12 rounded-full bg-backgroundGray'></div>
                                    <div>
                                        <h1 className='font-inter font-bold text-lg  '>{attendee.username}</h1>
                                        <p className='text-textGray font-medium'>{attendee.faculty}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='bg-black text-white py-1.5 px-6 md:w-full rounded-md'>
                    Register Now
                </button>
            </div>
        </div>
    </main>
  )
}

export default EventDetail
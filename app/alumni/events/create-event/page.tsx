"use client"

import React from 'react'
import CreateButton from './CreateButton'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { createEvent } from '../../../actions';

const CreateEvent = () => {
    const [error, formAction] = useFormState(createEvent, undefined)
    
  return (
    <main className='min-h-dvh pt-12 font-satoshi'>
        <div className='w-[30em] max-w-[90%] mx-auto border border-backgroundGray rounded-lg p-10'>
            <h1 className='font-inter text-3xl font-semibold text-primary'>Create an Event</h1>
            <p className='text-textGray font-medium'>Fill out the details to get started</p>

            <form action={formAction} className='mt-6 flex flex-col gap-y-4'>
                <label htmlFor="eventTitle">
                    <p className='mb-1 font-medium'>Event Title</p>
                    <input type="text" name="eventTitle" id="eventTitle" placeholder='Enter event title' className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' />
                </label>
                <label htmlFor="eventDescription">
                    <p className='mb-1 font-medium'>Event Description</p>
                    <textarea name="eventDescription" id="eventDescription" placeholder='Enter event description' className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in'></textarea>
                </label>
                <div className='flex justify-between space-x-4'>
                    <label htmlFor="date" className='w-1/2'>
                        <p className='mb-1 font-medium'>Date</p>
                        <input type="date" name="date" id="date" placeholder='Select date' className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in'/>
                    </label>
                    <label htmlFor="time" className='w-1/2'>
                        <p className='mb-1 font-medium'>Time</p>
                        <input type="time" name="time" id="time" placeholder='Select time' className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in'/>
                    </label>
                </div>
                <div className='flex justify-between space-x-4'>
                    <label htmlFor="eventType" className='w-1/2'>
                        <p className='mb-1 font-medium' >Event Type</p>
                        <select name="eventType" id="eventType" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in'>
                            <option value="Conference">Conference</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Networking">Networking</option>
                        </select>
                    </label>
                    <label htmlFor="location" className='w-1/2'>
                        <p className='mb-1 font-medium'>Location</p>
                        <select name="location" id="location" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in'>
                            <option value="Onsite">Onsite</option>
                            <option value="Online">Online</option>
                        </select>
                    </label>
                </div>
                {/* <label htmlFor="thumbnail">
                    <p className='mb-1 font-medium'>Event Thumbnail</p>
                    <input type="file" name="thumbnail" id="thumbnail" accept='.jpg, .png, .jpeg, .webp'/>
                </label> */}
                <div className='flex justify-end gap-x-4 items-end'>
                    <Link href='/alumni/events' className='border border-backgroundGray text-primary font-medium py-1.5 px-3 rounded-md'>
                        Cancel
                    </Link>
                    <CreateButton />
                </div>
                {error && <p className='text-red-900'>{error}</p>}
            </form>
        </div>
    </main>
  )
}

export default CreateEvent
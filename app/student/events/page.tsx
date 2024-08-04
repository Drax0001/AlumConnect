"use client"

import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import Link from 'next/link'
import { EventType } from '@/types'

const Events = () => {
  const [events, setEvents] = useState<EventType[]>()

  useEffect(() => {
    const fetchEvents = async() => {
      const res = await fetch('http://localhost:3000/api/student/events')
      const data = await res.json()

      console.log(data.data)
      if(res.ok) {
        setEvents(data.data)
      } else {
        console.log(data)
      }
    }

    fetchEvents()
  }, [])

  return (
    <main className='min-h-dvh flex flex-col gap-y-12 font-satoshi'>
      <div className='w-full self-center flex flex-col justify-center py-12 px-4 bg-primary items-center gap-y-3'>
        <h1 className='text-center text-4xl text-white font-inter'>Discover Upcomming Events</h1>
        <p className='text-center text-white text-lg'>Explore a wide range of events and find the perfect one for you.</p>
        
        <div className='flex space-x-2 md:w-[80%]'>
          <input type="search" name="search" id="search" placeholder='search events...'  className='py-2 px-3 rounded-md w-[30em] focus:outline-none'/>
          <button className='bg-black text-white py-1.5 px-3 font-medium rounded-md hover:bg-opacity-55'>Search</button>
        </div>
        
      </div>
      <div className='w-4/5 mx-auto md:w-11/12'>
        <div className='flex justify-between items-center mb-4 md:flex-col md:gap-y-4'>
          <div>
            <h1 className='text-3xl font-inter font-bold'>Filter Events</h1>
            <p className='text-textGray text-lg'>Refine your search by applying filters.</p>
          </div>
          <div className='flex space-x-4 items-end'>
            <label htmlFor="eventType">
              <p>Event Type</p>
              <select 
                name="eventType" 
                id="eventType" 
                required
                defaultValue='conference'
                className='border border-backgroundGray rounded-md p-1.5 focus:outline focus:outline-primary'
              >
                {/* <option selected value="" className="">Event Type</option> */}
                <option value="conference">Conference</option>
                <option  value="workshop">Workshop</option>
                <option  value="networking">Networking</option>
              </select>
            </label>
            
            <label htmlFor="location">
              <p>Location</p>
              <select 
                name="location" 
                id="location" 
                required
                defaultValue='online'
                className='border border-backgroundGray rounded-md p-1.5 focus:outline focus:outline-primary'
              >
                <option value="online">Online</option>
                <option  value="onsite">Onsite</option>
              </select>
            </label>

            <button className='bg-primary rounded-md text-white font-medium px-3 py-1.5'>Apply Filters</button>
            {/* <select name="daterange" id="daterange">Date Range</select> */}
          </div>
        </div>
        <div className='flex gap-6 mt-8 flex-wrap md:justify-center'>
          {events ?
            events.map(event => (
              <EventCard key={event.id} id={event.id} title={event.title} date={event.date} />
            ))
            : 
            <h1>No events in for now</h1>
          }
        </div>
      </div>
    </main>
  )
}

export default Events
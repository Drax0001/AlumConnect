"use client"

import { AlumniType } from '@/types'
import React, { useEffect, useState } from 'react'
import EventCard from '../EventCard'

interface Props {
  params: { id: number },
}


const Events = ({ params: { id }}: Props) => {
  const [alumni, setAlumni] = useState<AlumniType>()

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
    <div className='flex flex-wrap space-x-4'>
      {
        alumni?.Events.length! > 0 
        ? 
        alumni?.Events.map(event => (
          <EventCard key={event.id} date={event.date} id={event.id} title={event.title} />
        ))
        :
        <p>This Alumni has no event created</p>
      }
    </div>
  )
}

export default Events
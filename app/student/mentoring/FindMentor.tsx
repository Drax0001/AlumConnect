"use client"

import { AlumniType } from '@/types'
import React, { useEffect, useState } from 'react'
import AlumniCard from './AlumniCard'

const FindMentor = () => {
    const [alumni, setAlumni] = useState<AlumniType[]>()

    useEffect(() => {
        const fetchAlumni = async() => {
            const res = await fetch('http://localhost:3000/api/alumnidirectory')
            const data = await res.json()

            if(res.ok) {
                // console.log(data.data)
                setAlumni(data.data)
            } else {
                console.log(data)
            }
        }

        fetchAlumni()
    }, [])

  return (
    <div className='rounded-lg border border-backgroundGray p-5 font-satoshi'>
        <h1 className='font-inter font-bold text-4xl text-primary'>Find a Mentor</h1>
        <div  className='flex flex-wrap space-y-4 space-x-4 mt-16'>
            {
                alumni?.map(alumni => (
                    <AlumniCard key={alumni.id} areasOfFocus={alumni.AreasOfFocus} id={alumni.id} jobTitle={alumni.jobTitle} name={alumni.username} />
                ))
            }
        </div>
    </div>
  )
}

export default FindMentor
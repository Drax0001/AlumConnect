"use client"

import { AlumniType } from '@/types'
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

interface Props {
  params: { id: number },
}


const Resources = ({ params: { id }}: Props) => {
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
        alumni?.Blogs.length! > 0 
        ?
        alumni?.Blogs.map(blog => (
          <BlogCard key={blog.id} author={blog.author.username} description={blog.body} id={blog.id} title={blog.title} />
        ))
        :
        <p>This alumni has no resource created</p>
      }
    </div>
  )
}

export default Resources
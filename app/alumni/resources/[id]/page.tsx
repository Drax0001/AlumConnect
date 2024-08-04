"use client"

import { BlogType } from '@/types'
import React, { useEffect, useState } from 'react'

interface Props {
  params: { id: number }
}

const ResourceDetail = ({ params: { id }}: Props) => {
  const [blog, setBlog] = useState<BlogType>()

  useEffect(() => {
    const fetchBlog = async() => {
        const res = await fetch(`http://localhost:3000/api/alumni/resources/${id}`)

        const data = await res.json()

        if(res.ok) {
            //set data to state
            setBlog(data.data)
        } else {
            console.log('failed to fetch')
        }
    }

    fetchBlog()
  }, [id])

  const paragraphs = blog?.body.split('\n')

  // const dateTime = new Date(blog?.createdAt!)
  // const date = dateTime.toISOString().split('T')[0]

  // const time = dateTime.toTimeString().split(' ')[0]

  return (
    <main className='min-h-dvh pt-12 font-satoshi'>
        <div className='flex flex-col gap-y-2 w-[36em] max-w-[90%] mx-auto'>
            <h1 className='font-inter font-bold text-4xl'>{blog?.title}</h1>
            <div className='flex items-center gap-x-2 text-textGray mb-4'>
                <div className='h-8 w-8 rounded-full bg-backgroundGray'></div>
                <p>{blog?.author.username}</p>
                {/* <p className='ml-2'>{date}</p>
                <p className='ml-2'>{time}</p> */}
            </div>
            <div className='flex flex-col gap-y-6'>
                {
                  paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                }
            </div>
        </div>
    </main>
  )
}

export default ResourceDetail
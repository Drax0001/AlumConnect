"use client"

import React, { useEffect, useState } from 'react'
import { resourceCards } from '@/app/cards'
import Link from 'next/link'
import { BlogType } from '@/types'

interface Props {
    type: string
}

const ResourceCard = ({ type }: Props) => {
    const [blogs, setBlogs] = useState<BlogType[]>()

    useEffect(() => {
        const fetchBlogs = async() => {
            const res = await fetch(`http://localhost:3000/api/alumni/resources`)
            const data = await res.json()
            if(res.ok) {
            setBlogs(data.data)
            // console.log(data.data)
            } else {
            // console.log(data)
            }
        }
        fetchBlogs()
    }, [])
    
    return (
    <div className='bg-white font-satoshi border border-backgroundGray p-5 rounded-md flex flex-col gap-y-12'>
        <div className='self-center flex flex-col items-center'>
            <h1 className='text-2xl font-inter font-bold text-primary'>Latest Resources</h1>
            <Link href={`/alumni/resources`} className='font-medium hover:underline text-primary'>
                View All
            </Link>
        </div>
        <div className='flex flex-wrap gap-x-4 md:flex-col md:gap-y-4'>
            {blogs?.slice(0, 3).map(blog => {

                const dateTime = new Date(blog?.createdAt!)

                const date = dateTime.toISOString().split('T')[0]
                
                const time = dateTime.toTimeString().split(' ')[0]

                return (
                <div key={blog.title} className='bg-primaryLight2 p-4 flex flex-col gap-y-4 rounded-md flex-1'>
                    <h1 className='font-inter font-bold text-lg text-primary'>{blog.title}</h1>
                    <div className='flex gap-x-2'>
                        <p className='text-textGray font-medium'>{date}</p>
                        <p className='text-textGray font-medium'>{time}</p>
                    </div>
                    <p className='text-textGray font-medium'>{blog.body}</p>
                    <Link href={`/alumni/resources/${blog.id}`} className='border border-backgroundGray rounded-md py-1.5 px-3 bg-white font-bold w-fit self-end'>Read More</Link>
                </div>
            )})}
        </div>
    </div>
  )
}

export default ResourceCard
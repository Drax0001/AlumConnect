"use client"

import React, { useEffect, useState } from 'react'
import { resourceCards } from '@/app/cards'
import BlogCard from './BlogCard'
import { BlogType } from '@/types'
import Link from 'next/link'

const Resources = () => {
  const [blogs, setBlogs] = useState<BlogType[]>()

  useEffect(() => {
    const fetchBlogs = async() => {
      const res = await fetch('http://localhost:3000/api/alumni/resources')
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
    <main className='min-h-dvh flex flex-col gap-y-12 font-satoshi'>
      <div className='w-full self-center flex flex-col justify-center py-12 px-4 bg-primary items-center gap-y-3'>
        <h1 className='text-center text-4xl text-white font-inter'>Resources from Alumni</h1>
        <p className='text-center text-white text-lg'>Explore our collection of blog posts and job opportiunities provided by Alumni</p>

        <div className='flex space-x-2 md:w-[80%]'>
          <input type="search" name="search" id="search" placeholder='search resources...'  className='py-2 px-3 rounded-md w-[30em] focus:outline-none'/>
          <button className='bg-black text-white py-1.5 px-3 font-medium rounded-md hover:bg-opacity-55'>Search</button>
        </div>
        
      </div>
      <div className='w-4/5 mx-auto md:w-11/12'>
        <h1 className='text-3xl font-inter font-bold'>Blogs</h1>
        <p className='text-textGray text-lg mb-4'>Read the latest insights and advice from our alumni community.</p>
        <Link href='/alumni/resources/create-resource' className='bg-primary rounded-md text-white font-medium px-3 py-1.5'>
          Create Resource
        </Link>
        <div className='flex gap-6 mt-8 flex-wrap md:justify-center'>
          {
            blogs?.map(blog => (
              <BlogCard key={blog.title} id={blog.id} author={blog.author.username} description={blog.body} title={blog.title} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Resources
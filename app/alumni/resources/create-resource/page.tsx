"use client"

import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import PublishResource from './PublishResource'
import { createBlog } from '@/app/actions'

const CreateResource = () => {
    const [error, formAction] = useFormState(createBlog, undefined)

  return (
    <main className='min-h-dvh pt-12 font-satoshi'>
        <div className='w-[30em] max-w-[90%] mx-auto border border-backgroundGray rounded-lg p-10'>
            <h1 className='font-inter font-bold text-4xl text-primary'>Create a Resource</h1>
            <p className='text-textGray font-medium mb-4'>Enter a title and Content, then Publish</p>
            <form action={formAction} className='flex flex-col gap-y-4'>
                <label htmlFor="title">
                    <p className='font-medium'>Title</p>
                    <input required type="text" name="title" id="title" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in'/>
                </label>

                <label htmlFor="content">
                    <p className='font-medium'>Content</p>
                    <textarea required name="content" id="content" rows={15} className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' />
                </label>
                <div className='flex justify-between gap-x-4 items-center'>
                    {error && <p className='text-red-900'>{error}</p>}
                    <div className='flex gap-x-4 items-end'>
                        <Link href='/alumni/resources' className='border border-backgroundGray text-primary font-medium py-1.5 px-3 rounded-md'>
                        Cancel
                        </Link>
                        <PublishResource />
                    </div>
                </div>
            </form>
        </div>
    </main>
  )
}

export default CreateResource
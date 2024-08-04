import Link from 'next/link'
import React from 'react'

const MentorSpotlight = () => {
  return (
    <div className='flex flex-col space-y-2 font-satoshi border border-backgroundGray p-5 rounded-lg'>
        <h1 className='font-inter font-bold text-primary text-2xl mb-6'>Mentor Spotlight</h1>

        <div className='flex items-center space-x-4'>
            <div className='h-12 w-12 rounded-full bg-backgroundGray'></div>
            <div>
                <h1 className='font-inter font-semibold text-lg'>Jane Doe</h1>
                <p className='text-textGray font-medium'>Software Engineer</p>
                <p className='font-bold'>Finance Business Marketing</p>
            </div>
        </div>
        <Link href='#' className='bg-white border border-backgroundGray rounded-md py-1.5 px-3 self-end'>Connect</Link>
    </div>
  )
}

export default MentorSpotlight
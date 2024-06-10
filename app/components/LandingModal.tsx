import Link from 'next/link'
import React from 'react'
import { FaClosedCaptioning } from 'react-icons/fa'

const LandingModal = () => {
  return (
    <div className='p-5'>
        <div className='flex justify-center'>
            <h1 className='font-inter font-semibold '>
                Signup
            </h1>
            <FaClosedCaptioning size={20}/>
        </div>
       
        <p className='text-textGray font-satoshi'>
            Select your user type to continue
        </p>
        <div className='mt-4 font-satoshi'>
            <Link className='border border-backgroundGray rounded-md py-1.5' href='#'>Alumni</Link>
            <Link className='border border-backgroundGray rounded-md py-1.5' href='/student/signup'>Student</Link>
        </div>
    </div>
  )
}

export default LandingModal
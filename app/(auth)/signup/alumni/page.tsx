"use client"

import React from 'react'
import Link from 'next/link'
import { alumniSignup } from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'
import SignupButton from '@/app/components/SignUpButton'

const Signup = () => {
    const [error, formAction] = useFormState(alumniSignup, undefined)

    return (
        <div className='flex flex-col gap-y-10 border border-backgroundGray rounded-md py-6 px-4'>
            <div>
                <h1 className='font-inter font-bold text-2xl'>Sign Up as Alumni</h1>
                <p className='font-satoshi text-textGray'>Fill the information below to create an account</p>
            </div>

            <form action={formAction} className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                    <p className='font-inter text-xl font-bold'>Personal Information</p>
                    <label htmlFor="email">
                        <p className='font-satoshi font-semibold mb-1'>Email</p>
                        
                        <input type="email" name="email" id="email" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='berthold@gmail.com' required/>
                    </label>

                    <label htmlFor="username">
                        <p className='font-satoshi font-semibold mb-1'>Username</p>
                        
                        <input type="text" name="username" id="username" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='Berthold Draxler' required/>
                    </label>

                    <label htmlFor="password">
                        <p className='font-satoshi font-semibold mb-1'>Password</p>
                        
                    <input type="password" name="password" id="password" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' required/>
                    </label>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <p className='font-inter text-xl font-bold'>Professional Information</p>
                    <label htmlFor="jobTitle">
                        <p className='font-satoshi font-semibold mb-1'>Job Title</p>
                        
                        <input type="text" name="jobTitle" id="jobTitle" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='Software Engineer' required/>
                    </label>

                    <label htmlFor="areasOfFocus">
                        <p className='font-satoshi font-semibold mb-1'>Areas of Focus</p>
                        
                        <textarea name="areasOfFocus" id="areasOfFocus" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='Programming, Marketing, Accounting , etc' required/>
                    </label>
                </div>
                
                {error && <p className='text-red-900'>{error}</p>}

                <SignupButton />
                <Link href='/login' className='underline text-primary text-end'>Have an account already?</Link>
            </form>
        </div>
    )
}

export default Signup
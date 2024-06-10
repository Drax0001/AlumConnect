"use client"

import React from 'react'
import Link from 'next/link'
import { signup } from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'

const Signup = () => {
    const [error, formAction] = useFormState(signup, undefined)

    return (
        <div className='flex flex-col gap-y-10 border border-backgroundGray rounded-md py-6 px-4'>
            <div>
                <h1 className='font-inter font-bold text-2xl'>Create an Account</h1>
                <p className='font-satoshi text-textGray'>Enter your email, username and password to create your account</p>
            </div>

            <form action={formAction} className='flex flex-col gap-y-4'>
                <label htmlFor="email">
                    <p className='font-satoshi font-semibold mb-1'>Email</p>
                    
                    <input type="email" name="email" id="email" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='berthold@gmail.com' />
                </label>

                <label htmlFor="username">
                    <p className='font-satoshi font-semibold mb-1'>Username</p>
                    
                    <input type="text" name="username" id="username" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='Berthold Draxler' />
                </label>

                <label htmlFor="password">
                    <p className='font-satoshi font-semibold mb-1'>Password</p>
                    
                    <input type="password" name="password" id="password" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' />
                </label>
                {error && <p className='text-red-900'>{error}</p>}

                <button type='submit' className='mt-6 bg-primary text-white font-medium rounded-md py-1.5'>Sign Up</button>
                <Link href='/login' className='underline text-primary text-end'>Have an account already?</Link>
            </form>
        </div>
    )
}

export default Signup
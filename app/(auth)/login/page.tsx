"use client"

import React from 'react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { login } from '@/app/actions'

const Login = () => {
    const [error, formAction] = useFormState(login, undefined)

    return (
        <div className='flex flex-col gap-y-10 border border-backgroundGray rounded-md py-6 px-4'>
            <div>
                <h1 className='font-inter font-bold text-2xl'>Welcome Back</h1>
                <p className='font-satoshi text-textGray'>Enter your email and password to access your account</p>
            </div>

            <form action={formAction} className='flex flex-col gap-y-4 font-satoshi'>
                <label htmlFor="email">
                    <p className='font-satoshi font-semibold mb-1'>Email</p>
                    
                    <input type="email" name="email" id="email" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='berthold@gmail.com' />
                </label>

                <label htmlFor="password">
                    <p className='font-satoshi font-semibold mb-1'>Password</p>
                    
                    <input type="password" name="password" id="password" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' />
                </label>

                {error && <p className='text-red-900'>{error}</p>}

                <button type='submit' className='mt-6 bg-primary text-white font-medium rounded-md py-1.5'>Sign In</button>
                <Link href='/signup' className='underline text-primary text-end'>Don&apos;t have an account yet?</Link>
            </form>
        </div>
    )
}

export default Login
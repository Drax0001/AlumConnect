"use client"

import React from 'react'
import Link from 'next/link'    
import { useState, useTransition } from "react";
import { useFormState } from 'react-dom'
import { login } from '@/app/actions'
import { useFormStatus } from 'react-dom'
import { ThreeDots } from 'react-loader-spinner'
import LoginButton from '@/app/components/LoginButton';

const Login = () => {
    const [error, formAction] = useFormState(login, undefined)

    // const [isPending, startTransition] = useTransition();

    // const pending = true

    return (
        <div className='flex flex-col gap-y-10 border border-backgroundGray rounded-md py-6 px-4'>
            <div>
                <h1 className='font-inter font-bold text-2xl'>Welcome Back</h1>
                <p className='font-satoshi text-textGray'>Enter your email and password to access your account</p>
            </div>

            <form action={formAction} className='flex flex-col gap-y-4 font-satoshi'>

                <div>
                    <p className='font-inter text-lg font-semibold mb-1'>User Type</p>
                    <div className='flex gap-x-4'>
                        <label htmlFor="student" className='flex'>
                            <input type="radio" name="usertype" id="student" value='student'/>
                            <p className='font-satoshi font-semibold ml-2'>Student</p>
                        </label>
                        <label htmlFor="alumni" className='flex'>
                            <input type="radio" name="usertype" id="alumni" value='alumni'/>
                            <p className='font-satoshi font-semibold ml-2'>Alumni</p>
                        </label>
                    </div>
                </div>
                <label htmlFor="email">
                    <p className='font-satoshi font-semibold mb-1'>Email</p>
                    
                    <input type="email" name="email" id="email" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='berthold@gmail.com' />
                </label>

                <label htmlFor="password">
                    <p className='font-satoshi font-semibold mb-1'>Password</p>
                    
                    <input type="password" name="password" id="password" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' />
                </label>

                {error && <p className='text-red-900'>{error}</p>}

                <LoginButton />

                <Link href='/signup/student' className='underline text-primary text-end'>Sign Up as Student</Link>
                <Link href='/signup/alumni' className='underline text-primary text-end'>Sign Up as Alumni</Link>
            </form>
        </div>
    )
}

export default Login
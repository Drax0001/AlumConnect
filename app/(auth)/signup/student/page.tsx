"use client"

import React from 'react'
import Link from 'next/link'
import { studentSignup } from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'
import SignupButton from '@/app/components/SignUpButton'

const Signup = () => {
    const [error, formAction] = useFormState(studentSignup, undefined)

    return (
        <div className='font-satoshi flex flex-col gap-y-10 border border-backgroundGray rounded-md py-6 px-4'>
            <div>
                <h1 className='font-inter font-bold text-2xl'>Sign Up as Student</h1>
                <p className='font-satoshi text-textGray'>Create an account to get started with the platform</p>
            </div>

            <form action={formAction} className='flex flex-col gap-y-4'>

                <div>
                    <p className='font-inter font-bold text-lg'>Personal Information</p>
                    <label htmlFor="email">
                        <p className='font-satoshi font-semibold mb-1'>Email</p>
                        
                        <input type="email" name="email" id="email" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='berthold@gmail.com' required/>
                    </label>

                    <label htmlFor="username">
                        <p className='font-satoshi font-semibold mb-1'>Username</p>
                        
                        <input type="text" name="username" id="username" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='Berthold Draxler'required />
                    </label>
    
                    <label htmlFor="password">
                        <p className='font-satoshi font-semibold mb-1'>Password</p>
                        
                        <input type="password" name="password" id="password" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' required/>
                    </label>
                </div>
                <div>
                    <h1 className='font-inter text-lg font-bold'>Academic Program</h1>
                    <p className='text-textGray mb-4'>Select your faculty and department</p>
                    <div className='flex space-x-6 mb-4'>
                        <label htmlFor="faculty">
                            <p className='font-satoshi font-semibold mb-1'>Faculty</p>
                            <select 
                                name="faculty" 
                                id="faculty" 
                                required
                                className='border border-backgroundGray rounded-md p-1.5 focus:outline focus:outline-primary'
                            >
                                    <option selected value="" className="">Select faculty</option>
                                    <option value="College of Technology">College of Technology</option>
                                    <option  value="Faculty of Arts">Faculty of Arts</option>
                                    <option  value="Faculty of Science">Faculty of Science</option>
                            </select>
                        </label>
                        <label htmlFor="department">
                            <p className='font-satoshi font-semibold mb-1'>Department</p>
                            <select 
                                name="department" 
                                id="department" 
                                required
                                className='border border-backgroundGray rounded-md p-1.5 focus:outline focus:outline-primary'
                            >
                                    <option selected value="" className="">Select department</option>
                                    <option value="Computer Engineering">Computer</option>
                                    <option  value="Electrical Engineering">Electrical</option>
                                    <option  value="Mechanical Engineering">Mechanical</option>
                            </select>
                        </label>
                    </div>
                </div>
                <label htmlFor="areasOfFocus">
                    <h1 className='font-inter text-lg font-bold'>Areas of Focus</h1>
                    <p className='text-textGray mb-4'>Enter the areas you are interested in.</p>
                        
                    <textarea name="areasOfFocus" id="areasOfFocus" className='border border-backgroundGray w-full py-1 px-2 rounded-md font-satoshi focus:outline focus:outline-primary transition-colors duration-100 ease-in' placeholder='Programming, Marketing, Accounting , etc' required/>
                </label>

                {error && <p className='text-red-900'>{error}</p>}

                <SignupButton />
                <Link href='/login' className='underline text-primary text-end'>Have an account already?</Link>
            </form>
        </div>
    )
}

export default Signup
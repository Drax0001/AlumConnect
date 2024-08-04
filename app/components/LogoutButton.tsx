"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'
import { ThreeDots } from 'react-loader-spinner'

const LogoutButton = () => {
    const { pending } = useFormStatus()
    
    return (
    <button disabled={pending} className='flex items-center justify-center mt-6 hover:underline hover:bold font-inter  font-medium rounded-md py-1.5'>
        {pending ? 
            <ThreeDots
                visible={true}
                height="25"
                width="25"
                color="#ffffff"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /> : 
            'Log Out'}
    </button>
    )
}

export default LogoutButton
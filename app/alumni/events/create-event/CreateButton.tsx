"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'
import { ThreeDots } from 'react-loader-spinner'

const CreateEventButton = () => {
    const { pending } = useFormStatus()
    
    return (
    <button disabled={pending} className='flex items-center justify-center mt-6 bg-primary text-white font-medium rounded-md py-1.5 px-3'>
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
            'Create Event'}
    </button>
    )
}

export default CreateEventButton
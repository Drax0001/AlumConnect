import Link from 'next/link'
import React from 'react'

interface Props {
    name: string,
    jobTitle: string,
    areasOfFocus: string[],
    id: number
}

const AlumniCard = ({ name, jobTitle, areasOfFocus, id }: Props) => {
  return (
    <div className='p-4 bg-primaryLight2 flex flex-col gap-y-4 w-96 max-w-[90%]'>
        <div className='flex items-center space-x-4'>
            <div className='h-12 w-12 rounded-full bg-backgroundGray'></div>
            <div className='flex flex-col'>
                <h1 className='font-inter font-semibold text-xl'>{name}</h1>
                <p className='font-medium text-textGray'>{jobTitle}</p>
            </div>
        </div>
        <div className='flex space-x-2'>
            {
                areasOfFocus.map(area => (
                    <p key={area} className='text-textGray font-medium'>{area}</p>
                ))
            }
        </div>
        <Link href={`/student/mentoring/${id}`} className=' self-end border border-backgroundGray rounded-md py-2 px-4 font-medium bg-white'>Visit Profile</Link>
    </div>
  )
}

export default AlumniCard
import Link from 'next/link'
import React from 'react'

const RecommendedMentors = () => {
    const mentors = [
        {
            name: 'Jane Doe',
            title: 'Software Engineer'
        },
        {
            name: 'John Smith',
            title: 'Product Manager',
        }
    ]

  return (
    <div className='bg-white font-satoshi border border-backgroundGray p-5 rounded-md flex flex-col gap-y-12'>
        <div className='self-center flex flex-col items-center'>
            <h1 className='text-2xl font-inter font-bold text-primary'>Recommended Mentors</h1>
            <Link href='/student/alumnidirectory' className='font-medium hover:underline text-primary'>
                Browse Mentors
            </Link>
        </div>

        <div className='flex flex-col gap-y-4'>
            {mentors.map(card => (
                <div key={card.title} className='bg-primaryLight2 p-4 flex rounded-md items-center justify-between'>
                    <div className='flex gap-x-4'>
                        <div className='h-12 w-12 rounded-full bg-backgroundGray'>

                        </div>
                        <div>
                            <h1 className='font-inter font-bold text-lg  text-primary'>{card.name}</h1>
                            <p className='text-textGray font-medium'>{card.title}</p>
                        </div>
                    </div>
                    <div>
                        <Link href='#' className='border border-backgroundGray rounded-md py-1.5 px-3 bg-white font-bold w-fit'>Connect</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecommendedMentors
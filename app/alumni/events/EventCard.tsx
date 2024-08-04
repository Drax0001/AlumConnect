import Link from 'next/link';
import React from 'react'

interface Props {
  id: number;
  title: string;
  date: string
}

const EventCard = ({id, title, date }: Props) => {
  return (
    <Link href={`/alumni/events/${id}`}>
      <div className='flex flex-col gap-y-1.5 p-5 rounded-md font-satoshi border border-backgroundGray w-80 md:w-full'>
        <div className='bg-backgroundGray w-full aspect-[4/2] rounded-md'></div>
        <h1 className='text-xl font-inter font-bold'>{title}</h1>
        <p className='text-textGray'>date: {date}</p>
        {/* <div className='flex items-center gap-x-2 text-textGray'>
            <FaUser size={11} />
            <p>{author}</p>
        </div>
        <Link href='#' className='mt-5 py-1.5 px-3 text-white font-medium bg-primary rounded-md w-fit'>Read More</Link> */}
      </div>
    </Link>
  )
}

export default EventCard
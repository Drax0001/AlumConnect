import Link from 'next/link';
import React from 'react'
import { FaUser } from 'react-icons/fa';

interface Props {
    title: string;
    description: string;
    author: string,
    id: number
}

const BlogCard = ({ title, description, author, id }: Props) => {
  return (
    <div className='flex flex-col justify-between gap-y-1.5 p-5 rounded-md font-satoshi border border-backgroundGray w-80 md:w-full'>
        <div className='bg-backgroundGray w-full aspect-[4/2] rounded-md'></div>
        <h1 className='text-xl font-inter font-bold'>{title}</h1>
        <p className='text-textGray'>{description.substring(0, 20)}</p>
        <div className='flex items-center gap-x-2 text-textGray'>
            <FaUser size={11} />
            <p>{author}</p>
        </div>
        <Link href={`/student/resources/${id}`} className='mt-5 py-1.5 px-3 text-white font-medium bg-primary rounded-md w-fit'>Read More</Link>
    </div>
  )
}

export default BlogCard
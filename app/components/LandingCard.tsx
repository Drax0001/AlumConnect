import Link from 'next/link'
import React, { ReactNode } from 'react'
import { FaNetworkWired, FaUsers, FaShieldAlt } from 'react-icons/fa'

interface Props {
  title: string;
  description: string;
  icon: ReactNode
}

const LandingCard = ({ title, description, icon }: Props) => {
  return (
    <div className='p-6 flex flex-col gap-y-6 shadow-xl max-w-80 rounded-md md:w-full'>
      <div className='flex space-x-3 items-center'>
        {icon}
        <h1 className='font-inter'>{title}</h1>
      </div>
        <p className='font-satoshi text-textGray'>
          {description}
        </p>
    </div>
  )
}

export default LandingCard
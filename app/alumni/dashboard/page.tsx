import React from 'react'
import ProfileCard from './ProfileCard'
import ResourceCard from '@/app/student/dashboard/ResourceCard'
import UpcomingEvents from '@/app/student/dashboard/UpcomingEvents'
import MyMentees from './MyMentees'
import MentorRequest from './MentorRequest'

const Dashboard = () => {
  return (
    <div className='bg-primaryLight2 '>
      <main className='flex pt-10 w-4/5 mx-auto justify-between md:flex-col md:gap-y-6 md:w-11/12 '>
        <div className='w-[65%] flex flex-col gap-y-6 md:w-full'>
          <ProfileCard />
          <MyMentees />
          <ResourceCard/>
        </div>
        <div className='w-[30%] flex flex-col gap-y-6 md:w-full'>
          <MentorRequest />
          <UpcomingEvents />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
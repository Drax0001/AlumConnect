import React from 'react'
import ProfileCard from './ProfileCard'
import ResourceCard from '@/app/student/dashboard/ResourceCard'
import RecommendedMentors from './RecommendedMentors'
import UpcomingEvents from '@/app/student/dashboard/UpcomingEvents'
import MyMentors from './MyMentors'

const Dashboard = () => {
  return (
    <div className='bg-primaryLight2 '>
      <main className='flex pt-10 w-4/5 mx-auto justify-between lg:flex-col lg:gap-y-6 md:w-11/12 '>
        <div className='w-[65%] flex flex-col gap-y-6 lg:w-full'>
          <ProfileCard />
          <MyMentors />
          <ResourceCard />
        </div>
        <div className='w-[30%] flex flex-col gap-y-6 lg:w-full'>
          <RecommendedMentors />
          <UpcomingEvents />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
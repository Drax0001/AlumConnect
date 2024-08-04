import React from 'react'
import FindMentor from './FindMentor'
import MyMentors from './MyMentors'
import MentorSpotlight from './MentorSpotlight'
import UpcomingEvents from './UpcomingEvents'

const Mentoring = () => {
  return (
    <main className='min-h-dvh '>
      <div className='flex space-x-6 w-[80%] mx-auto mt-24 lg:flex-col lg:space-y-6 lg:w-[90%]'>
        <div className='w-3/4 flex flex-col space-y-6 lg:w-full'>
          <FindMentor />
          <MyMentors />
        </div>
        <div className='w-1/4 flex flex-col space-y-6 lg:w-full'>
          <MentorSpotlight />
          <UpcomingEvents />
        </div>
      </div>

    </main>
  )
}

export default Mentoring
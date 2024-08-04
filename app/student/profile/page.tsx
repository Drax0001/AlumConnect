"use client"

import { getUserId, studentLogout } from '@/app/actions'
import LogoutButton from '@/app/components/LogoutButton'
import { StudentType } from '@/types'
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

const Profile = () => {
  const [error, formAction] = useFormState(studentLogout, undefined)
  const [profile, setProfile] = useState<StudentType>()
    
  useEffect(() => {
      const fetchUserData = async() => {
          const user = await getUserId()
          // console.log(id)

          const res = await fetch(`http://localhost:3000/api/student/profile/${user?.id}`)

          const data = await res.json()

          if (res.ok) {
              //set data to state
              // console.log(data.data)
              setProfile(data.data)
          } else {
              console.log(data)
          }
      }

      fetchUserData()
  }, [])
  
  return (
    <main className='min-h-dvh'>
      {/* <div>
        <div></div>
        <h1>{profile?.username}</h1>
        <p>No Bio Yet</p>
        {profile.}
      </div> */}

      <form action={formAction}>
        <LogoutButton />
      </form>
    </main>
  )
}

export default Profile
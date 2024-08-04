"use client"
import { alumniLogout } from '@/app/actions'
import LogoutButton from '@/app/components/LogoutButton'
import { useFormState } from 'react-dom'

const Profile = () => {
  const [error, formAction] = useFormState(alumniLogout, undefined)
  return (
    <main className='min-h-dvh'>
      <form action={formAction}>
        <LogoutButton />
      </form>
    </main>
  )
}

export default Profile
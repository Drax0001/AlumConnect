import React from 'react'

const ProfileCard = () => {
  return (
    <div className='flex flex-col font-satoshi border border-backgroundGray rounded-md p-5'>
        <h1 className='font-inter font-bold text-center text-2xl'>Your Profile</h1>
        <button className='text-center self-center font-medium hover:underline'>Edit</button>
        <div className='flex mt-10'>
            <div className='w-1/2 flex flex-col gap-y-4'>
                <div>
                    <p className='text-textGray text-lg font-medium'>Name</p>
                    <p className='font-medium'>Berthold Draxler</p>
                </div>            
                <div>
                    <p className='text-textGray text-lg font-medium'>Faculty</p>
                    <p className='font-medium'>College Of Technology</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-4'>
                <div>
                    <p className='text-textGray text-lg font-medium'>Email</p>
                    <p className='font-medium'>berthnk@gmail.com</p>
                </div>            
                <div>
                    <p className='text-textGray text-lg font-medium'>Department</p>
                    <p className='font-medium'>Computer Engineering</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard
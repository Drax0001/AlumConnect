import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
    <div>
        <div className='flex justify-center items-center h-screen'>{children}</div>
    </div>
    );
}

export default AuthLayout
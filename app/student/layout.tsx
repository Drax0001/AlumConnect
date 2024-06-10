import React, { ReactNode } from 'react'
import NavBar from './NavBar';

interface Props {
    children: ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
    return (
    <div>
        <NavBar />
        <div>{children}</div>
    </div>
    );
}


export default AuthenticatedLayout
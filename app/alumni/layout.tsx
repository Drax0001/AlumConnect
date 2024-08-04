import React, { ReactNode } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';

interface Props {
    children: ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
    return (
    <div>
        <NavBar />
        <div>{children}</div>
        <Footer />
    </div>
    );
}


export default AuthenticatedLayout
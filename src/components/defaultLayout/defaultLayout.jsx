import React from 'react'
import Header from '../layout/header/header'
import Sidebar from '../layout/sidebar/sidebar'
import Footer from '../footer'

export default function DefaultLayout({ children }) {
    return (
        <>

            <Header />
            {children}
        <Footer/>
        </>
    )
}

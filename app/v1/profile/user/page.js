"use client"
import React from 'react'
import Nav from '../../components/homeutils/Nav'
import SideNav from './sidenav/SideNav'
import AllOrders from './components/AllOrders'
import Footer from '../../components/homeutils/Footer'


const page = () => {
  return (
    <>
    <Nav />
    {/* <SideNav /> */}
   <AllOrders />  
   <Footer />
    </>
  )
}

export default page
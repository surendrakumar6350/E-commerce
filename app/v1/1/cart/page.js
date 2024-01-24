"use client"

import React from 'react'
import Items from './commponents/Items'
import Nav from '../../components/homeutils/Nav'
import Footer from '../../components/homeutils/Footer'
import Steps from './commponents/Steps'

const page = () => {
  return (
    <>
    <Nav />
    <Steps />
    <Items />
    <Footer />
    </>
  )
}

export default page
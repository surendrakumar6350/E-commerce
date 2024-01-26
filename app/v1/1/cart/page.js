"use client"
import React, { useState } from 'react'
import Items from './commponents/Items'
import Nav from '../../components/homeutils/Nav'
import Footer from '../../components/homeutils/Footer'
import Steps from './commponents/Steps'
import { useSelector, useDispatch } from 'react-redux'
import Addressform from './Address/Addressform'
import Paymentform from './payment/Paymentform'

const page = () => {
 const [totalprice, settotalprice] = useState()
  const data = useSelector((data)=> data.cartslice.steps)
  return (
    <>
    <Nav />
    <Steps />
   {data == 1 ? <Items get={totalprice} set={settotalprice}/> : null}
   {data == 2 ? <Addressform /> : null}
   {data == 3 ? <Paymentform money={totalprice} /> : null}
    <Footer />
    </>
  )
}

export default page
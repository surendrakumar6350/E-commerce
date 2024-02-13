"use client"
import React from 'react'
import AdminNav from './AdminNav/AdminNav'
import { useState } from 'react'
import Mainjs from './users/Mainjs'
import Addpro from './addproducts/Addpro'
import ProList from './productlisting/ProList'
import Nav from '../../components/homeutils/Nav'
import Footer from '../../components/homeutils/Footer'

const page = () => {
  const [state, setstate] = useState(1)

  return (
    <>
    
      <div className='flex'>
        <AdminNav state={setstate} />
        {state == 1 ? <Addpro /> : null}
        {state == 2 ? <Mainjs /> : null}
        {state == 3 ? <ProList /> : null}
      </div>
    </>
  )
}

export default page
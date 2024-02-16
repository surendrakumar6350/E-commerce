"use client"
import React, { useEffect } from 'react'
import AdminNav from './AdminNav/AdminNav'
import { useState } from 'react'
import Mainjs from './users/Mainjs'
import Addpro from './addproducts/Addpro'
import ProList from './productlisting/ProList'
import Nav from '../../components/homeutils/Nav'
import { useRouter } from 'next/navigation'
import Footer from '../../components/homeutils/Footer'
import { BASE_URL } from '@/Constants'

const page = () => {
  const [state, setstate] = useState(1)
  const router = useRouter();
  const [user, setuser] = useState()

  useEffect(()=> {
    if(user?.user?.role == "user") {
      router.push(BASE_URL)
    }

  },[user])

  return (
    <>
    
      <div className='flex'>
        <AdminNav user={user} setuser={setuser} state={setstate} />
        {state == 1 ? <Addpro /> : null}
        {state == 2 ? <Mainjs /> : null}
        {state == 3 ? <ProList /> : null}
      </div>
    </>
  )
}

export default page
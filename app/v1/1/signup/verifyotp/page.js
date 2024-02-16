"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '@/Constants'
import { useMutation } from '@tanstack/react-query'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Nav from '@/app/v1/components/homeutils/Nav'
import Footer from '@/app/v1/components/homeutils/Footer'
import LoadingBar from 'react-top-loading-bar'
import { useRef } from 'react'


const Otp = () => {
  const router = useRouter()
  const data = useSelector((state) => state.Slice.data)
  const [id, setid] = useState(null)
  const [otp, setotp] = useState(null)
  const ref = useRef(null)

  const verifyotp = useMutation({
    mutationFn: (newTodo) => {
      return axios.post(`${BASE_URL}/api/v1/otp/verify`, newTodo)
    },
  })
  const sendotp = useMutation({
    mutationFn: (newTodo) => {
      return axios.post(`${BASE_URL}/api/v1/otp`, newTodo)
    },
  })

  const handletime = async () => {
    const ansss = await sendotp.mutateAsync(data[0])
    setid(ansss?.data?.otpid)
    Toastify({
      text: `${ansss.data.message}`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: `${ansss.data.success ? 'green' : "red"}`, },
    }).showToast();
  }

  useEffect(() => {
    if (data.length) {
      handletime()
    }
    else {
      router.push(`${BASE_URL}/v1/1/signup`)
    }
  }, [])

  const handleverify = async () => {
    if (id == null || otp == null) {
      Toastify({
        text: `Error`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: `red`, },
      }).showToast();
    }
    else {
      ref.current.continuousStart()
      const mine = { ...data, userotp: otp, id: id }
      const ress = await verifyotp.mutateAsync(mine)
      if (ress.data.success) {
        ref.current.complete()
        setTimeout(() => {
          router.push(`${BASE_URL}/v1/home`)
        }, 200)
        Toastify({
          text: `${ress.data.message}`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: `green`, },
        }).showToast();
      }
      else {
        ref.current.complete()
        Toastify({
          text: `${ress.data.message}`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: `red`, },
        }).showToast();
      }
    }
  }

  return (
    <>
    
    <LoadingBar color='#f11946' ref={ref} />
<Nav />

<div class="container h-screen">
      <div class="otpHeader">Confirm your identity</div>
      <div class="content">
        <div class="otpTitle">Enter OTP sent to your Email Address.</div>
        <div id="mobileNumber"></div>
        <form method="get" class="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off" name="otp-form" id="otp-form">
          <input  onChange={(e) => {
          setotp(e.target.value)
        }} type="text" id="digit-1" pattern="[0-9]{6}" name="digit-1" data-next="digit-2" placeholder="Enter OTP" maxlength="4" />
        </form><div class="otperror" id="otperror"></div>
 
          <div className='h-8 w-full bg-transparent'></div>
        <button onClick={handleverify} id="otpConfirmBtn" class="confirmButton otpbtndisabled rounded bg-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)">CONFIRM AND LOGIN</button>
        <div class="issuesText">Facing any issue to login? Please email us at: </div>
        <div class="emailLink">support@fantasyteam.com</div>
      </div>
      </div>
<Footer />
    </>
  )
}

export default Otp
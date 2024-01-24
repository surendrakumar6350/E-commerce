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


const Otp = () => {
  const router = useRouter()
    const data = useSelector((state) => state.Slice.data)
    const [id, setid] = useState(null)
    const [otp, setotp] = useState(null)


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
          text: `${ansss.data.message}`, duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: `${ansss.data.success ? 'green' : "red"}`, },
        }).showToast();
    }

  useEffect(()=> {
    if(data.length) {
      handletime()
    }
else {
  router.push(`${BASE_URL}/v1/1/signup`)
}
  },[])

  const handleverify = async() => {
    if(id == null || otp == null) {
      Toastify({
        text: `Error`, duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: `red`, },
      }).showToast();
    }
    else {
      const mine = {...data, userotp: otp, id: id}
      const ress = await verifyotp.mutateAsync(mine)
        if(ress.data.success) {
          setTimeout(()=> {
router.push(`${BASE_URL}/v1/home`)
          },200)
          Toastify({
            text: `${ress.data.message}`, duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: `green`, },
          }).showToast();
        }
        else {
          Toastify({
            text: `${ress.data.message}`, duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: `red`, },
          }).showToast();
        }
    }
  }

  return (
    <>
          <input
          onChange={(e)=>{
setotp(e.target.value)
          }}
              placeholder='Enter OTP'
              type="text"
              className={` mb-2 block rounded border-2 border-black px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10`} />
          <button
          onClick={handleverify}
              style={{ backgroundColor: "blue" }}
              type="button"
              className={` block rounded bg-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}>
              verify
                </button>
    </>
  )
}

export default Otp
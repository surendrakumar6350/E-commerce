"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Nav from '../../components/homeutils/Nav';
import Footer from '../../components/homeutils/Footer';
import { BASE_URL } from '@/Constants';
import Toastify from 'toastify-js'
import axios from 'axios';
import "toastify-js/src/toastify.css"
import { useMutation } from '@tanstack/react-query'

export default function ForgotPassword() {
  const ref = useRef(null)
  const [password, setpassword] = useState();
  const [pass, setpass] = useState({
    password: "",
    confirmpassword: ""
  });
  const [email, setemail] = useState();
  const [otp, setotp] = useState();
  const [otpid, setotpid] = useState();
  const [state, setstate] = useState(0);
  const [btndisplay, setbtndisplay] = useState('Send otp');

  useEffect(() => {
    setpassword(pass.confirmpassword)
  }, [pass])

  const sendotp = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/v1/forgotpassword`, data)
    },
  })
  const verifyotp = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/v1/forgotpassword/verifyotp`, data)
    },
  })
  const changepassword = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/v1/forgotpassword/updatepassword`, data)
    },
  })

  const handleclick = async (e) => {
    e.preventDefault();
    if (state == 0) {
      if (email.length < 4) {
        Toastify({
          text: `Please enter valid email`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "red", },
        }).showToast();
      }
      else {
        setbtndisplay('Sending...');
        ref.current.continuousStart()
        const ansss = await sendotp.mutateAsync({ email: email })
        ref.current.complete()
        if (ansss.data.success) {
          setotpid(ansss.data.otpid)
          setstate(1);
          setbtndisplay("verify otp")
        }
        else {
          Toastify({
            text: `${ansss.data.message}`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: `red`, },
          }).showToast();
          setbtndisplay('Send otp');
        }
      }
    }
    if (state == 1) {
      if (otp < 3) {
        Toastify({
          text: `Please enter valid otp`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "red", },
        }).showToast();
      }
      else {
        setbtndisplay('Verifying...');
        ref.current.continuousStart()
        const ans = await verifyotp.mutateAsync({ id: otpid, userotp: otp })
        ref.current.complete()
        if (ans.data.success) {
          setstate(2);
          setbtndisplay('Change Password');
        }
        else {
          Toastify({
            text: `${ans.data.message}`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: `red`, },
          }).showToast();
          setbtndisplay('verify otp');
        }
      }
    }
    if (state == 2) {
      if (pass.password !== pass.confirmpassword) {
        Toastify({
          text: `Password and confirmpassword must match`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "red", },
        }).showToast();
      }
      else {
        if (password?.length < 3) {
          Toastify({
            text: `Password must be at least 3 characters`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "red", },
          }).showToast();
        }
        else {
          setbtndisplay('Updating...');
          ref.current.continuousStart()
          console.log(password);
          const ans = await changepassword.mutateAsync({ email: email, password: password })
          ref.current.complete()
          if (ans.data.success) {
            Toastify({
              text: `${ans.data.message}`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: `green`, },
            }).showToast();
            setstate(0);
            setbtndisplay('Send otp');
          }
          else {
            Toastify({
              text: `${ans.data.message}`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: `red`, },
            }).showToast();
            setbtndisplay('change password');
          }
        }


      }
    }
  }






  return (
    <>
      <LoadingBar color='#f11946' ref={ref} />
      <Nav />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-auto"
            src="https://static.lingoapp.com/assets/images/email/il-password-reset@2x.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter {state == 0 ? 'Email' : null}{state == 1 ? 'Otp' : null}{state == 2 ? 'New Password' : null} To Reset Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
          >


            <div className={`${state == 0 ? null : 'hidden'}`}>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  min={4}
                  onChange={(e) => setemail(e.target.value)}
                  id="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className={`${(state == 1) ? null : 'hidden'}`}>
              <label
                htmlFor="emaill"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter OTP
              </label>
              <div className="mt-2">
                <input
                  id="emaill"
                  onChange={(e) => setotp(e.target.value)}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className={`${state == 2 ? null : 'hidden'}`}>
              <label
                htmlFor="emaill"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setpass((pre) => ({ ...pre, password: e.target.value }))}
                  id="emaill"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className={`${state == 2 ? null : 'hidden'}`}>
              <label
                htmlFor="emaill"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                confirm password
              </label>
              <div className="mt-2">
                <input
                  id="emaill"
                  type="text"
                  onChange={(e) => setpass((pre) => ({ ...pre, confirmpassword: e.target.value }))}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <button
                onClick={handleclick}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {btndisplay}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Send me back to{' '}
            <Link
              href={`${BASE_URL}/v1/1/login`}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

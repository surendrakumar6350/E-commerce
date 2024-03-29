"use client"
import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useFormik } from 'formik'
import { signupSchema } from './Schema'
import { useMutation } from '@tanstack/react-query'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import axios from 'axios'
import { BASE_URL } from '@/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addduserdetails } from '@/app/redux/Slice'
import { useRouter } from 'next/navigation'
import Nav from '../../components/homeutils/Nav'
import Footer from '../../components/homeutils/Footer'
import LoadingBar from 'react-top-loading-bar'
import { useRef } from 'react'
import Link from 'next/link'


const page = () => {
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState()
  const [process, setprocess] = useState("upload")
  const [piclink, setpiclink] = useState(null)
  const router = useRouter()
  const ref = useRef(null)
  
 

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      config: ''
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      if (piclink) {
        ref.current.continuousStart()
       dispatch(addduserdetails({pic: piclink, ...values}))
       router.push(`${BASE_URL}/v1/1/signup/verifyotp`)
       ref.current.complete()
      }
      else {
        Toastify({
          text: "Upload Profile Pic", duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: "red", },
        }).showToast();
      }
    }
  })





  const oonSubmit = async (e) => {
    e.preventDefault()
    if (process == "upload") {
      if (file?.type.startsWith('image/')) {
        setprocess("Please Wait..")
        const data = new FormData()
        data.append('file', file)
        data.append("upload_preset", "pwjilpw7")
        data.append("cloud_name", "drlyu0rbn")

        const res = await fetch('https://api.cloudinary.com/v1_1/drlyu0rbn/image/upload', {
          method: 'POST',
          body: data
        })
        const result = await res.json()

        if (result.url) {
          setpiclink(result.url)
          setprocess("upload")
        }
        else {
          setprocess("upload")
          setpiclink(null)
        }
      }
      else {
        Toastify({
          text: "file type must be image",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "left",
          stopOnFocus: true,
          style: {
            background: "red",
          },
          onClick: function () { }
        }).showToast();
      }
    }
  }


const handleredirect = ()=> {
  ref.current.continuousStart()
  router.push(`${BASE_URL}/v1/1/login`)
  ref.current.complete()
}


  return (
    <>
    <LoadingBar color='#f11946' ref={ref} />
      <Nav />
      <section className="">
        <div className="container h-full px-6 py-12">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image" />
            </div>


            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>

                <div className="relative mb-4">
                  <input
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='username'
                    type="text"
                    className="peer m-0 block h-[40px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"

                    placeholder="name@example.com" />
                  <label
                    htmlFor="floatingInput"
                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Username</label>
                  <p className='text-red text-xs ml-1'>
                    {errors.username && touched.username ? errors.username : null}</p>
                </div>


                <div className="relative mb-4">
                  <input
                    value={values.email}
                    onChange={handleChange}
                    name='email'
                    onBlur={handleBlur}
                    type="email"
                    className="peer m-0 block h-[40px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"

                    placeholder="name@example.com" />
                  <label
                    htmlFor="floatingInput"
                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Email address</label>
                  <p className='text-red text-xs ml-1'>
                    {errors.email && touched.email ? errors.email : null}</p>
                </div>

                <div className="relative mb-4">
                  <input
                    value={values.password}
                    onChange={handleChange}
                    name='password'
                    onBlur={handleBlur}
                    type="password"
                    className="peer m-0 block h-[40px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"

                    placeholder="name@example.com" />
                  <label
                    htmlFor="floatingInput"
                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Password</label>
                  <p className='text-red text-xs ml-1'>
                    {errors.password && touched.password ? errors.password : null}</p>
                </div>


                <div className="relative mb-4">
                  <input
                    value={values.config}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='config'
                    type="password"
                    className="peer m-0 block h-[40px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"

                    placeholder="name@example.com" />
                  <label
                    htmlFor="floatingInput"
                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Confirm Password</label>
                  <p className='text-red text-xs ml-1'>
                    {errors.config && touched.config ? errors.config : null}</p>
                </div>

                <div className="mb-1">
                  <label
                    htmlFor="formFileSm"
                    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Upload profile pic</label>
                  <input
                    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    id="formFileSm"
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0])} />
                </div>
                <div className='flex justify-start items-center'>
                  <Button style={{ backgroundColor: `${piclink == null ? "blue" : "green"}` }} variant="contained" onClick={oonSubmit}>{`${piclink == null ? process : "uploaded"}`}
                    {process == "upload" ? null :
                      <svg className='w-[30px] ml-2 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
                    }
                  </Button>
                </div>

                <div className="mb-6 mt-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] translate-x-[-20px]">
                    <label className="text-danger cursor-pointer">
                      <input className='mr-2 cursor-pointer' type="checkbox" defaultChecked value="remember-me" id="rememberMe" name="rememberMe" />
                      Remember me
                    </label>
                  </div>
                </div>
               
                <button
                  type="submit"
                  style={{ backgroundColor: "#0000ff94" }}
                  className="inline-block w-full mt-4 rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign in
                </button>
                <a style={{ color: "blue" }}
                  href={`${BASE_URL}/v1/1/forgotpassword`}
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Forgot password?</a>

                <div
                  className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p
                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    Already have an account 
                  </p>
                  
                </div>


                <button
                  className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  style={{ backgroundColor: "#3b5998" }}
                  onClick={handleredirect}
                >

                  Login
                </button>
            
              </form>
            </div>
          </div>
        </div>
      </section>
<Footer />

    </>
  )
}

export default page
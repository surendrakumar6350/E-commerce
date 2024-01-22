"use client"
import React, { useState } from 'react'
import { BASE_URL } from '@/Constants'
import Link from 'next/link'
import { useFormik } from 'formik'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useMutation } from '@tanstack/react-query'
import { loginSchema } from './logSchema'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
const router = useRouter();
    
  const verifylogin = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/v1/login`, data)
    },
  })
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: ''
      
    },
    validationSchema: loginSchema,
    onSubmit: async(values) => {
      const ansss = await verifylogin.mutateAsync(values)
    

        Toastify({
          text: `${ansss.data.message}`, duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: `${ansss.data.success ? 'green' : "red"}`, },
        }).showToast();
        
    }
  })




  return (
    <>
    <section className="h-screen">
  <div className="h-full">
    
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image" />
      </div>

      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form method='post' onSubmit={handleSubmit}>


                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='email'
                    type="email"
                    className="peer m-0 block h-[40px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                    id="floatingInput"
                    placeholder="name@example.com" />
                  <label
                    htmlFor="floatingInput"
                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Email address</label>
                  <p className='text-red text-xs ml-1'>
                    {errors.email && touched.email ? errors.email : null}</p>
                </div>

         
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='password'
                    type="password"
                    className="peer m-0 block h-[40px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                    id="floatingInput"
                    placeholder="name@example.com" />
                  <label
                    htmlFor="floatingInput"
                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Password</label>
                  <p className='text-red text-xs ml-1'>
                    {errors.password && touched.password ? errors.password : null}</p>
                </div>

          <div className="mb-6 ">
        
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] translate-x-[-20px]">
                    <label className="text-danger cursor-pointer">
                      <input className='mr-2 cursor-pointer' type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> 
                      Remember me
                    </label>
                  </div>
           
            <a style={{fontSize: "14px"}} className=' text-purple-400 ml-1' href="#!">Forgot password?</a>
          </div>

        
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#0000ff94" }}
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Login
                  </button>

            <p className="mb-0 mt-2 pt-1 text-sm font-semibold ml-1">
              Don't have an account?
              <Link
                href={`${BASE_URL}/v1/1/signup`}
                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 text-purple-400"
                >Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default page
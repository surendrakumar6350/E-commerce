"use client"
import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useFormik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import axios from 'axios'
import { BASE_URL } from '@/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addduserdetails } from '@/app/redux/Slice'
import { useRouter } from 'next/navigation'
import { addpiclink } from '@/app/redux/remainingSlices/piclink'

const Addpro = () => {
const dispatch = useDispatch();
const ref = useRef(null)
  const [ans, setans] = useState()
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState()
  const [process, setprocess] = useState("upload")

  const [piclink, setpiclink] = useState({
    url: null,
    url2: null,
    url3: null
  })
  const getuser = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/admin/addproduct`, data)
    },
  })
  const [data, setdata] = useState({
    name: "",
    description: "",
    money: "",
    category: "",
    brand: "",
    imageUrl: "",
    stockQuantity: "",
    sale: "",
    cuttingrate: "",
    rating: "",
    url: "",
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
        ref.current.continuousStart()
        const res = await fetch('https://api.cloudinary.com/v1_1/drlyu0rbn/image/upload', {
          method: 'POST',
          body: data
        })
        const result = await res.json()
        ref.current.complete()
        if (result.url) {
          if (progress == 0) {
            console.log(result.url)
            setpiclink((pre)=> ({...pre, url: result.url}))
            console.log(result.url);
            setdata((pre) => ({ ...pre, imageUrl: result.url }));
          }
          if (progress == 1) {
            console.log("url2");
            setpiclink((pre)=> ({...pre, url2: result.url}));
          }
          if (progress == 2) {
            setpiclink((pre)=> ({...pre, url3: result.url}));
            setdata((pre) => ({ ...pre, url: piclink }));
          }
          setProgress((pre) => pre + 1)
          setprocess("upload")
        }
        else {
          setprocess("upload")
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

  const handlesubmit = () => {
    if (data.name.length < 3 || data.brand.length < 3 || data.imageUrl.length < 3 || data.money.length < 1) {
      Toastify({
        text: "All fields are required",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "red",
        },
        onClick: function () { }
      }).showToast();
    }
    else {
      if (typeof (data.url) == "object") {
        (
          async () => {
            ref.current.continuousStart()
            let ansss = await getuser.mutateAsync(data);
            let anssss = ansss.data;
            setans(anssss)
            ref.current.complete()
            Toastify({
              text: "Product added successfully",
              duration: 3000,
              close: true,
              gravity: "top",
              position: "center",
              stopOnFocus: true,
              style: {
                background: "green",
              },
              onClick: function () { }
            }).showToast();
          }

        )()

      }
      else {
        Toastify({
          text: "upload more pictures",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          stopOnFocus: true,
          style: {
            background: "red",
          },
          onClick: function () { }
        }).showToast();
      }
    }
  }
  
  return (
    <>
      <div className='h-full w-full pl-11 '>
      <LoadingBar color='#f11946' ref={ref} />

        <section class="py-1 ">
          <div class="w-full lg:w-8/12 pl-4 mx-auto ">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Add product
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          product name
                        </label>
                        <input placeholder='Product Name' required type="text" onChange={(e) => setdata((pre) => ({ ...pre, name: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Brand
                        </label>
                        <input placeholder='Brand' required type="text" onChange={(e) => setdata((pre) => ({ ...pre, brand: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          category
                        </label>
                        <input placeholder='category' required type="text" onChange={(e) => setdata((pre) => ({ ...pre, category: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          price
                        </label>
                        <input placeholder='price' type="number" required onChange={(e) => setdata((pre) => ({ ...pre, money: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                  </div>
                </form>
                <hr class="mt-6 border-b-1 border-blueGray-300" />
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  More information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        description
                      </label>
                      <input placeholder='description' required type="text" onChange={(e) => setdata((pre) => ({ ...pre, description: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        stockquantity
                      </label>
                      <input placeholder='stockquantity' required type="number" onChange={(e) => setdata((pre) => ({ ...pre, stockQuantity: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        sale
                      </label>
                      <input placeholder='sale' type="text" onChange={(e) => setdata((pre) => ({ ...pre, sale: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Default rating
                      </label>
                      <input placeholder='rating' type="number" onChange={(e) => setdata((pre) => ({ ...pre, rating: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Cutting Rate
                      </label>
                      <input placeholder='$20.00' type="text" onChange={(e) => setdata((pre) => ({ ...pre, cuttingrate: e.target.value }))} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required />
                    </div>
                  </div>
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 ">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Picture
                      </label>
                      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                      <h2>You need to upload {(progress < 3) ? 3 - progress : "0"} pictures</h2>
                      <input
                        onChange={(e) => setFile(e.target.files?.[0])} class="block w-[90%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                      <Button style={{ backgroundColor: `blue`, marginBottom: "10px" }} variant="contained" onClick={oonSubmit}>upload
                        {process == "upload" ? null :
                          <svg className='w-[30px] ml-2 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
                        }
                      </Button>
                    </div>
                    <button type="button" onClick={handlesubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Product</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>



      </div>

    </>
  )
}

export default Addpro
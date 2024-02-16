"use client"
import { addToCart } from '@/app/redux/remainingSlices/cart'
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { FcLike } from "react-icons/fc";

const Herod = () => {
  const [color, setcolor] = useState(1);
  const [length, setlength] = useState(3);
  const [btncontent, setbtncontent] = useState("Add to Cart")
  const [loading, setloading] = useState(false);
  const [like, setlike] = useState(true);
  const dispatch = useDispatch();
  const raj = useRef(null);
  const product = useSelector((state) => state.productSlice.product);
  const data = product[0];
  console.log(data)

  const hanldecartaddition = () => {
    raj.current.disabled = true;
    const finalcolor = () => {
      if (color == 1) return 'black'
      if (color == 2) return 'brown'
      if (color == 3) return 'gray'
      if (color == 4) return 'white'
    }
    const fianllength = () => {
      if (length == 1) return 'XS'
      if (length == 2) return 'S'
      if (length == 3) return 'M'
      if (length == 4) return 'L'
    }
    const newData = { ...data, color: finalcolor(), size: fianllength() }
    setloading(true);
    const storedCart = localStorage.getItem('cart');
    const last = storedCart ? JSON.parse(storedCart) : null;
    if (last) {
      const cart = [...last, newData]
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    else {
      localStorage.setItem('cart', JSON.stringify([newData]));
    }
    dispatch(addToCart(newData))
    Toastify({
      text: "Product Added to Cart", duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "green", },
    }).showToast();
    setTimeout(() => {
      setloading(false);
      setbtncontent(`Added to Cart`)
      raj.current.style.backgroundColor = "green"
    }, 300)
  }

  return (
    <>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">


            {data ? <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img src={data?.url?.url} loading="lazy" alt="" className="h-full w-full object-cover object-center" />

                <span className={`${(data?.sale == "sale" ? null : "hidden")} absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white`}>{data?.sale}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
              {data?.url?.url2 == null ? <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img src='/noimage.png' loading="lazy" alt="" className="h-full w-full object-cover object-center" />
                </div> : <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img src={data?.url?.url2} loading="lazy" alt="" className="h-full w-full object-cover object-center" />
                </div>}
                {data?.url?.url3 == null ? <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img src='/noimage.png' loading="lazy" alt="" className="h-full w-full object-cover object-center" />
                </div> : <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img src={data?.url?.url3} loading="lazy" alt="" className="h-full w-full object-cover object-center" />
                </div>}

              </div>
            </div> :

              <div className="space-y-4">
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className=" h-40 flex justify-center items-center overflow-hidden rounded-lg bg-gray-100">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>

                  <div className="h-40 flex justify-center items-center overflow-hidden rounded-lg bg-gray-100">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>

              </div>

            }




            <div className="md:py-8">

              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">{data?.brand}</span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data?.name}</h2>
              </div>
              {data ? <div className="mb-6 flex items-center md:mb-10">
                <div className="-ml-1 flex gap-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.rating > 0) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.rating > 1) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.rating > 2) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.rating > 3) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.rating > 4) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <span className="ml-2 text-sm text-gray-500">{data?.rating}</span>

              </div> : null}


              <div className="mb-4 md:mb-6">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Color</span>

                <div className="flex flex-wrap gap-2">
                  <span onClick={() => setcolor(1)} className={`h-8 cursor-pointer w-8 rounded-full border bg-gray-800 ${color == 1 ? "ring-2 ring-gray-800" : null}  ring-offset-1 transition duration-100`}></span>
                  <button onClick={() => setcolor(2)} type="button" className={`h-8 w-8 rounded-full border bg-gray-500 ring-2  ring-offset-1 transition duration-100 ${color == 2 ? "ring-gray-200" : "ring-transparent"} hover:ring-gray-200`}></button>
                  <button onClick={() => setcolor(3)} type="button" className={`h-8 w-8 rounded-full border bg-gray-200 ring-2  ring-offset-1 transition duration-100 ${color == 3 ? "ring-gray-200" : "ring-transparent"} hover:ring-gray-200`}></button>
                  <button onClick={() => setcolor(4)} type="button" className={`h-8 w-8 rounded-full border bg-white ring-2  ring-offset-1 transition duration-100 ${color == 4 ? "ring-gray-200" : "ring-transparent"}  hover:ring-gray-200`}></button>
                </div>
              </div>


              <div className="mb-8 md:mb-10">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Size</span>

                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setlength(1)} type="button" className={`flex h-8 w-12 items-center justify-center rounded-md border ${length == 1 ? " border-indigo-500 bg-indigo-500 text-white" : "bg-white text-gray-800"}  text-center text-sm font-semibold  transition duration-100 `}>XS</button>
                  <button onClick={() => setlength(2)} type="button" className={`flex h-8 w-12 items-center justify-center rounded-md border ${length == 2 ? " border-indigo-500 bg-indigo-500 text-white" : "bg-white text-gray-800"}  text-center text-sm font-semibold  transition duration-100 `}>S</button>
                  <button onClick={() => setlength(3)} type="button" className={`flex h-8 w-12 items-center justify-center rounded-md border ${length == 3 ? " border-indigo-500 bg-indigo-500 text-white" : "bg-white text-gray-800"} text-center text-sm font-semibold transition duration-100 `}>M</button>
                  <button onClick={() => setlength(4)} type="button" className={`flex h-8 w-12 items-center justify-center rounded-md border ${length == 4 ? " border-indigo-500 bg-indigo-500 text-white" : "bg-white text-gray-800"} text-center text-sm font-semibold transition duration-100 `}>L</button>
                  <span className="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">XL</span>
                </div>
              </div>





              {data ? <div>
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-gray-800 md:text-2xl">&#8377;{data?.money}</span>
                    <span className="mb-0.5 text-red-500 line-through">&#8377;{data?.money + 55}</span>
                  </div>

                  <span className="text-sm text-gray-500">incl. VAT plus shipping</span>
                </div>
                <div className="mb-6 flex items-center gap-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>

                  <span className="text-sm">2-4 day shipping</span>
                </div>
                <div className="flex gap-2.5">
                  <button onClick={hanldecartaddition} ref={raj} className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">{loading ? "Loading.." : btncontent}</button>

                  <button onClick={() => setlike((pre) => !pre)} className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                    {like ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg> : <FcLike style={{ fontSize: "24px" }} />}
                  </button>
                </div>
              </div> : <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>}



              <div className="mt-10 md:mt-16 lg:mt-20">
                <div className="mb-3 text-lg font-semibold text-gray-800">Description</div>

                <p className="text-gray-500">
                  {data?.description}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Herod
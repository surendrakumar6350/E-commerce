"use client"
import React, { useEffect } from 'react'
import { BASE_URL } from '@/Constants'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { addhomeproducts } from '@/app/redux/remainingSlices/Homeproducts'

const Pro = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.HomeProductSlice.data);
const productids = [
  "65c644b675cd37e839398e27","65b1011d1d2ebe4997300003","65c644b675cd37e839398e27","65c644b675cd37e839398e27","65c644b675cd37e839398e27",
  "65c644b675cd37e839398e27","65b1011d1d2ebe4997300003","65b1011d1d2ebe4997300003"
]

  const getProductDetails = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/v1/product/productdetails`, data)
    },
  })
  useEffect(()=> {
    (
      async () => {
        productids.map(async(e)=> {
          let ansss = await getProductDetails.mutateAsync({id: e});
          let ans = ansss.data.product;
          dispatch(addhomeproducts(ans));
        })
      }
    )()
  },[]);




  return (
    <>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>

      <a href="#" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a>
    </div>

    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
  
    
{products.map((e)=> {
  return (
        <div>
        <a href={`${BASE_URL}/v1/1/productdetails/${e._id}`} className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
          <img src={e.imageUrl} loading="lazy" alt="Photo by Kiran CK" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">{e.sale}</span>
        </a>

        <div>
          <a href={`${BASE_URL}/v1/1/productdetails/${e._id}`} className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{e.name}</a>

          <div className="flex items-end gap-2">
            <span className="font-bold text-gray-800 lg:text-lg">{e.money}</span>
            <span className="mb-0.5 text-red-500 line-through">{e.cuttingrate}</span>
          </div>
        </div>
      </div>
  )
    
      })
}
   


    
    </div>
  </div>
</div>
    </>
  )
}

export default Pro
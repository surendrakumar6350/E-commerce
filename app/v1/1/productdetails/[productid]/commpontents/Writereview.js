"use client"
import React from 'react'
import { BASE_URL } from '@/Constants'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

const Writereview = () => {
  const [products, setproducts] = useState();
  const [productids, setproductids] = useState([]);

  
  const getProductDetails = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/v1/product/productdetails`, data)
    },
  })
  const getProductids = useMutation({
    mutationFn: () => {
      return axios.post(`${BASE_URL}/api/v1/proids`)
    },
  })


  useEffect(() => {
    (
      async () => {
        let resutl = await getProductids.mutateAsync();
        let ress = resutl.data.productids;
        setproductids(ress)
      }
    )()
  }, []);

  useEffect(() => {
    (async () => {
      let arr = [];
      await Promise.all(
        productids?.map(async (e) => {
          let ansss = await getProductDetails.mutateAsync({ id: e });
          let ans = ansss.data.product;
          arr.push(ans);
        })
      );
      setproducts(arr);
    })();
  }, [productids]);

  return (
   <>
   <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
  
    <div className="mb-10 md:mb-16">
      <h5 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Discover Today's Exclusive Picks!</h5>
    </div>


    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((e)=> {
        return  <div>
        <a href={`${BASE_URL}/v1/1/productdetails/${e._id}`} className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src={e.imageUrl} loading="lazy" alt="Photo by Nick Karvounis" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{e.name}</a>
            <span className="text-gray-500">{e.brand}</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg"> &#8377;{e.money}</span>
          </div>
        </div>
      </div>
      })}
    
      
    </div>
  </div>
</div>
   </>
  )
}

export default Writereview
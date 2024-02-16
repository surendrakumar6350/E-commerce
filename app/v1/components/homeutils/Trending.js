"use client"
import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '@/Constants'

const Trending = ({ products, setproducts }) => {


  const getproducts = useMutation({
    mutationFn: () => {
      return axios.post(`${BASE_URL}/api/v1/newproducts`)
    },
  })

  useEffect(() => {
    (
      async () => {
        let ansss = await getproducts.mutateAsync();
        let ans = ansss.data.product;
        setproducts(ans)
      }
    )()
  }, []);

  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap -m-4">
            {products?.map((e) => {
              return <div key={e._id} onClick={() => {
                window.location.href = `${BASE_URL}/v1/1/productdetails/${e._id}`
              }} className="cursor-pointer lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={e.imageUrl} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{e.brand}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{e.name}</h2>
                  <p className="mt-1"> &#8377;{e.money}</p>
                </div>
              </div>
            })
            }

          </div>
        </div>
      </section>

    </>
  )
}

export default Trending
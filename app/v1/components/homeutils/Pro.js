"use client"
import React, { useEffect } from 'react'
import { BASE_URL } from '@/Constants'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { addhomeproducts } from '@/app/redux/remainingSlices/Homeproducts'

const Pro = () => {
  const [products, setproducts] = useState();
  const [productids, setproductids] = useState([]);

  const dispatch = useDispatch();
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
      dispatch(addhomeproducts(arr));
    })();
  }, [productids]);






  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Today’s Deals</h2>

           
          </div>

          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">


            {products?.map((e) => {
              return (
                <div>
                  <a href={`${BASE_URL}/v1/1/productdetails/${e._id}`} className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                    <img src={e.imageUrl} loading="lazy" alt="Photo by Kiran CK" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <span className={`${(e.sale == "sale" ? null : "hidden")} absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white`}>{e.sale}</span>
                  </a>

                  <div>
                    <a href={`${BASE_URL}/v1/1/productdetails/${e._id}`} className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{e.name}</a>

                    <div className="flex items-end gap-2">
                      <span className="font-bold text-gray-800 lg:text-lg">&#8377;{e.money}</span>
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
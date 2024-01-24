"use client"
import React, { useEffect } from 'react'
import { BASE_URL } from '@/Constants'
import Herod from './commpontents/Herod'
import Reviews from './commpontents/Reviews'
import Writereview from './commpontents/Writereview'
import Footer from '../../../components/homeutils/Footer'
import Nav from '../../../components/homeutils/Nav'
import { useMutation } from '@tanstack/react-query'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '@/app/redux/remainingSlices/ProductPage'
import axios from 'axios'


const page = ({params}) => {
  const dispatch = useDispatch();
  const productidd =  params.productid;
    

  const getProductDetails = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/v1/product/productdetails`, data)
    },
  })
  useEffect(()=> {
    (
      async () => {

      const ansss = await getProductDetails.mutateAsync({id: productidd});
      const ans = ansss.data.product;
      dispatch(addProduct(ans));
      }
    )()
  },[]);

  return (
    <>
    <div className='w-full'>
   <Nav />
    <Herod />
    <Reviews props={productidd} />
    <Writereview  />
    <Footer />
    </div>
   
    </>
  )
}

export default page
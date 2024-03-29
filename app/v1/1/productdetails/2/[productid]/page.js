"use client"
import React, { useEffect } from 'react'
import { BASE_URL, PRODUCT_DETAILS_HOST, PRODUCT_DETAILS_KEY } from '@/Constants'
import Footer from '@/app/v1/components/homeutils/Footer'
import Reviewss from './compontents/Reviewss'
import Nav from '@/app/v1/components/homeutils/Nav'
import { useMutation } from '@tanstack/react-query'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '@/app/redux/remainingSlices/ProductPage'
import axios from 'axios'
import Herood from './compontents/Herood'
import Writereview from '../../[productid]/commpontents/Writereview'


const page = ({params}) => {
  const dispatch = useDispatch();
  const productidd =  params.productid;
    

  
  useEffect(()=> {
    (
      async () => {

        const options = {
          method: 'GET',
          url: 'https://real-time-product-search.p.rapidapi.com/product-details',
          params: {
            product_id: productidd,
            country: 'us',
            language: 'en'
          },
          headers: {
            'X-RapidAPI-Key': PRODUCT_DETAILS_KEY,
            'X-RapidAPI-Host': PRODUCT_DETAILS_HOST
          }
        };
        
        try {
            const response = await axios.request(options);
            dispatch(addProduct(response.data.data));
        } catch (error) {
            console.error(error);
        }
     
      }
    )()
  },[]);

  return (
    <>
    <div className='w-full'>
   <Nav />
    <Herood />
    <Reviewss props={productidd} />
    <Writereview  />
    <Footer />
    </div>
   
    </>
  )
}

export default page
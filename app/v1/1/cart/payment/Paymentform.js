"use client"
import React from 'react'
import axios from 'axios'
import useRazorpay from "react-razorpay";
import { useRouter } from 'next/navigation';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { BASE_URL } from '@/Constants';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addordersuccess } from '@/app/redux/remainingSlices/cart';
import { getCurrentDateAndTime } from './calcdate';

const Paymentform = ({money}) => {
  const dispatch = useDispatch();
    const [Razorpay] = useRazorpay();
  const router = useRouter();
  const {items, address} = useSelector((data)=> data.cartslice)


  const handleclick =  () => {
(async()=> {

  Toastify({
    text: `please wait`, duration: 2000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "green", },
  }).showToast();

  const { data: { order } } = await axios.post(`${BASE_URL}/api/v1/payment/createorder`, {money: money,})
 const options = {
    key: "rzp_test_VH5pvgVxsaOaQm", 
    amount: order.amount, 
    currency: order.currency,
    name: "Woo Commerce",
    description: "Test Transaction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwmf1XgxdX4ooEbfPBfZ0i_AlW68Y2XH2ew&usqp=CAU",
    order_id: order.id, 
    handler: function (response) {
      const reqq = async()=> {
     const ans =  await axios.post(`${BASE_URL}/api/v1/payment/checkpayment`, {
          items: items,
          address: address,
          payment: {
            "razorpay_order_id": response.razorpay_order_id,
            "razorpay_payment_id" : response.razorpay_payment_id,
          },
        total: money
        })

       
        if(ans.data.success) {
          Toastify({
            text: `order successful`, duration: 3000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "green", },
          }).showToast();
          dispatch(addordersuccess(ans.data))
          router.push(`${BASE_URL}/v1/1/cart/ordersuccess`)
        }
        else {
          Toastify({
            text: `${ans.data.message}`, duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: "red", },
          }).showToast();
        }

      }
      reqq()
    },

    prefill: {
      name: `${address.firstName} ${address.secondName}`,
      email: `${address.email}`,
      contact: `${address.number}`,
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    router.push(`${BASE_URL}/v1/1/cart/orderfailed`)
  });
  rzp1.open();
}
)()
}

useEffect(()=> {
  window.scrollTo(0, 0);
},[])

  return (
    <>
    

    <div className="py-8 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
  <div className="flex justify-start text-center item-start space-y-2 flex-col">
    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order confirmation</h1>
    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{getCurrentDateAndTime()}</p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
       
       {items.map((e)=> {
        return (
 <div className="mt-4 md:mt-0 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
 <div className="pb-4 md:pb-8 w-full md:w-40">
   <img className="w-full hidden md:block" src={e.imageUrl} alt="dress" />
   <img className="w-full md:hidden" src={e.imageUrl} alt="dress" />
 </div>
 <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
   <div className="w-full flex flex-col justify-start items-start space-y-8">
     <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{e.name}</h3>
     <div className="flex justify-start items-start flex-col space-y-2">
       <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Brand: </span> {e.brand}</p>
       <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Size: </span> {e.size}</p>
       <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Color: </span> {e.color}</p>
     </div>
   </div>
   <div className="flex justify-between space-x-8 items-start w-full">
     <p className="text-base dark:text-white xl:text-lg leading-6">&#8377;{e.money} </p>
     <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{e.count}</p>
     <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">Total : &#8377;{e.totalmoneyforcart}</p>
   </div>
 </div>
</div> )

       })}
       
      </div>
      <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">&#8377;{money}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Discount </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">&#8377; 0</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">&#8377; 0</p>
            </div>
           </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">&#8377;{money}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div className="flex flex-col justify-start items-start flex-shrink-0">

          <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="cursor-pointer text-sm leading-5 ">{address.email}</p>
          </div>
        </div>
        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{address.street}, {address.state}</p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center md:justify-start md:items-start">
            <button onClick={handleclick} className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800  w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Pay &nbsp; - &nbsp; &#8377;{money}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Paymentform
"use client"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { TbTruckDelivery } from "react-icons/tb";
import { MdPendingActions } from "react-icons/md";
import Nav from '@/app/v1/components/homeutils/Nav';
import Footer from '@/app/v1/components/homeutils/Footer';

const page = ({ params }) => {
  const [productt, setproductt] = useState();
  const [orderdel, setorderdel] = useState();
  const [count, setcount] = useState();
  const { order, product } = params;
  const result = useSelector((data) => data.paymentSlice.payment)

 
  useEffect(()=> {
    result.map((e) => {
      if (e._id == order) {
        setorderdel(e)
        e.products?.map((element) => {
          if (element._id == product) {
            setproductt(element)
          }
        })
      }
    })

  },[])

useEffect(()=> {
if(orderdel?.status == "pending") {
  setcount(1)
}
if(orderdel?.status == "dispatched") {
  setcount(2)
}
if(orderdel?.status == "outfordelivery") {
  setcount(3)
}
if(orderdel?.status == "delivered") {
  setcount(4)
}
},[orderdel])

console.log(orderdel)
  return (
    <>
    <Nav />
 

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class={`h-full w-1 ${count == 1 || count == 2 || count == 3 || count == 4 ? "bg-blue-900" : "bg-gray-200" } pointer-events-none`}></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <img src="/pending.svg" />
   
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Pending</h2>
                <p class="text-xs leading-relaxed">{ "Thank you for your order! Your order is currently being processed and is pending.  " }</p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class={`h-full w-1 ${count == 2  || count  == 3 || count == 4 ? "bg-blue-900" : "bg-gray-200" } pointer-events-none`}></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src="/6030052311645479139.svg" />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Dispatched</h2>
                <p class="text-xs leading-relaxed">{ "Your order has been dispatched and is on its way to you. We've shipped your items, and you can expect them to arrive shortly " }</p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class={`h-full w-1 ${count == 3 || count ==  4 ? "bg-blue-900" : "bg-gray-200" } pointer-events-none`}></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <img src="/17036605981678286396.svg" />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Out for Delivery</h2>
                <p class="text-xs leading-relaxed">{ "Your order is now out for delivery! Our delivery team is on their way to bring your items to you"  }</p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class={`h-full w-1 ${count == 4 ? "bg-blue-900" : "bg-gray-200" } pointer-events-none`}></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src="/success.svg" />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Delivered</h2>
                <p class="text-xs leading-relaxed">{ "We're pleased to inform you that your order has been successfully delivered!   Thank you for choosing us!"  }</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page
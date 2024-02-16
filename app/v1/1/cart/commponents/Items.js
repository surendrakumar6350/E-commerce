"use client"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Addsubbtn from './Addsubbtn'
import { addCart, removeFromCart } from '@/app/redux/remainingSlices/cart'
import { addsteps } from '@/app/redux/remainingSlices/cart'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useRouter } from 'next/navigation'
import { BASE_URL } from '@/Constants'

const Items = ({set, get}) => {
const router = useRouter()
  const dispatch = useDispatch()
  const allitems = useSelector((data)=> data.cartslice.items)


  useEffect(()=> {
  const storedCart = localStorage.getItem('cart');
  const ans =  storedCart ? JSON.parse(storedCart) : [];
  dispatch(addCart(ans))
  },[])
 
  useEffect(()=> {
    let count = 0;
 allitems.forEach((el)=> {
  count += (el.totalmoneyforcart);
})

set(count)
},[allitems])


const handlecheckout = ()=> {
  let val = 0;
  allitems.map((e)=> {
    if(e.stockQuantity < 1) {
      val = 1;
    }
  })
  if(val == 1) {
    Toastify({
      text: `Remove out of stock product from cart`, duration: 4000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "red", },
    }).showToast();
  }
  else {
    dispatch(addsteps(2))
  }
}
  
  return (
  <>
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-lg px-4 md:px-8">
    <div className="mb-6 sm:mb-10 lg:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your Cart</h2>
    </div>

    <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
  

  {(allitems.length > 0) ? allitems?.map((e)=> {
return (
  <div>
<div className={`${(e.stockQuantity > 0) ? null : "bg-red-100"} flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6`}>
        <a href="#" className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40">
          <img src={e.imageUrl} loading="lazy" alt="Photo by vahid kanani" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>
        <div className="flex flex-1 flex-col justify-between py-4">
          <div>
            <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{e.name}</a>
            <span className="block text-gray-500">Size: {e.size}</span>
            <span className="block text-gray-500">Color: {e.color}</span>
          </div>
          <div>
            <span className="mb-1 block font-bold text-gray-800 md:text-lg">&#8377;{e.money}</span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              {(e.stockQuantity > 0) ? "In stock" : <p className='bg-yellow-800 text-white px-2'>Out of stock</p>}
            </span>
          </div>
        </div>
        <Addsubbtn key={e._id} props={e} />
      </div>
</div>
)
  }) : <>
     <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
     <svg className="text-gray-400 dark:text-gray-500 w-20 h-20 mb-3.5 mx-auto" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="cart"><g data-name="<Group>"><path fill="#00efd1" d="M462.1,121.9,424.8,240.4a50.028,50.028,0,0,1-47.7,35H141.6l-.5.1L115,122l.4-.1Z"></path><path fill="#00acea" d="M393.1 402.1a40.8 40.8 0 1 1-40.8 40.8A40.843 40.843 0 0 1 393.1 402.1zM179.2 402.1a40.8 40.8 0 1 1-40.8 40.8A40.779 40.779 0 0 1 179.2 402.1zM423.9 357.8H195.7a59.918 59.918 0 0 1-59.2-50L96.4 71.6A39.929 39.929 0 0 0 57 38.3H39.9a10 10 0 0 1 0-20H57a59.737 59.737 0 0 1 59.1 50l40.1 236.3a39.929 39.929 0 0 0 39.4 33.3H423.8a10.029 10.029 0 0 1 10 10A9.859 9.859 0 0 1 423.9 357.8z"></path></g></svg>
            <p className="mb-4 text-gray-500 dark:text-gray-300">There are no products in your cart</p>
            <div className="flex justify-center items-center space-x-4">
                <button onClick={()=> router.push(`${BASE_URL}`)} data-modal-toggle="deleteModal" type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                   Home
                </button>
                <button onClick={()=> router.push(`${BASE_URL}/v1/profile/user`)} className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                   My Orders
                </button>
            </div>
</div>
  </>}
      
    </div>

{(allitems.length > 0) ?  <div className="flex flex-col items-end gap-4">
      <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
        <div className="space-y-1">
          <div className="flex justify-between gap-4 text-gray-500">
            <span>Subtotal</span>
            <span>&#8377;{get}</span>
          </div>

          <div className="flex justify-between gap-4 text-gray-500">
            <span>Shipping</span>
            <span>&#8377;0</span>
          </div>
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex items-start justify-between gap-4 text-gray-800">
            <span className="text-lg font-bold">Total</span>

            <span className="flex flex-col items-end">
              <span className="text-lg font-bold">&#8377;{get} INR</span>
              <span className="text-sm text-gray-500">including VAT</span>
            </span>
          </div>
        </div>
      </div>

      <button onClick={handlecheckout} className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Check out</button>
    </div> : null}
  </div>
</div>
  </>
  )
}

export default Items
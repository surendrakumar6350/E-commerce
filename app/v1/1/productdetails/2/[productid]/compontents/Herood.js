"use client"
import { addToCart } from '@/app/redux/remainingSlices/cart'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Herood = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productSlice.product);
  const data = product[0];
  

const hanldecartaddition = () => {
      const storedCart = localStorage.getItem('cart');
      const last =  storedCart ? JSON.parse(storedCart) : null;

    let makeorder = {
        brand: data?.product.offer.store_name,
        category: "Any",
        count: 1,
        cuttingrate: "Any",
        description: data?.product.product_description,
        imageUrl: data?.product.product_photos[0],
        money: parseInt((data?.product.offer.price).replace(/[^\d.]/g, '')) * 4,
        name: data?.product.product_title,
        rating: data?.product.product_rating,
        sale: "Not In Sale",
        stockQuantity: 100,
        totalmoneyforcart:  parseInt((data?.product.offer.price).replace(/[^\d.]/g, '')) * 4,
        _id: data?.product.product_id,
      }
      

    if(last) {
      const cart = [...last, makeorder]
        localStorage.setItem('cart', JSON.stringify(cart));
}
else {
  localStorage.setItem('cart', JSON.stringify([makeorder]));
}
dispatch(addToCart(makeorder))
}

  return (
    <>
    
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-lg px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2">
     
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <img src={data?.product.product_photos[0]} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />

        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img src={data?.product.product_photos[1]} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img src={data?.product.product_photos[2]} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
      
      <div className="md:py-8">
       
        <div className="mb-2 md:mb-3">
          <span className="mb-0.5 inline-block text-gray-500">{data?.product.offer.store_name}</span>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data?.product.product_title}</h2>
        </div>
        
        <div className="mb-6 flex items-center md:mb-10">
          <div className="-ml-1 flex gap-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.product.product_rating > 0) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.product.product_rating > 1) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.product.product_rating > 2) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.product.product_rating > 3) ? "text-yellow-400" : "text-gray-300"}`}  viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(data?.product.product_rating > 4) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <span className="ml-2 text-sm text-gray-500">{data?.product.product_rating}</span>

          <a href="#" className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">view all 47 reviews</a>
        </div>
       
        <div className="mb-4 md:mb-6">
          <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Color</span>

          <div className="flex flex-wrap gap-2">
            <span className="h-8 w-8 rounded-full border bg-gray-800 ring-2 ring-gray-800 ring-offset-1 transition duration-100"></span>
            <button type="button" className="h-8 w-8 rounded-full border bg-gray-500 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
            <button type="button" className="h-8 w-8 rounded-full border bg-gray-200 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
            <button type="button" className="h-8 w-8 rounded-full border bg-white ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
          </div>
        </div>
      
      
        <div className="mb-8 md:mb-10">
          <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Size</span>

          <div className="flex flex-wrap gap-3">
            <button type="button" className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">XS</button>
            <button type="button" className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">S</button>
            <span className="flex h-8 w-12 cursor-default items-center justify-center rounded-md border border-indigo-500 bg-indigo-500 text-center text-sm font-semibold text-white">M</span>
            <button type="button" className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">L</button>
            <span className="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">XL</span>
          </div>
        </div>
     

     
        <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-800 md:text-2xl">&#x20B9;{data ? parseInt((data?.product.offer.price).replace(/[^\d.]/g, '')) * 4 : null}</span>
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
          <button onClick={hanldecartaddition} className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Add to cart</button>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
        </div>
      

        
        <div className="mt-10 md:mt-16 lg:mt-20">
          <div className="mb-3 text-lg font-semibold text-gray-800">Description</div>

          <p className="text-gray-500">
            {data?.product.product_description}
          </p>
        </div>
      
      </div>
      
    </div>
  </div>
</div>
    </>
  )
}

export default Herood
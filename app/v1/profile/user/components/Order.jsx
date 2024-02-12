"use client"
import React from 'react'
import E from './E'
import { useRouter } from 'next/navigation'
import { BASE_URL } from '@/Constants'

const Order = ({orders}) => {
  const router = useRouter();
 const handleclick = ()=> {
router.push(`${BASE_URL}/v1/home`)
 }
  return (
    <>
{orders[0]?.no == "no" ? <div className="flex flex-col items-center m-auto mt-9 justify-center h-50">
      <h1 className="text-3xl font-semibold mb-4">You have 0 orders</h1>
      <small className="text-gray-600">It seems you haven't placed any orders yet. <br /> Start shopping now to fill your orders list!</small>
      <button onClick={handleclick} className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Shop Now</button>
    </div> : null}



    {orders?.map((e)=> {
return <E product={e.products} order={e}/>
    })}
      
    </>
  )
}

export default Order
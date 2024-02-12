"use client"
import React from 'react'
import { BASE_URL } from '@/Constants';
import { useRouter } from 'next/navigation';

const E = ({product, order}) => {
const router = useRouter();
    function convertToReadableDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return date.toLocaleDateString('en-IN', options);
    }
    const handleclick = (id)=> {
      router.push(`${BASE_URL}/v1/profile/user/status/${order._id}/${id}`)
    }

  return (
    <>
    {product?.map((e)=> {
        return <div onClick={()=> handleclick(e._id)} class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={e?.imageUrl} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{e?.name}</h2>
            <p class="text-gray-500">{e.brand}</p>
            <p>  <small>{convertToReadableDate(order.createdAt)}</small></p>
              <small className='text-slate-800'>
                status: <code className='text-slate-800'>{order.status}</code>
              </small>
          </div>
        </div>
        </div>
    })}
    
    </>
  )
}

export default E
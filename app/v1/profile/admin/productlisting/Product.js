"use client"
import React, { useState } from 'react'
import { GrStatusWarningSmall } from "react-icons/gr";
import { MdOutlineDone } from "react-icons/md";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useMutation } from '@tanstack/react-query';
import { BASE_URL } from '@/Constants';
import axios from 'axios';

const Product = ({ product, order, e, value, setvalue, a }) => {



  const updatestatus = useMutation({
    mutationFn: () => {
      return axios.post(`${BASE_URL}/api/admin/updatestatus`, {
        id: order._id,
        status: value
      })
    },
  })

  const handleclick = () => {
    if (value == undefined) {
      Toastify({
        text: `Select a value`, duration: 2000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "green", },
      }).showToast();
    }
    else {
      (
        async () => {
          let ansss = await updatestatus.mutateAsync();
          let ans = ansss.data;
          if (ans.success == true) {
            a((pre) => pre + 1)
            Toastify({
              text: `Updated successfully`, duration: 2000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "green", },
            }).showToast();
          }
          else {
            Toastify({
              text: `Error`, duration: 2000, close: true, gravity: "top", position: "center", stopOnFocus: true, style: { background: "red", },
            }).showToast();
          }

        }

      )()
    }
  }



  function convertToReadableDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
  }
  return (
    <>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full pl-5">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={e.imageUrl} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{e.name}</h2>
            <p class="text-sm bg-slate-400 inline text-black">{(order.status == "delivered" ? <MdOutlineDone className='inline' /> : <GrStatusWarningSmall className='inline' />)} {order.status}</p>
            <p class="text-gray-500"> {order.address.firstName} {order.address.secondName}</p>
            <small class="text-gray-500">{convertToReadableDate(order.createdAt)}</small>

            <select onChange={(e) => setvalue(e.target.value)} id="small" class="block w-[80%] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled selected className='text-sm'>Choose a status</option>
              {(() => {
                if (order.status == "pending") {
                  return <>
                    <option value="dispatched">Dispatched</option>
                    <option value="outfordelivery">Out For Delivery</option>
                    <option value="delivered">Delivered</option>
                  </>
                }
                if (order.status == "dispatched") {
                  return <>
                    <option value="outfordelivery">Out For Delivery</option>
                    <option value="delivered">Delivered</option>
                  </>
                }
                if (order.status == "outfordelivery") {
                  return <>
                    <option value="delivered">Delivered</option>
                  </>
                }
              })()}

            </select>
            <button
              onClick={handleclick}
              type="button"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              Update
            </button>

          </div>
        </div>



      </div>

    </>
  )
}

export default Product
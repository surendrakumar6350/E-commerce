"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useMutation } from '@tanstack/react-query'
import { BASE_URL } from '@/Constants'
import { useEffect } from 'react'
import { useState } from 'react'
import { addusers } from '@/app/redux/remainingSlices/allusers'


const Tr = ({e}) => {
    const [role, setrole] = useState("user");
    const dispatch = useDispatch()
    const result = useSelector((data)=> data.usersSlice.userss)

    const handlerole = useMutation({
        mutationFn: (data) => {
            return axios.post(`${BASE_URL}/api/admin/updaterole`, data)
        },
      })
      const handledel = useMutation({
        mutationFn: (data) => {
            return axios.post(`${BASE_URL}/api/admin/deleteuser`, data)
        },
      })

    const  handlerolechange = async()=> {
                let ansss = await handlerole.mutateAsync({id: e._id, role: role});
                let ans = ansss.data;
                if(ans.success) {
                    Toastify({
                        text: "Role updated successfully",
                        duration: 3000,
                        close: true,
                        gravity: "top",
                        position: "center",
                        stopOnFocus: true,
                        style: {
                          background: "green",
                        },
                        onClick: function () { }
                      }).showToast();
                     var arr = result.map((element)=> {
                        if(element._id == e._id) {
                            return {
                             ...element,
                                role: role
                            }
                        }
                        else {
                            return element
                        }
                     })
                     dispatch(addusers(arr));
                }  
      }

const handledelete = async()=> {
    let ansss = await handledel.mutateAsync({id: e._id});
    let ans = ansss.data;
    if(ans.success) {
        Toastify({
            text: "User Deleted",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
              background: "green",
            },
            onClick: function () { }
          }).showToast();
          var arr = result.filter((element)=> {
            if(element._id !== e._id) {
                return element
            }
            
         })
          dispatch(addusers(arr));
    }
}


  return (
    <>
    <tr className='text-wrap overflow-hidden'>
      <td><img className='img' src={e?.pic} alt="" /></td>
         <td>{e?.username}</td>
         <td>{e?.email}</td>
         <td>{e?.role}</td>
         <td><label for="Role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Role</label>
         <select onChange={(e)=> setrole(e.target.value)} id="Role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a Role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
         </select>
         <button onClick={handlerolechange} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
               Update Role
            </span>
         </button>
         <button onClick={handledelete} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Delete User
            </span>
         </button>
      </td>
   </tr>
    </>
  )
}

export default Tr
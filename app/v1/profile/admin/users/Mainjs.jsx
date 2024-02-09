"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { BASE_URL } from '@/Constants'
import { useEffect } from 'react'
import { useState } from 'react'
import Tr from './Tr'
import { addusers } from '@/app/redux/remainingSlices/allusers'

const Mainjs = () => {
  
   const result = useSelector((data)=> data.usersSlice.userss)
   const dispatch = useDispatch()
   const getuser = useMutation({
      mutationFn: () => {
          return axios.post(`${BASE_URL}/api/admin/getusers`)
      },
    })
  

    
    useEffect(() => {
      (
          async () => {
              let ansss = await getuser.mutateAsync();
              let ans = ansss.data.users;
              dispatch(addusers(ans));
          }

      )()
  }, []);
 

  return (
    <div className='h-full w-full pl-11 '>
<div class="table-users">
   <div class="headerr">Users</div>
   
   <table cellspacing="0">
      <tr>
         <th>Picture</th>
         <th>Name</th>
         <th>Email</th>
         <th>Role</th>
         <th width="230"></th>
      </tr>

{result?.map((e)=> {
   return <Tr e={e} />
})}


   </table>
</div>
    </div>
  )
}

export default Mainjs
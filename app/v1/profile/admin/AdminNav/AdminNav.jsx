"use client"
import React from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { BASE_URL } from '@/Constants'
import { RiAdminLine } from "react-icons/ri";
import { useState, useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import { MdAddCircle } from "react-icons/md";
import { PiListNumbersDuotone } from "react-icons/pi";
import { Button } from '@mui/material'
import Link from 'next/link'

const AdminNav = ({state}) => {
    const [user, setuser] = useState()

    const getuser = useMutation({
        mutationFn: () => {
            return axios.post(`${BASE_URL}/api/v1/getuser`)
        },
    })

    useEffect(() => {
        (
            async () => {
                let ansss = await getuser.mutateAsync();
                let ans = ansss.data;
                setuser(ans)
            }

        )()
    }, []);

  return (
    <aside className="fixed flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
    <nav className="flex flex-col flex-1 space-y-6">
       

        <button onClick={()=> state(1)} className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
            
            <MdAddCircle className="w-6 h-6" />
        </button>

        <button onClick={()=> state(2)} className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
            <CiUser className="w-6 h-6" />
        </button>

        <button onClick={()=> state(3)} className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
        <PiListNumbersDuotone className="w-6 h-6" />
        </button>

       
    </nav>

    <div className="flex flex-col space-y-6">
        <Link href={`${BASE_URL}/v1/profile/user`}>
            <img className="object-cover w-8 h-8 rounded-full" src={user?.user?.pic} alt="" />
        </Link>
    </div>
</aside>
  )
}

export default AdminNav
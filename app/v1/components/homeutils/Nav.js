"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { X } from "lucide-react";
import Link from "next/link";
import { Search } from 'lucide-react';
import { BASE_URL } from '@/Constants';
import { useRouter } from 'next/navigation';
import { FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import LoadingBar from 'react-top-loading-bar'
import { useRef } from 'react';


const Nav = () => {
    const [user, setuser] = useState([]);
    const [value, setvalue] = useState(0)
    const daaa = useSelector((data) => data.cartslice.items)
    const ref = useRef(null)

    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const handleredirect = () => {
        ref.current.continuousStart()
        router.push(`${BASE_URL}/v1/home`)
        ref.current.complete()
    }
    const handlecartredirect = () => {
        ref.current.continuousStart()
        router.push(`${BASE_URL}/v1/1/cart`)
        ref.current.complete()
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        const cartlengthvalue = storedCart ? JSON.parse(storedCart) : [];
        setvalue(cartlengthvalue.length)
    }, [daaa])



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
        <>
        <LoadingBar color='#f11946' ref={ref} />
            <div className="md:sticky md:top-0 bg-white z-50  md:shadow-none  h-[60px]">
                <div className=" hidden lg:block animate-in fade-in zoom-in gradient p-4">
                    <div className={` ${(user.length == 0) ? "hidden" : null} flex justify-between mx-[41px] items-center `}>
                        <div className='cursor-pointer' onClick={handleredirect}>
                            <img src="https://alternate-woo-commerce-landing-page.vercel.app//images/nav_logo.png" alt="logo" />
                        </div>
                        <div className="flex gap-[20px] xl:gap-[50px]  text-[16px] items-center select-none">
                           

                        </div>

                        <div className={` flex items-center gap-[40px] select-none`}>
                            <Link href={`${BASE_URL}/v1/1/login`}
                                className={`${(user?.user?.username) ? "hidden" : null} hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                Login
                            </Link>
                            <Search className='hover:scale-125 cursor-pointer' onClick={() => {
                                ref.current.continuousStart()
                                router.push(`${BASE_URL}/v1/1/search`);
                                ref.current.complete()
                            }} />

                            <Link href={`  ${(user?.user?.role == "user") ? BASE_URL + '/v1/profile/user' : BASE_URL + '/v1/profile/admin' }   `} className={`${(user?.user) ? null : "hidden"} hover:scale-125 flex items-center focus:outline-none`} aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img src={user?.user?.pic} className="object-cover w-full h-full" alt="avatar" />
                                </div>

                                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">{user?.user?.username}</h3>
                            </Link>

                            <span className="sm:ml-3">
                                <button onClick={handlecartredirect} type="button" className="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <div className="cart">
                                        {value == 0 ? null : <span className="count">{value == 0 ? null : value}</span>}

                                        <img src="/shopping-cart.png" />
                                    </div>
                                </button>
                            </span>


                        </div>
                    </div>
                </div>


                {/* MOBILE */}
                <div
                    className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${menu ? " bg-primary py-2" : ""
                        } `}
                >
                    <div className="flex justify-between mx-[10px]">
                        <div onClick={handleredirect} className="flex gap-[50px] text-[16px] items-center select-none">
                            <img src="https://alternate-woo-commerce-landing-page.vercel.app//images/nav_logo.png" alt="logo" className="w-[7rem]" />
                        </div>
                        <div className="flex items-center gap-[40px]">
                            {menu ? (
                                <X
                                    className="cursor-pointer animate-in fade-in zoom-in text-black"
                                    onClick={toggleMenu}
                                />
                            ) : (
                                <img
                                    src="https://alternate-woo-commerce-landing-page.vercel.app//images/hamburger_icon.png"   
                                    alt="logo"
                                    className="cursor-pointer animate-in fade-in zoom-in"
                                    onClick={toggleMenu}
                                />
                            )}
                        </div>
                    </div>
                    {menu ? (
                        <div className="my-8 select-none animate-in slide-in-from-right">
                            <div className="flex flex-col gap-8 mt-8 mx-4">
                                
                                <Link href={`${BASE_URL}/v1/1/search`} className={`text-black cursor-pointer`}>Search</Link>
                                <Link href={`${BASE_URL}/v1/1/cart`} className={`text-black cursor-pointer`}>Cart</Link>

                                <div className={`${(user?.user?.username) ? "hidden" : null} flex flex-col gap-[40px] select-none`}>
                                    <Link href={`${BASE_URL}/v1/1/login`} className={`${(user?.user?.username) ? "hidden" : null}  text-black cursor-pointer`}>
                                        Log in
                                    </Link>
                                </div>
                                <div className={`${(user?.user?.username) ? null : "hidden"} flex flex-col gap-[40px] select-none`}>
                                    <Link href={`  ${BASE_URL + '/v1/profile/user'}   `} className={`${(user?.user?.username) ? null : "hidden"}  text-black cursor-pointer`}>
                                        Your Orders
                                    </Link>
                                </div>
                                <div className={`${(user?.user?.role == "admin") ? null : "hidden"} flex flex-col gap-[40px] select-none`}>
                                    <Link href={`  ${BASE_URL + '/v1/profile/admin'}   `} className={`${(user?.user?.role == "admin") ? null : "hidden"}  text-black cursor-pointer`}>
                                      Admin panel
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>

        </>
    )
}

export default Nav
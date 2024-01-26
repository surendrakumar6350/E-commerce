import React, { useEffect } from 'react'
import { useState } from 'react';
import { X } from "lucide-react";
import Link from "next/link";
import { Search } from "lucide-react";
import { BASE_URL } from '@/Constants';
import { useRouter } from 'next/navigation';
import { FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';


const Nav = () => {
    const [value, setvalue] = useState(0)
    const daaa = useSelector((data)=> data.cartslice.items)
  
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const handleredirect = () => {
        router.push(`${BASE_URL}/v1/home`)
    }
    const handlecartredirect = ()=> {
        router.push(`${BASE_URL}/v1/1/cart`)
    }

useEffect(()=> {
    const storedCart = localStorage.getItem('cart');
    const cartlengthvalue = storedCart ? JSON.parse(storedCart) : [];
  setvalue(cartlengthvalue.length)
},[daaa])

    return (
        <>
            <div className="md:sticky md:top-0 bg-white z-50  md:shadow-none  h-[60px]">
                <div className=" hidden lg:block animate-in fade-in zoom-in gradient p-4">
                    <div className="flex justify-between mx-[41px] items-center">
                        <div className='cursor-pointer' onClick={handleredirect}>
                            <img src="https://alternate-woo-commerce-landing-page.vercel.app//images/nav_logo.png" alt="logo" />
                        </div>
                        <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
                            <p
                                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                Sell
                            </p>
                            <p
                                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                MarketPlace
                            </p>
                            <p
                                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                Community
                            </p>
                            <p
                                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                Develop
                            </p>
                            <p
                                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                Resources
                            </p>
                        </div>
                        <div className="flex items-center gap-[40px] select-none">
                            <Link href={`${BASE_URL}/v1/1/login`}
                                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                Login
                            </Link>
                            <span className="sm:ml-3">
      <button onClick={handlecartredirect} type="button" className="inline-flex items-center rounded-md bg-slate-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      <div className="cart">
        {value == 0 ? null : <span className="count">{value == 0 ? null : value}</span> }
  
  <i className="material-icons"><FiShoppingCart /></i>
</div>
      </button>
    </span>

                            <Search />
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
                                <p className={`text-black cursor-pointer`}>Sell</p>
                                <p className={`text-black cursor-pointer`}>MarketPlace</p>
                                <p className={`text-black cursor-pointer`}>Community</p>
                                <p className={`text-black cursor-pointer`}>Develop</p>
                                <p className={`text-black cursor-pointer`}>Resources</p>

                                <div className="flex flex-col gap-[40px] select-none">
                                    <Link href="/auth/login" className="text-black cursor-pointer">
                                        Signin
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
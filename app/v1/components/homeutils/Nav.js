import React from 'react'
import { useState } from 'react';
import { X } from "lucide-react";
import Link from "next/link";
import { Search } from "lucide-react";


const Nav = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    return (
        <>
            <div className="md:sticky md:top-0   md:shadow-none z-20 ">
                <div className=" hidden lg:block animate-in fade-in zoom-in gradient p-4">
                    <div className="flex justify-between mx-[41px] items-center">
                        <div>
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
                            <p
                                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                Login
                            </p>
                            <span className="sm:ml-3">
      <button type="button" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
        Publish
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
                        <div className="flex gap-[50px] text-[16px] items-center select-none">
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
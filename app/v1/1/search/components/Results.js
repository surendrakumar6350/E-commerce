"use client"
import axios from "axios"
import { useEffect, useState } from "react";
import Link from "next/link";
import { BASE_URL } from "@/Constants";


const Results = ({result, loading}) => {
    const [data, setdata] = useState([]);
    useEffect(()=> {
setdata(result)
    },[result])
   


    const handleprice = (e)=> {
        if (e.target.value == 0) {
            const arr = result.filter((a) => {
                const fakemoney = a.offer.price
                const productprice = parseInt(fakemoney.replace(/[^\d.]/g, '')) * 4;
                if (productprice >= 0 && productprice < 50) {
                    return a
                }
            })
            setdata(arr)
        }
        if (e.target.value == 51) {
            const arr = result.filter((a) => {
                const fakemoney = a.offer.price
                const productprice = parseInt(fakemoney.replace(/[^\d.]/g, '')) * 4;
                if (productprice > 51 && productprice < 100) {
                    return a
                }
            })
            setdata(arr)
        }
        if (e.target.value == 101) {
            const arr = result.filter((a) => {
                const fakemoney = a.offer.price
                const productprice = parseInt(fakemoney.replace(/[^\d.]/g, '')) * 4;
                if (productprice > 101 && productprice < 200) {
                    return a
                }
            })
            setdata(arr)
        }
        if (e.target.value == 201) {
            const arr = result.filter((a) => {
                const fakemoney = a.offer.price
                const productprice = parseInt(fakemoney.replace(/[^\d.]/g, '')) * 4;
                if (productprice > 201 && productprice < 500) {
                    return a
                }
            })
            setdata(arr)
        }
        if (e.target.value == 501) {
            const arr = result.filter((a) => {
                const fakemoney = a.offer.price
                const productprice = parseInt(fakemoney.replace(/[^\d.]/g, '')) * 4;
                if (productprice > 500) {
                    return a
                }
            })
            setdata(arr)
        }
    }



const handlerating = (e)=> {
    

    if (e.target.value == 5) {
        const arr = result.filter((a) => {
            const fakemoney = a.product_rating;
            const productprice = parseInt(fakemoney);
            if (productprice >= 5) {
                return a
            }
        })
        setdata(arr)
    }
    if (e.target.value == 4) {
        const arr = result.filter((a) => {
            const fakemoney = a.product_rating;
            const productprice = parseInt(fakemoney);
            if (productprice >= 4) {
                return a
            }
        })
        setdata(arr)
    }
    if (e.target.value == 3) {
        const arr = result.filter((a) => {
            const fakemoney = a.product_rating;
            const productprice = parseInt(fakemoney);
            if (productprice >= 3) {
                return a
            }
        })
        setdata(arr)
    }
    if (e.target.value == 2) {
        const arr = result.filter((a) => {
            const fakemoney = a.product_rating;
            const productprice = parseInt(fakemoney);
            if (productprice >= 2) {
                return a
            }
        })
        setdata(arr)
    }
    if (e.target.value == 1) {
        const arr = result.filter((a) => {
            const fakemoney = a.product_rating;
            const productprice = parseInt(fakemoney);
            if (productprice >= 1) {
                return a
            }
        })
        setdata(arr)
    }
}



  return (
    <>


<div className={`${result ? null : "hidden md:hidden"} px-5 py-2 md:flex  space-x-4`}>
  <select onChange={handleprice} className="border w-20 rounded-md p-2">
    <option value="">Price</option>
    <option value="0">&#x20B9;0 - &#x20B9;50</option>
    <option value="51">&#x20B9;51 - &#x20B9;100</option>
    <option value="101">&#x20B9;101 - &#x20B9;200</option>
    <option value="201">&#x20B9;201 - &#x20B9;500</option>
    <option value="501">&#x20B9;501 and above</option>
  </select>

  <select onChange={handlerating} className="border w-[90px] rounded-md p-2">
    <option value="">Rating</option>
    <option value="5">5 Stars</option>
    <option value="4">4 Stars & Up</option>
    <option value="3">3 Stars & Up</option>
    <option value="2">2 Stars & Up</option>
    <option value="1">1 Star & Up</option>
  </select>
</div>
    

<section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-6 mb-5">

  {data?.map((e)=> {
return (
<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href={`${BASE_URL}/v1/1/productdetails/2/${e.product_id}`}>
            <img src={e.product_photos[0]}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{e.offer.store_name}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{e.product_title}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">&#8377;{`${parseInt((e.offer.price).replace(/[^\d.]/g, '')) * 4}`}</p>
                    <del>
                    </del>
                    <div className="ml-auto">
                        <div className="flex">

                       
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(e?.product_rating > 0) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(e?.product_rating > 1) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(e?.product_rating > 2) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(e?.product_rating > 3) ? "text-yellow-400" : "text-gray-300"}`}  viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(e?.product_rating > 4) ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
</div>
                    </div>
                </div>
            </div>
        </a>
    </div>
)
  })} 



   

</section>


    </>
  )
}

export default Results
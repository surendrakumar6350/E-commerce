import { addCart } from '@/app/redux/remainingSlices/cart';
import React, { useEffect, useState } from 'react'
import { productPrice } from '@/app/redux/remainingSlices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductquantity, removeFromCart } from '@/app/redux/remainingSlices/cart';

const Addsubbtn = ({props}) => {
  const paisa = useSelector((data)=> data.cartslice.price)
  const [showTotal, setshowTotal] = useState();
  const dispatch = useDispatch();
 

  

const sub = ()=> {
dispatch(changeProductquantity({id: props._id, operation: "-"}))
}
const add = ()=> {
 dispatch(changeProductquantity({id: props._id, operation: "+"}))
}


const handledelte = ()=> {
  const storedCart = localStorage.getItem('cart');
 let alldata = storedCart ? JSON.parse(storedCart) :  [] ;
 alldata = alldata.filter(item => item._id !== props._id);
    localStorage.setItem('cart', JSON.stringify(alldata));
    dispatch(removeFromCart({id: props._id}))
}
  return (
   <>
            <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
          <div className="flex flex-col items-start gap-2">
          <div className="flex h-12 w-20 overflow-hidden rounded border">
              <input type="number" readOnly value={props.count} className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring" />
              <div className="flex flex-col divide-y border-l">
                <button onClick={add} className=" flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+</button>
                <button onClick={sub} className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-</button>
              </div>
            </div>
            <button onClick={handledelte} className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Delete</button>
          </div>
          <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
            <span className="block font-bold text-gray-800 md:text-lg">&#8377;{props.totalmoneyforcart}</span>
          </div>
        </div>
   </>
  )
}

export default Addsubbtn
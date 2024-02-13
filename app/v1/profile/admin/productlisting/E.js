"use client"
import React, { useState } from 'react'
import { GrStatusWarningSmall } from "react-icons/gr";
import { MdOutlineDone } from "react-icons/md";
import Product from './Product';

const E = ({ product, order, value, setvalue, a }) => {
 
  return (
    <>
      {product?.map((e) => {
        return (
          <Product a={a} value={value} setvalue={setvalue} e={e} product={product} order={order} /> )
      })}



    </>
  )
}

export default E
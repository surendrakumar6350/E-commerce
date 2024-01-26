"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const Steps = () => {
  const data = useSelector((data)=> data.cartslice.steps)
  return (
    <>
    <div className='w-[80%] sm:pt-[40px] m-auto'>
  <h2 className="sr-only">Steps</h2>

  <div
    className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
  >
    <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
      <li className="flex items-center gap-2 bg-white p-2">
        <span className={`h-6 w-6 rounded-full ${(data == 1) ? "bg-blue-600" : "bg-gray-100"}  text-center text-[10px]/6 font-bold ${(data == 1) ? "text-white" : null} `}>
          1
        </span>

        <span className="hidden sm:block"> Details </span>
      </li>

      <li className="flex items-center gap-2 bg-white p-2">
        <span
          className={`h-6 w-6 rounded-full ${(data == 2) ? "bg-blue-600" : "bg-gray-100"}  text-center text-[10px]/6 font-bold ${(data == 2) ? "text-white" : null} `}
        >
          2
        </span>

        <span className="hidden sm:block"> Address </span>
      </li>

      <li className="flex items-center gap-2 bg-white p-2">
        <span className={`h-6 w-6 rounded-full ${(data == 3) ? "bg-blue-600" : "bg-gray-100"}  text-center text-[10px]/6 font-bold ${(data == 3) ? "text-white" : null} `}>
          3
        </span>

        <span className="hidden sm:block"> Payment </span>
      </li>
    </ol>
  </div>
</div>
    </>
  )
}

export default Steps
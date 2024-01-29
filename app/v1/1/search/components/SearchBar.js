"use client"
import React from 'react'

const SearchBar = ({set, handle, get, search}) => {
  return (
    <>

<div className="flex flex-col items-center justify-center md:mt-[28px]">
      <h1 className="text-center text-4xl font-bold mb-8">Find best products for youself</h1>
      <form className="w-full max-w-xl">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input onChange={(e)=> set(e.target.value)} value={search}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search..." required
          />
          <button onClick={handle}  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
            Search
          </button>
        </div>
      </form>
      <div className={`${get ? "hidden" : null  } mt-8`}>
        <h2 className="text-2xl font-bold mb-4">Latest Searches</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div onClick={()=> set('Blue light glasses')} className="bg-white shadow-md p-4 rounded m-2 w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">Blue light glasses</h3>
            <p className="text-gray-600">glasses</p>
          </div>
          <div onClick={()=> set('Massage gun')} className="bg-white shadow-md p-4 rounded m-2 w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">Massage gun</h3>
            <p className="text-gray-600">toys</p>
          </div>
          <div onClick={()=> set('Shirt')} className="bg-white shadow-md p-4 rounded m-2 w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">Shirt</h3>
            <p className="text-gray-600">cloths</p>
          </div>
        </div>
      </div>
    </div>



    </>
  )
}

export default SearchBar
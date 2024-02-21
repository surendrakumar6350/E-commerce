import React, { useRef } from 'react'

const Suggestion = ({e, handlesuggestion}) => {
   const ref = useRef(null);
  return (
    <>
  <div ref={ref} onClick={()=> handlesuggestion(ref.current.innerHTML)} className='h-8 w-full pt-1 cursor-pointer text-sm text-gray-700 border border-teal-500 rounded-sm pl-2'>{e.show.name}</div>
    </>
  )
}

export default Suggestion
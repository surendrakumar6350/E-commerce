import React from 'react'
import E from './E'

const Orders = ({orders, value, setvalue, a}) => {
  return (
    <>
     

      {orders?.map((e)=> {
return <E value={value} a={a} setvalue={setvalue} product={e.products} order={e}/>
    })}

    </>
  )
}

export default Orders
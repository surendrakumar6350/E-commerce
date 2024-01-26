"use client"
import { addaddress, addsteps } from '@/app/redux/remainingSlices/cart'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { AddressSchema } from './AddressSchema'

const Addressform = () => {
    const dispatch = useDispatch();

    const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            secondName: "",
            number: "",
            email: "",
            street: "",
            state: ""
        },
        validationSchema: AddressSchema,
        onSubmit: (values) => {
            dispatch(addaddress(values))
            dispatch(addsteps(3))
        }
      })
    
  return (
    <>
    
<form onSubmit={handleSubmit} className='p-5'> 
<h2 class="text-2xl text-center my-6 font-bold dark:text-white">Billing Address</h2>
    <div className=" grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='firstName'
              type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"  required />
              <p className='text-red text-xs ml-1'>
                    {errors.firstName && touched.firstName ? errors.firstName : null}</p>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input  value={values.secondName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='secondName' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    <p className='text-red text-xs ml-1'>
                    {errors.secondName && touched.secondName ? errors.secondName : null}</p>
        </div>
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input  value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='number' type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="7800003001" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    <p className='text-red text-xs ml-1'>
                    {errors.number && touched.number ? errors.number : null}</p>
        </div>
    
    <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='email' type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    <p className='text-red text-xs ml-1'>
                    {errors.email && touched.email ? errors.email : null}</p>
    </div> 
    <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
        <input  value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='street' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="street, house no, city" required />
                    <p className='text-red text-xs ml-1'>
                    {errors.street && touched.street ? errors.street : null}</p>
    </div> 
    <div>
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
        <input value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='state'  type="text" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rajasthan" required></input>
                    <p className='text-red text-xs ml-1'>
                    {errors.state && touched.state ? errors.state : null}</p>
    </div> 
    </div>
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" checked required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </>
  )
}

export default Addressform
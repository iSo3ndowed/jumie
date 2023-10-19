import React from 'react'
import logo from './images/not found.png'

const Error = () => {
  return (
    <div className='h-[90vh] flex items-center flex-col justify-center font-Heading bg-gray-200'>
        <img src={logo} alt="Error" className='w-[300px] pb-4'/>
        <h1 className='text-2xl capitalize text-red-700  pb-2'>Item not found</h1>
        <p className='text-center'>Sorry, we couldn't find anything. <br />You can try another search or browse our categories</p>
    </div>
  )
}

export default Error
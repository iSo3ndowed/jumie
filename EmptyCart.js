import React from 'react'
import logo from './images/pngwing.com.png'
const EmptyCart = () => {
  return (
    <div className='flex items-center justify-center h-[40vh] flex-col font-Heading'>
        <img src={logo} alt='logo' className='w-[240px] pb-[10px]'/>
        <h1>Your Cart is Empty!</h1>
        <h1>Add something to make me happy</h1>
    </div>
  )
}

export default EmptyCart
import React from 'react'
import {BiPlus, BiMinus} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { cartActions } from './cartSlice/cartSlice'
import toast, { Toaster } from 'react-hot-toast'


const CartItems = ({id, title, price, img, quantity, totalPrice }) => {
  const dispatch = useDispatch()

  const increaseCartItem = () => {
    dispatch(cartActions.addToCart({id, title, price}))
    toast.success('Item Added')
  }
  const decreaseCartItem = () => {
    dispatch(cartActions.removeFromCart(id))
    toast.success('Item Removed')
  }
  

  return (
    <div key={id} className='flex items-center justify-between w-full py-[10px] bg-gray-100 rounded-[7px] mb-3'>
      <div className='flex items-center justify-around w-full'>
        <img src={img} alt={title} className='w-[80px] bg-white p-4 '/>
        <div className='flex flex-col text-sm xl:text-md lg:text-md'>
          <h1>{title}</h1>
        </div>
        <label htmlFor="">${totalPrice}</label>
        <div className='flex items-center flex-col gap-1 p-[3px] border-black rounded-[4px] border-[1px] text-sm xl:text-md lg:text-md'>
          <BiPlus className='cursor-pointer hover:bg-gray-300' onClick={increaseCartItem}/>
          <h1>{quantity}</h1>
          <BiMinus className='cursor-pointer hover:bg-gray-300' onClick={decreaseCartItem}/>
        </div>
      </div>
     </div> 
  )}

export default CartItems
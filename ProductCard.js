import React from 'react'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from './cartSlice/cartSlice'
import toast, { Toaster } from 'react-hot-toast'
import CartItems from './CartItems'



const ProductCard = ({id, img,title,star,prevPrice,price}) => {
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addToCart({id, title, price, prevPrice, img}))
        toast.success('Item Added Successfully')
    }
  return (
    <>
    <Toaster/>
    <div className='flex items-center flex-wrap mb-[15px]'>
        <div className='p-[10px] xl:w-[220px] lg:w-[220px] sm:w-[220px] w-[16rem] flex items-center justify-around flex-col border-2 h-[280px] rounded-[5px] shadow-md'>
            <img src={img} alt={title} className='max-w-[200px] w-[150px] hover:-rotate-45 transition-all hover:scale-105'/>
            <div className='leading-[28px] w-[100%]'>
                <h1 className='text-[16px] pb-1 text-gray-800 font-semibold'>{title}</h1>
                <div className='flex items-center justify-between'>
                    {/* <ul className='flex text-[#E07E1B] gap-3 pb-1'>
                        <li>{star}</li>
                        <li>{star}</li>
                        <li>{star}</li>
                        <li>{star}</li>
                    </ul> */}
                    {/* <h5 className='text-[15px]'>{reviews}</h5> */}
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-row leading-6 gap-2 text-gray-700 text-[17px] font-semibold'>
                        {/* <h3 className='line-through'>${prevPrice}</h3>  */}
                        <h3 className='no-underline'>${price}</h3>
                    </div>
                    <BsFillPlusSquareFill className='cursor-pointer text-[25px] text-[#ff7518] hover:text-black' onClick={addToCart}/>                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductCard
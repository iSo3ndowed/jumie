import React, { useEffect, useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import {GiShoppingCart} from 'react-icons/gi'
import {AiOutlineUserAdd} from 'react-icons/ai'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from './CartItems'
import EmptyCart from './EmptyCart'


const Navbar = ({result, handleClick, handleInputChange, search}) => {
  const [show, setShow] = useState(false)
  const [cartShow, setCartShow] = useState(false)

   const transitionNav = () => {
    if(window.scrollY > 100) {
      setShow(true)
    }else{
      setShow(false)
    }
   }

   useEffect(() => {
    window.addEventListener('scroll', transitionNav)
    return () => window.removeEventListener('scroll',transitionNav)
   },[])

   const quantity = useSelector((state) => state.cart.totalQuantity)
   const cartItems = useSelector((state) => state.cart.itemsList)
  
    let totalCost = 0
    cartItems.forEach((item) => {
     totalCost += item.totalPrice
  })


  return (
    <>
    <div className='flex flex-col w-[80%] py-6 relative xl:left-[9rem] lg:left-[7rem]' >
      <div className={`flex items-center justify-between mb-6 xl:pr-[4rem] ${show && 'fixed xl:left-[18.5rem] transition-all ease-in-out left-[25px] xl:top-[20px] top-0 py-2 bg-white right-[20px] z-50'}`}>
        <input type="text"  placeholder='Search products, brands and categories' className='w-[70%] border-[1px] border-[#FF7518] focus:outline-none p-[10px]' value={search} onChange={handleInputChange}/>
        <div className='flex items-center gap-3 text-[20px]'>
          {/* <MdFavoriteBorder className='cursor-pointer hover:text-[#FF7518]'/> */}
          <div className='flex items-center cursor-pointer' onClick={() => setCartShow(cartShow => !cartShow)}>
            <GiShoppingCart className='hover:text-[#FF7518]'/>
            <span className='bg-[#ff7518] px-[7px] mb-[15px] rounded-xl font-Roboto'>{quantity}</span>
          </div>
          <AiOutlineUserAdd className='cursor-pointer hover:text-[#FF7518]'/>
        </div>
      </div>
      <div className='flex items-center h-[80vh] xl:p-[4rem] lg:p-[4rem] p-[1rem] shadow-sm mr-4 border-2 border-[#FF7518]' id='header-bg'>
        <div>
          <h1 className='uppercase xl:text-[5rem] text-[2.5rem] lg:text-[5rem] tracking-widest font-Heading text-[#ff7518]'>sneakeasy</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae debitis voluptate maiores architecto quasi explicabo optio vel perspiciatis eligendi aut, dolor distinctio excepturi! Enim quia iure libero hic minus.</p>
          <a href="#Product"><button>EXPLORE NOW</button></a>
        </div>
      </div>
      <div className='pt-6'>
        <h1 className='text-[17px] font-semibold'>Recommended</h1>
        <ul className='flex items-center gap-2 overflow-x-scroll'>
          <button value='' title='' onClick={handleClick}>All Products</button>
          <button value='Adidas' title='Adidas' onClick={handleClick}>Adidas</button>
          <button value='Nike' title='Nike' onClick={handleClick}>Nike</button>
          <button value='Puma' title='puma' onClick={handleClick}>Puma</button>
          <button value='Vans' title='Vans' onClick={handleClick}>Vans</button>
          <button value='Reebok' title='Reebok' onClick={handleClick}>Reebok</button>
          <button value='HUSHPUPPIES' title='HUSHPUPPIES' onClick={handleClick}>Hushpuppies</button>
        </ul>
      </div>
      <Products result={result} />
  </div>
  {cartShow && <div className='fixed z-[100] xl:top-0 lg:top-0 top-[5rem] bottom-0 left-0 xl:[35rem] lg:left-[45rem] right-0 p-8 flex items-center flex-col mx-[8px]' id='sidebar'>
    <div className='flex items-center justify-center flex-col w-full'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='flex items-center text-[30px] capitalize font-semibold gap-1 font-Heading'>jumie<GiShoppingCart className='text-[30px] text-[#ff7518]'/></h1>
        <IoMdClose onClick={() => setCartShow(cartShow=> !cartShow)} className='cursor-pointer text-[20px]'/>
      </div>
      <h1 className='text-[25px] py-5 font-Heading'>Your items</h1>
    </div>
    <div className='overflow-y-scroll w-full'>
      {cartItems.length === 0 ? <EmptyCart/> :
      cartItems.map((item) => (
      <CartItems id={item.id} title={item.title} price={item.price} img={item.img} quantity={item.quantity} totalPrice={item.totalPrice} cartShow={cartShow} setCartShow={setCartShow}/>
    ))}</div>
    {cartItems.length === 0 ? '' : <div className='flex items-center'>
        <button className='flex items-center justify-around px-[3rem] py-[15px] gap-10 hover:bg-green-900 text-white font-Poppins hover:text-white'>
          <h1 className='uppercase'>Proceed</h1>
          <p>|</p>
          <label htmlFor="">${totalCost}</label>
        </button>
    </div>}
  </div>}
  </>
  )
}

export default Navbar
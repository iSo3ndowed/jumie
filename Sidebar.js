import React, { useState } from 'react'
import {GiShoppingCart} from 'react-icons/gi'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlinePlusSm, HiOutlineMinusSm} from 'react-icons/hi'


const Sidebar = ({handleChange}) => {
  const [ShowSideBar, setShowSideBar] = useState(false)
  const [ShowDetails, setShowDetails] = useState(false)
  const [ShowPrice, setShowPrice] = useState(false)
  const [ShowColor, setShowColor] = useState(false)
  const [ShowGender, setShowGender] = useState(false)


  return (
    <>
    <BiMenuAltRight className='text-[22px] xl:hidden lg:hidden mt-[2rem] cursor-pointer' onClick={() => setShowSideBar(ShowSideBar => !ShowSideBar)} />
    <div className='w-[13%] h-[100%] fixed flex-col left-[4rem] lg:left-[3rem] border-r-2 py-6 xl:flex lg:flex hidden '>
      <div className=''>
        <h1 className='flex items-center text-[30px] capitalize font-semibold gap-1 font-Heading'>jumie<GiShoppingCart className='text-[30px] text-[#FF7518]'/></h1>
      </div>
      <div className='py-[3rem]'>
        <h1 className='font-semibold pb-2'>Sort by:</h1>
        <div className='flex justify-between pr-2'>
          <h5 className='text-[15px] font-bold pb-2 uppercase'>Categories</h5>
          <h1 onClick={() => setShowDetails(ShowDetails => !ShowDetails)} className='cursor-pointer text-gray-700'>{ShowDetails ? <HiOutlineMinusSm/> : <HiOutlinePlusSm/>}</h1>
        </div>
        {ShowDetails && <ul className='flex flex-col gap-1 pb-4'>
          <label htmlFor="">
            <input type="radio" value='' name="test" onChange={handleChange} />
            <span>All</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='sneakers' title='Sneakers' onChange={handleChange} />
            <span>Sneakers</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='sandals' title='Sandals' onChange={handleChange}/>
            <span>Sandals</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='flats' title='Flats' onChange={handleChange}/>
            <span>Flats</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='heels' title='Heels' onChange={handleChange}/>
            <span>Heels</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='RUNNING' title='RUNNING' onChange={handleChange}/>
            <span>Running</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='FOOTBALL' title='FOOTBALL' onChange={handleChange}/>
            <span>Football</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='CASUAL' title='CASUAL' onChange={handleChange}/>
            <span>Casual</span>
          </label>
        </ul>}
        <hr/>
      </div>
      <div>
        <div className='flex justify-between pr-2'>
          <h5 className='text-[15px] font-bold pb-2 uppercase'>price</h5>
          <h1 onClick={() => setShowPrice(ShowPrice => !ShowPrice)} className='cursor-pointer text-gray-700'>{ShowPrice ? <HiOutlineMinusSm/> : <HiOutlinePlusSm/>}</h1>
        </div>
        {ShowPrice && <ul className='flex flex-col gap-1 pb-4'>
          <label htmlFor="">
            <input type="radio" name="test2" title="$0-$50" value='< 50' onChange={handleChange}/>
            <span>$0 - $50</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test2" title="$50-$100" value='< 100' onChange={handleChange}/>
            <span>$50 - $100</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test2" title="$100-$150" value='< 150' onChange={handleChange}/>
            <span>$100 - $150</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test2" title="Over $150" value='> 200' onChange={handleChange}/>
            <span>Over $150</span>
          </label>
        </ul>}
        <hr/>
      </div>
      <div className='py-[3rem]'>
        <div className='flex justify-between pr-2'>
          <h5 className='text-[15px] font-bold pb-2 uppercase'>Gender</h5>
          <h1 onClick={() => setShowGender(ShowGender => !ShowGender)} className='cursor-pointer text-gray-700'>{ShowGender ? <HiOutlineMinusSm/> : <HiOutlinePlusSm/>}</h1>
        </div>
        {ShowGender && <ul className='flex flex-col gap-1 pb-4'>
          <label htmlFor="">
            <input type="radio" name="test3" title="MEN" value='MEN' onChange={handleChange}/>
            <span>Men</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="WOMEN" value='WOMEN' onChange={handleChange}/>
            <span>Women</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="KIDS" value='KIDS' onChange={handleChange}/>
            <span>Kids</span>
          </label>
        </ul>}
        <hr/>
      </div>
      <div className='pb-[3rem]'>
        <div className='flex justify-between pr-2'>
          <h5 className='text-[15px] font-bold pb-2 uppercase'>Colors</h5>
          <h1 onClick={() => setShowColor(ShowColor => !ShowColor)} className='cursor-pointer text-gray-700'>{ShowColor ? <HiOutlineMinusSm/> : <HiOutlinePlusSm/>}</h1>
        </div>
        {ShowColor && <ul className='flex flex-col gap-1 font-Poppins pb-4'>
          <label htmlFor="">
            <input type="radio" name="test3" title="" value="" color='' onChange={handleChange}/>
            <span>All</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="Black" value="black" color='black' onChange={handleChange}/>
            <span>Black</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="Blue" value="blue" color='blue' onChange={handleChange}/>
            <span>Blue</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="Red" value="red" color='red' onChange={handleChange}/>
            <span>Red</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="White" value="white" color='white' onChange={handleChange}/>
            <span>White</span>
          </label>
        </ul>}
        <hr/>
      </div>
    </div>

    {/* Mobile menu */}

    {ShowSideBar && 
    <div className='fixed left-0 h-[100vh] overflow-y-scroll w-[75%] px-[2rem] py-6 z-[100]' id='sidebar'>
      <div className='flex items-center justify-between'>
        <h1 className='flex items-center text-[28px] capitalize font-semibold gap-1 text-gray-700 font-Heading'>jumie<GiShoppingCart className='text-[30px] text-[#FF7518]'/></h1>
        <AiOutlineClose className='text-[20px] xl:hidden lg:hidden text-gray-700 cursor-pointer hover:text-[#FF7518]' onClick={() => setShowSideBar(ShowSideBar => !ShowSideBar)} />
      </div>
      <div className='py-[3rem] text-gray-700'>
        <h1 className='font-semibold pb-4'>Sort by:</h1>
        <div className='flex justify-between pr-2'>
          <h5 className='text-[15px] font-bold pb-2 uppercase'>Categories</h5>
          <h1 onClick={() => setShowDetails(ShowDetails => !ShowDetails)} className='cursor-pointer text-gray-700'>{ShowDetails ? <HiOutlineMinusSm/> : <HiOutlinePlusSm/>}</h1>
        </div>
        {ShowDetails && <ul className='flex flex-col gap-1 pb-4'>
          <label htmlFor="">
            <input type="radio" value='' name="test" onChange={handleChange} />
            <span>All</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='sneakers' title='Sneakers' onChange={handleChange} />
            <span>Sneakers</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='sandals' title='Sandals' onChange={handleChange}/>
            <span>Sandals</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='flats' title='Flats' onChange={handleChange}/>
            <span>Flats</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='heels' title='Heels' onChange={handleChange}/>
            <span>Heels</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='RUNNING' title='RUNNING' onChange={handleChange}/>
            <span>Running</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='FOOTBALL' title='FOOTBALL' onChange={handleChange}/>
            <span>Football</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test" value='CASUAL' title='CASUAL' onChange={handleChange}/>
            <span>Casual</span>
          </label>
        </ul>}
        <hr/>
      </div>
      <div className='text-gray-700'>
        <div className='flex justify-between pr-2'>
          <h5 className='text-[15px] font-bold pb-2 uppercase'>price</h5>
          <h1 onClick={() => setShowPrice(ShowPrice => !ShowPrice)} className='cursor-pointer text-gray-700'>{ShowPrice ? <HiOutlineMinusSm/> : <HiOutlinePlusSm/>}</h1>
        </div>
        {ShowPrice && <ul className='flex flex-col gap-1 pb-4'>
          <label htmlFor="">
            <input type="radio" name="test2" title="$0 - $50" value='50' onChange={handleChange}/>
            <span>$0 - $50</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test2" title="$50 - $100" value='100' onChange={handleChange}/>
            <span>$50 - $100</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test2" title="$100 - $150" value='150' onChange={handleChange}/>
            <span>$100 - $150</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test2" title="Over $150" value='200' onChange={handleChange}/>
            <span>Over $150</span>
          </label>
        </ul>}
        <hr/>
      </div>
      <div className='py-[3rem]'>
        <div className='flex justify-between pr-2'>
          <h5 className='text-[15px] font-bold pb-2 uppercase'>Gender</h5>
          <h1 onClick={() => setShowGender(ShowGender => !ShowGender)} className='cursor-pointer text-gray-700'>{ShowGender ? <HiOutlineMinusSm/> : <HiOutlinePlusSm/>}</h1>
        </div>
        {ShowGender && <ul className='flex flex-col gap-1 pb-4'>
          <label htmlFor="">
            <input type="radio" name="test3" title="MEN" value='MEN' onChange={handleChange}/>
            <span>Men</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="WOMEN" value='WOMEN' onChange={handleChange}/>
            <span>Women</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="KIDS" value='KIDS' onChange={handleChange}/>
            <span>Kids</span>
          </label>
        </ul>}
        <hr/>
      </div>
      <div className='pb-[3rem] text-gray-700'>
        <div className='flex justify-between pr-2'>
          <h5 className='text-[15px] font-bold pb-2 uppercase'>Colors</h5>
          <h1 onClick={() => setShowColor(ShowColor => !ShowColor)} className='cursor-pointer text-gray-700'>{ShowColor ? <HiOutlineMinusSm/> : <HiOutlinePlusSm/>}</h1>
        </div>
        {ShowColor && <ul className='flex flex-col gap-1 font-Poppins pb-4'>
          <label htmlFor="">
            <input type="radio" name="test3" title="" value="" color='' onChange={handleChange}/>
            <span>All</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="Black" value="black" color='black' onChange={handleChange}/>
            <span>Black</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="Blue" value="blue" color='blue' onChange={handleChange}/>
            <span>Blue</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="Red" value="red" color='red' onChange={handleChange}/>
            <span>Red</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="test3" title="White" value="white" color='white' onChange={handleChange}/>
            <span>White</span>
          </label>
        </ul>}
        <hr/>
      </div>
    </div>}
    </>

  )
}

export default Sidebar
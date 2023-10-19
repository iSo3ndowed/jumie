import React from 'react'
import Error from './Error';


const Products = ({result}) => {
  console.log(result);
  return (
    <>
      {result.length === 0 ? <Error/> : <div className='flex gap-4 flex-wrap py-10 xl:justify-start lg:justify-start justify-center' id='Product'>{result}</div>}
    </>
  )
}

export default Products
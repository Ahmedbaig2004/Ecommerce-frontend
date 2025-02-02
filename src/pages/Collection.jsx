import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import assets from '../assets/assets';

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showfilter,setshowfilter]=useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t-1 pt-10 '>
      <div className='min-w-60'>
        <p  onClick={()=>setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img   className={`h-3 sm:hidden ${showfilter ? 'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 my-4 ${showfilter ? '' :'hidden'} sm:block `} >
        <p className='mb-3 text-sm font-medium'> CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light'>
          <p className='flex gap-2'>
            <input className='w-3 'type="checkbox" value="MEN" />MEN
          </p>
          <p className='flex gap-2'>
            <input className='w-3 'type="checkbox" value="WOMEN" />WOMEN
          </p>
          <p className='flex gap-2'>
            <input className='w-3 'type="checkbox" value="KIDS" />KIDS
          </p>
        </div>
        
        

      </div>
      {/* {SUBCOLLECTION} */}
      <div className={`border border-gray-300 pl-5 py-3 my-4 ${showfilter ? '' :'hidden'} sm:block`} >
        <p className='mb-3 text-sm font-medium'> CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light'>
          <p className='flex gap-2'>
            <input className='w-3 'type="checkbox" value="MEN" />MEN
          </p>
          <p className='flex gap-2'>
            <input className='w-3 'type="checkbox" value="WOMEN" />WOMEN
          </p>
          <p className='flex gap-2'>
            <input className='w-3 'type="checkbox" value="KIDS" />KIDS
          </p>
        </div>
        
        

      </div>
        
      </div>
      
      
    </div>
  )
}

export default Collection

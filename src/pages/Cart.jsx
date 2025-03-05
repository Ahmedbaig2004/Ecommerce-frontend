import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title.jsx'
import assets from '../assets/assets';
import CartTotal from '../components/CartTotal.jsx';

const Cart = () => {
  const {products,currency,cartItems,updatequantity} = useContext(ShopContext);
  const [cartdata,setcartdata] = useState([]);

  useEffect(()=>{
    let tempData = [];
      for(const items in cartItems)
      {
        for(const size in cartItems[items])
        {
          if(cartItems[items][size]>0)
          {
            tempData.push({
              _id:items,
              size:size,
              quantity:cartItems[items][size]



            })
          }
        }
      }
      setcartdata(tempData)
      
      
      
  },[cartItems])
  console.log(cartdata);
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
    
    
   
    <div>
      {
      cartdata.map((item,index)=>{
        const productdata=products.find((product)=>product._id===item._id);
        return(
          <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
            <div className='flex items-start gap-6' >
              <img className='w-16 sm:w-20' src={productdata.image[0]} alt="" />
              <div>
                <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                <p>{currency}{productdata.price}</p>
                <p className='px-2 sm:px-3 border bg-slate-50'>{item.size}</p>
              </div>
              </div>
              

            </div>
            <input onChange={(e)=>updatequantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-12 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
            <img onClick={()=>updatequantity(item._id,item.size,0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />

          </div>
        )
      })
    }
    </div>
    <div className='flex justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
        <CartTotal/>

      </div>

    </div>
    </div>
    
  )
}

export default Cart

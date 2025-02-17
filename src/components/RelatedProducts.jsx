import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

const RelatedProducts = ({category,subcategory}) => {
    const [relatedproducts,setrelatedproducts] =useState([]);
    const {products} = useContext(ShopContext);

    useEffect(()=>{
        if (products.length>0){
            let productcopy=products.slice()
            productcopy.filter((item)=>(item.category===category))
            productcopy.filter((item)=>(item.subcategory===subcategory));
            setrelatedproducts(productcopy.slice(0,5))
        }
        

    },[products])

  return (
    


    <div>

      
    </div>
  )
}

export default RelatedProducts

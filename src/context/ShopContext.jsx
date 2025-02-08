import { createContext, useState } from "react";
import {products} from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
    const currency ='$'
    const deliveryfee=10
    const[search,setsearch]=useState('');
    const[showsearch,setshowsearch]=useState(false);
    const value={
            currency,deliveryfee,products,search,setsearch,showsearch,setshowsearch

        
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
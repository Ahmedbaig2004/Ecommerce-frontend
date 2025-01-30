import { createContext } from "react";
import {products} from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
    const currency ='$'
    const deliveryfee=10
    const value={
            currency,deliveryfee,products

        
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
import React ,{createContext, useContext, useEffect} from 'react'
import { dummyProducts } from '@/public/data'
import { useRouter } from 'next/navigation'
import  { useState } from "react";

 const AppContext = createContext()
const AppContextProvider = ({children}) => {
    const currency = "$"
    const [products, setProducts] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const router = useRouter()

    useEffect(()=>{
     try {
        setProducts(dummyProducts)

     } catch(error) {
        console.log(error)
     }
    },[])
        const value = {
         //we can use each and every component of the application
         currency,
        products,
        subTotal,
        setSubTotal,
        totalAmount,
        setTotalAmount,
        router
        }
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext)
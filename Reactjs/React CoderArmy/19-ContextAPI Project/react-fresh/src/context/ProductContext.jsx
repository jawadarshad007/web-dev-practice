import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { getAllProductData} from '../api/ProductApi';


export const ProductDataContext = createContext()

const ProductContext = (props) => {
  const [productData,setProductData] = useState([]);



  useEffect(()=>{
  
  const setData =async ()=>{
    const data = await getAllProductData()
    setProductData(data)
  }

  setData()
  },[])




  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
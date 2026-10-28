import axios from "axios"

   
   
   
export   const getAllProductData =async ()=>{
    const responce = await axios.get(`https://fakestoreapi.com/products`)
      return responce.data;

  }



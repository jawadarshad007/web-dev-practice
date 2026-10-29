import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);

    // To find the id of the product from the dynamic URL
  const param = useParams();
  console.log(param.productId)

    let selectedProduct = ''
    if(productData.length > 0){
      selectedProduct = productData.find((elem=> param.productId == elem.id))
    }
  

  return (
    <div>
      <h1>ProductDetails</h1>
      <div>
              <img src={selectedProduct.image} alt="productImage" />
              <h2>{selectedProduct.title}</h2>
              <h5 className='price'>${selectedProduct.price}</h5>
       </div>  
    </div>
  )
}

export default ProductDetails
import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
   const productData =  useContext(ProductDataContext)

   let  renderData = "Loading..."

   if(productData.length > 0){
    renderData =  productData.map((elem , idx)=>{
        return <Link to={`/products/${elem.id}`} target='_blank' key={idx} className='product'>
            <div>
              <img src={elem.image} alt="productImage" />
              <h2>{elem.title}</h2>
            </div>
                    </Link>
      })
   }


  return (
    <div>
      <h1>Products</h1>
      
 <div className='allProducts'>
       {renderData}

    </div>
    </div>
  )
}

export default Products
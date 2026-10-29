import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails';
const App = () => {


  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:productId' element={<ProductDetails/>} />
    </Routes>   
    </div>
   
  )
}

export default App
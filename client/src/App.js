import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react'
import commerce from './lib/commerce';
// pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail'
import Payment from './pages/Payment'
import Completion from './pages/Completion';
// components
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {


  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  

  useEffect(() => {

    fetchProducts();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop products={products} />} />
          <Route path="/shop/:productId" element={<ProductDetail products={products}/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/completion' element={<Completion />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

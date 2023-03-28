import Header from './Component/Header';
import './App.css';
import data from "./Component/Items/Data/Data"
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Component/RoutesPath/Router'
import React, { useState } from 'react'

function App() {
  const {productItems} = data;
  const [cartItems,setCartItems] = useState([])


const addProduct = (product) =>{
     const productExist = cartItems.find((item) => item.id=== product.id)
     if(productExist){
       setCartItems(cartItems.map((item)=>item.id===product.id ? 
       {...productExist,quantity:productExist.quantity + 1} : item))
     }
    //  {else{
    //        setCartItems([...cartItems,{...product,quantity:1}])
    //        //alert('Item Added to Cart')
    //  }}
  }

  const addProduct1 = (product) => {
    const productExist = cartItems.find((item) => item.id=== product.id)
     if(!productExist){
      setCartItems([...cartItems,{...product,quantity:1}])
      //alert('Item Added to Cart')
    }
    else{
      setCartItems(cartItems.map((item)=>item.id===product.id ? 
      {...productExist,quantity:productExist.quantity + 1} : item))
    }
    //alert('Item Added to cart')
  }



const removeProduct = (product) =>{
  const productExist = cartItems.find((item) => item.id=== product.id)
  if(productExist.quantity === 1){
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  }
  else{
    setCartItems(cartItems.map((item) => item.id === product.id ? 
    {...productExist,quantity:productExist.quantity-1 } :item
    ))
  }
}

const clearCart = () => {
   setCartItems([]);
}

  return (
    <div className="App">
      <Router>
            <Header cartItems={cartItems}/>
            <Routes productItems={productItems} cartItems={cartItems} addProduct={addProduct} addProduct1={addProduct1} removeProduct={removeProduct} clearCart={clearCart}></Routes>
      </Router>
     
    </div>
  );
}

export default App;

import React from 'react'
import { Route , Switch} from 'react-router-dom'
import Products from '../Products/Product'
import Offers from '../Offers'
import Cart from '../Cart'
import NotFound from '../NotFound'


const Router = ({productItems,cartItems,addProduct,removeProduct,clearCart,addProduct1}) => {
  return (
    <div>
         <Switch>
            <Route exact path='/'> 
                <Offers></Offers>
            </Route>

           <Route exact path='/shopping'>
              <Products productItems={productItems} addProduct={addProduct} addProduct1={addProduct1} cartItems={cartItems}></Products>
           </Route>  
           
           <Route exact path='/cart'>
               <Cart cartItems={cartItems} addProduct={addProduct} removeProduct={removeProduct} clearCart={clearCart}></Cart>
           </Route>
           
           <Route path='*'>
              <NotFound></NotFound>
           </Route>
         </Switch>
         
    </div>
  )
}

export default Router

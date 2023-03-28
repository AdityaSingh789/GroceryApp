import React from 'react'
import './Cart.css'
const Cart = ({cartItems,addProduct,removeProduct,clearCart}) => {

  const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price,0)

  return (
      <div className='cart-items'>
          <h2 className='cart-items-header'>Cart Items</h2>

          <div className='clear-cart'>
              <div className='quantity'>Quantity</div>
             {cartItems.length >= 1 &&(
                <button className='clear-cart-button' onClick={clearCart}> Clear Cart</button>
             )}
             
          </div>

          {cartItems.length === 0 && (<div className='cart-items-empty'>
               <div>No items are added</div>
          </div>)}

          <div>
              {cartItems.map((item)=>(
                <div key={item.id} className='cart-items-list'>
                    <img className='cart-items-image' src={item.image} alt={item.name}/>
                    <div className='cart-items-name'>{item.name}</div>
                    <div className="cart-items-function">
                        <button className='cart-items-add' onClick={()=>addProduct(item)}>+</button>
                        <button className='cart-items-remove' onClick={()=>removeProduct(item)}>-</button>
                    </div>
                    
                    <div className='cart-items-price'>
                        {item.quantity}  * &#8377;{item.price} 
                    </div>              
                </div>             
              ))}
          </div>
          <div className='cart-items-total-price-name'>
            Total Price:
            <div className='cart-items-total-price'> &#8377; {totalPrice}</div>
          </div>
      </div>
  )
}

export default Cart


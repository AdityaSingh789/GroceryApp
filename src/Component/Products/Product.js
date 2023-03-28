import React from 'react'
import './Product.css'

const Product = ({productItems,addProduct,cartItems,addProduct1}) => {
  
  return (
         <div className="products">
            {productItems.map((productItem) => (
              <div className='card'>
                    <div>
                      <img className='product-image' src={productItem.image} alt={productItem.name}></img>
                    </div>
                    <div>
                       <h3 className='product-name'>{productItem.name}</h3>
                    </div>
                    
                     <div className='product-price'>&#8377; {productItem.price}</div>
                     <div className='parent'>  
                           <div className='child'><button className='product-add-button' onClick={() => addProduct1(productItem)}>Add to Cart</button></div>  
                           <div className='child'>
                                 <span>
                                      {cartItems.map((cartItem) =>(<h5 className='colorBack'>{cartItem.id === productItem.id ? cartItem.quantity : ''}</h5>))}                            
                                 </span>
                            </div> 
                                               
                     </div>
                                          
                     
              </div>
            ))}
                     
         </div>
         
  )
}

export default Product

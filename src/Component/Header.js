import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = ({cartItems}) => {
  return (
       <header className='header'>
           <div>
             <h1 className='logo'>
                 Grocery Store
                 {/* <Link to='/' className='logo'>Grocery Store</Link> */}
             </h1>
           </div >
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to='/shopping'>Go Shopping</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to='/cart' className='cart'><i class='fas fa-shopping-cart'/>
                        <span className='cart-quantity'>
                            {cartItems.length === 0 ? '' : cartItems.length}
                        </span>
                        </Link>
                        
                    </li>
                </ul>
            </div>
       </header>

  )
}

export default Header

import React from 'react'
import './Offers.css';
const Offers = () => {
  return (
    <div className='offers'>

          <div class="col-md-4">
          <marquee className='marque'>
                  Make ur chores easy at home..
          </marquee>
               <p className='text'>Upto 35% off On Elctronic</p>
               <img className='offer-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdmryH_lAIG61tpQfjaq6K-DhVAij6CQ_-un2Ffpw138EDNPt5kZFTHKnl29x0gwMASs&usqp=CAU'></img>
          </div>

          <div class="col-md-4">
          <marquee className='marque'>
                  Get Laptop at low Price and Start developing..
          </marquee>
               <p className='text'>50% off on Laptop</p>
               <img className='offer-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacp0PN1GO29UURbZaPtoZUdlwJig33pf5dw&usqp=CAU'></img>
          </div>

          <div class="col-md-4">
          <marquee className='marque'>
                  Clothing Sale upto 40% off on shopping.
          </marquee>
                <p className='text'>Buy 1 Get 1 Free on Clothing</p>
                <img className='offer-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZhWdaVgbzu2OUYQMP4rHhsqEprOYSkM8Jw&usqp=CAU'></img>
          </div>
    </div>
  )
}

export default Offers

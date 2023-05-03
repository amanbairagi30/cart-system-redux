import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';
import CartItem from './CartItem'

const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartItems , total , amount} = useSelector((store)=>store.cart);

  if(amount < 1){
    return <section className="cart">
        <h2>Your Cart </h2>
        <h4 className="empty-cart">is currently empty</h4>
    </section>
  }
  return (
    <section className='cart'>
      <header>
        <h2>
            Your Cart
        </h2>
        {cartItems.map((item)=>{
            return <CartItem key={item.id} {...item} />
        })}
      </header>
      <footer>
        <hr />
        <div className="cart-total">
            <h4>
                total <span>&#8377;{total}</span>
            </h4>
        </div>
        <button className="btn clear-btn" 
        onClick={()=>dispatch(openModal())}>Clear Cart</button>
      </footer>
    </section>
  )
}

export default CartContainer

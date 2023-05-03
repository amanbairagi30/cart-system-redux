import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';
import { increase , decrease } from '../features/cart/cartSlice';
import {ChevronDown , ChevronUp} from "./icons"

const CartItem = ({id,title,price,img,amount}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>
          {title}
        </h4>
          <h4 className="item-price">&#8377;{price}</h4>
          <button className="remove-btn"
          onClick={()=>dispatch(removeItem(id))}>Remove</button>
        
      </div>
        <div>
          <button className="amount-btn" onClick={()=>dispatch(increase({id}))}>
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn" onClick={()=>
            {
            if(amount == 1 ){
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({id}))}}>
            <ChevronDown />
          </button>
        </div>
    </article>

  )
}

export default CartItem

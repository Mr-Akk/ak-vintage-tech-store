import React,{useContext} from "react";
import {FaAngleUp , FaAngleDown} from 'react-icons/fa'
import {CartContext} from '../../context/cart';


export default function CartItem(props) {
 const context = useContext(CartContext);
  let { removeitem , addcount , decreasecount } = context;

  let {id ,title , image , price , amount} = props;
  return <article className="cart-item">
        <img src={image} alt=""/>
        <div>
          <h4>{title}</h4>
          <h5>${price}</h5>
          <button type="button" className="cart-btn remove-btn" onClick={()=>removeitem(id)}>remove</button>
        </div>
        <div>
        <button type="button" className="cart-btn amount-btn" onClick={()=>addcount(id)}> <FaAngleUp /></button>
          <p>{amount}</p>
          <button type="button" className="cart-btn amount-btn" onClick={()=>decreasecount(id,amount)}> <FaAngleDown/></button>
        </div>
  </article>;
}

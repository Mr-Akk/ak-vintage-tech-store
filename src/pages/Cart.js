import React,{useContext} from "react";
import {CartContext} from '../context/cart';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import {Link} from 'react-router-dom';
import {UserContext} from '../context/user';

export default function Cart() {
  let user = false;
  let {userobj} = useContext(UserContext);
  const context = useContext(CartContext);
  let {cart , total} = context;
 if (cart.length === 0){
   return <EmptyCart />
 }else{
   return <section className="cart-items section">
   <h2>Your Cart</h2>
      {cart.map( item => <CartItem key={item.id} {...item} />)}
      <h2>Total : ${total}</h2>
      {userobj.token ? <Link to='/checkout' className="btn btn-primary btn-block">Checkout</Link> : <Link to='/login' className="btn btn-primary btn-block">Login</Link>} 
   </section>
 }
}

import React, { useContext } from "react";
import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';
import CartLink from '../components/Cart/CartLink';
import {UserContext} from '../context/user';
import LoginLink from '../components/LoginLink';
import Login from "../pages/Login";

export default function Header() {
  let {userobj} = useContext(UserContext);

  return <section className="header">
  <img src={logo} alt="" className="logo" />
  <ul>
    <div>
      <li> <Link to="/">Home</Link>  </li>
      <li> <Link to="/about">About</Link>  </li>
      <li> <Link to="/products">Products</Link>  </li>
      {userobj.token ?<li> <Link to="/checkout">Checkout</Link>  </li>  : null}
    </div>
    <div>
            <CartLink />
            <LoginLink />

    </div>
  </ul>

  </section>;
}

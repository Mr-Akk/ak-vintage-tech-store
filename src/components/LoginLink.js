import React, { useState,useContext } from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import {Link} from 'react-router-dom';

export default function LoginLink() {
  let {userobj , logoutuser} = useContext(UserContext);
  let {clearcart} = useContext(CartContext);
  if (userobj.token){
   return  <button  className="login-btn"
   onClick={()=>{
      logoutuser();
      clearcart();
    }}> Log Out</button>
  }

  return <Link to='/login'>Log in</Link>
}

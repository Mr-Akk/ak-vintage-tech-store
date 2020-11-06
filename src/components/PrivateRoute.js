import React, { useContext } from "react";
import { UserContext } from "../context/user";
import {Redirect, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
export default function PrivateRoute({children , ...rest}) {
  let {userobj} = useContext(UserContext);
  return <Route {...rest} render={()=>userobj.token ? children : <Redirect to='/login'></Redirect>} ></Route>
}

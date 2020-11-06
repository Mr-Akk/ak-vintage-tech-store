import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Productprovider from './context/products';
import CartProvider from './context/cart';
import UserProvider from './context/user';

ReactDOM.render(
<Productprovider>
<CartProvider>
<UserProvider>
    <App/>
</UserProvider>
</CartProvider>
</Productprovider>
            

, document.getElementById("root"));

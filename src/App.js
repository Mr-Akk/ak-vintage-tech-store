import React from "react";
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Header from './components/Header';


// ************* pages ************
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';
import Alert from './components/Alert';
import Checkout from './pages/Checkout';
import PrivateRoute from './components/PrivateRoute';

 export default function App() {
  return <BrowserRouter>
  <Alert />
  <Header />
  <Switch>
  <Route exact path='/' component={Home}></Route>
  <Route exact path='/about' component={About}></Route>
  <Route exact path='/products' component={Products}></Route>
  <Route  path='/products/:id' component={ProductDetails}></Route>
  <Route exact path='/login' component={Login}></Route>
  <Route exact path='/cart' component={Cart}></Route>
  <PrivateRoute path='/checkout'>
      <Checkout/>
  </PrivateRoute>
  <Route exact path='*' component={Error}></Route>
  </Switch>
  </BrowserRouter>
  ;
}

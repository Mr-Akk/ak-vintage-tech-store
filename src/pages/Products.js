import React from "react";
import  {useContext} from 'react';
import {MyContext} from '../context/products';
import Loading from '../components/Loading';
import Productlist from '../components/Products/ProductList';

export default function Products() {
  const {loading , allProducts } = useContext(MyContext)
  if (loading){
    return <Loading />
  }

  return <Productlist title="Our Products" products={allProducts}/>;
}

import React from "react";
import Products from "../../pages/Products";
import Product from './Product';

export default function ProductList(props) {
  let {title , products} = props
  return <section className="section">
      <h1 className="section-title">{title}</h1>
      <div className="products-center">
          {products.map( item => <Product key={item.id} {...item} />)}
      </div>
      
  </section>
  ;
}

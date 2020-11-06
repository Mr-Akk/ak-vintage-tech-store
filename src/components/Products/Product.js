import React from "react";
import {Link} from 'react-router-dom';

export default function Product(props) {
  let {id , title , price ,image} = props;
  let img = image[0].url;
  return <div className="product">
  <div className="img-container">
    <img src={img} alt=""/>
    <Link to={`/products/${id}`} className="product-link btn btn-primary">Details</Link>
  </div>
<div className="product-footer">
      <p className='product-title'>{title} </p>
      <p className='product-price'>${price} </p>

    </div>
  </div>;
}

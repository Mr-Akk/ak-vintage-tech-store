import React,{useContext} from "react";
import {useParams , useHistory} from 'react-router-dom';
import {MyContext} from '../context/products';
import {CartContext} from '../components/../context/cart';

import Loading from '../components/Loading';

export default function ProductDetails() {
  let {id} = useParams();
  let history = useHistory();
  let {allProducts} = useContext(MyContext);
  let {addtocart} = useContext(CartContext);
  let reqData = allProducts.filter( item => item.id == id);
 if (allProducts.length == 0){
   return <Loading />
 }
 else{
   let {image, title,price,description} = reqData[0];
   let img = image.url;
   return <section className="single-product">
   <img src={img} alt="" className="single-product-image"/>
   <article>
     <h1>{title}</h1>
     <h2>{price}</h2>
     <p>{description}</p>
     <button className="btn btn-primary btn-block" onClick={()=>{
       
      addtocart(reqData[0]);
      history.push('/cart')
     }}>add to cart</button>
   </article>


   </section>
 }
    
}

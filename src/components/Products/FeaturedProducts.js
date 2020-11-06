import React from "react";
import Loading from "../Loading";
import Productlist from '../Products/ProductList';

export default function FeaturedProducts(props) {
  let {featuredProducts , loading} = props;
  if (loading){
    return <Loading />
  }
  return <section className="section">
        <Productlist title="Featured Products" products = {featuredProducts} />
</section>;
}

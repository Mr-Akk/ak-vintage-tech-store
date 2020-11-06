import React , {useContext} from "react";
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import {MyContext} from '../context/products';
import Loading from '../components/Loading';
import FeaturedProducts from '../components/Products/FeaturedProducts';

export default function Home() {
  const context = useContext(MyContext);
  let {loading  , featuredProducts} = context;
  return (
    <>
    <Hero>
      <Link to='/products' className=" btn-white ">Our Products</Link>
    </Hero>
    {loading? <Loading /> : <FeaturedProducts featuredProducts = {featuredProducts}
    /> }
    </>
  );
}

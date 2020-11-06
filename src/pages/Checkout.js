import React, { useContext, useState } from "react";
import EmptyCart from '../components/Cart/EmptyCart';
import { CartContext } from "../context/cart";
import {CardElement , StripeProvider , Elements , injectStripe } from 'react-stripe-elements';
import { UserContext } from "../context/user";
import axios from 'axios';
import url from '../utils/URL';
import { useHistory } from "react-router-dom";
import SubmitOrder from '../strapi/submitOrder';

function Checkout(props) {
  let {cart , total , clearcart } = useContext(CartContext);
  let {setAlert , userobj}  = useContext(UserContext);
  let [name , setname] = useState('');
  let [showerror , setshowerror] = useState({show : false , msg : ""})
  let history = useHistory();

  const SubmitOrder = (props) => {
   setAlert({show : true , msg : "Placing Order...Please wait"})
    axios.post(`${url}/orders`,props,{
        headers:{
            Authorization : `Bearer ${props.userToken}`
        }
    }).then( response =>{
        setAlert({show : true , msg : "Your order placed Successfully"});
        clearcart();
        history.push('/');
    })
    .catch( err =>{
        setAlert({show : true , type : "danger" , msg : "Somwthing went wrong!Please try again"})
        console.log(err.message);
    })
   
}
  let submitHandler = (event) =>{
    setAlert({show : true , msg : "Submitting order..."})
    event.preventDefault();
    const response = props.stripe.createToken().then( response => {
      if (response.error){
              setAlert({show : true , type : "danger" , msg : `Something wrong ${userobj.username}! Give correct details `})
               setshowerror({show : true , msg : response.error.message})
              console.log(response.error.message,"response")
              }
      else{
        let {token} = response;
        const {id} = token;
        const orderObj = {
          name,
          total,
          items : cart,
          stripeTokenId : id,
          userToken : userobj.token,
          // address: {city : "$city",
          //  country : "$country", 
          //  line1 : "$address", 
          //  lne2 : "aaaaaa", 
          //  postal_code : "$zipCode",
          //   state : "$state"
          // }


        }
        console.log(token);
        setAlert({show : false})
        SubmitOrder(orderObj);

      }})
  }
  if (cart.length < 1){
    return <EmptyCart />
  }
  return <section className="section form">
    <h2 className="section-title">
      Checkout
    </h2>
    <form className="chekout-form" onSubmit={submitHandler}>
      <h3>Order total : <span>$ {total}</span></h3>
      <div className="form-control">
        <label >name</label>
        <input type="text" value={name} onChange={(event)=>setname(event.target.value)} />

      </div>
      <div className="stripe-input">
        <label >Credit or Debit card</label>
        <p className="stripe-info">
          Test usinf this credit card : <span>4242 4242 4242 4242</span>
          <br/>
        enter any 5 digits for the zip
        <br/>
        enter any three digit for CVV
        </p>
        </div>
        <CardElement className="card-element"></CardElement>
        {showerror ? <p className="form-empty">{showerror.msg}</p>: null}
        {name ? null : <p className="form-empty">Please fill out thr name field </p>}
        {name ? <button className="btn btn-primary btn-block" onClick={submitHandler}>submit</button> : null}
    </form>
  </section>
}

const CardForm = injectStripe(Checkout);

const StripeWrapper = () =>{
  return <StripeProvider apiKey="pk_test_51HkPAmKKJIsxqnv8idFbZ5niMcF1xzOyEVqkqscHkf9o7iHVGoTAbnzeKVC7P36pgqFEtLquKopub3oECiXVycw900I1CMFNu1">
<Elements>
  <CardForm></CardForm>
</Elements>
  </StripeProvider>
}

export default StripeWrapper;
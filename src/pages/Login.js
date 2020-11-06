import React, { useContext, useState , useEffect} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import url from '../utils/URL';
import {UserContext} from '../context/user';
export default function Login() {
  let history = useHistory();
let {loginuser , setAlert , alert} = useContext(UserContext);
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [username , setUsername] = useState('');
  const [issignin , setsignin] = useState(false);


    useEffect(() => {
      !issignin ? setUsername('') : setUsername('default');
    }
    , [issignin]);

   let submitHandler = (event)=>{
     setAlert({show : true , msg : "processing...!Please wait"})
      event.preventDefault();
      if (issignin){
          axios.post(`${url}/auth/local`,{
            identifier : email,
            password
          }).then(response => {
            // console.log(response , "from login");
            let token = response.data.jwt;
            let curusername = response.data.user.username;
            loginuser({username : curusername , token})
            // console.log(`Welcome ${curusername} . Keep Shopping!`)
            setAlert({show : true , msg:`${curusername} Enjoy Shopping`})
            history.push('/products')
      })
      .catch(err => {
        setAlert({show : true , msg:`Incorrect details!Please try again` , type : "danger"})
        console.log(err,"error da")
      })

      }else {
          axios.post(`${url}/auth/local/register`,{
            username,email,password
          })
          .then(response => {

            let token = response.data.jwt;
            let curusername = response.data.user.username;
            // console.log(response,"from login");
            loginuser({username : curusername , token})
            // console.log(token , curusername);
            setAlert({show : true , msg:`${curusername} Enjoy Shopping`})
            history.push('/products')
          })
          .catch( err => {
            setAlert({show : true , msg:`Username already exits! try different` , type : "danger"})
            console.log("Some error Try again")
          })
      }
   }
   
   

  
  let fillout = !email || !password || !username ;
  let heading = "Sign in";
   
  if(!issignin){
     heading = "Register here"
   }
  
  
  return <section className="form section">
<h2 className="section-title">{heading}</h2>
<form onSubmit={submitHandler} className="login-form">
  <div className="form-control">
    <label>
      email
    </label>
    <input type="email" value={email} onChange={(event)=> setEmail(event.target.value)} />
  </div>
  <div className="form-control">
    <label>
      password
    </label>
    <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
  </div>
  {!issignin ? <div className="form-control">
    <label>
      username
    </label>
    <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)} />
  </div> : null}
  {fillout ? <p className="form-empty">
    Please fill out all fields
  </p> : null}
  {alert.show ? null : <button type="submit" className="btn btn-block btn-primary">Submit </button>}
  <p className="register-link">
    {issignin ? "already a member" : "need to regiter" }
    <button type="button" onClick={()=>setsignin(!issignin)}>click here</button>
  </p>
</form>

  </section>;
}

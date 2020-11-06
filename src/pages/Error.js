import React from "react";
import {Link} from 'react-router-dom'


export default function Error() {
  return<section className="error-page">
  <div className="error-container">
    <h1>Oops! It's a dead end</h1>
      <Link to='/' className="btn-primary" >Back Home</Link>
      </div>
  </section>;
}

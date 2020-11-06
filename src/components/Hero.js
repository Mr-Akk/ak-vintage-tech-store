import React from "react";

export default function Hero(props) {
  return(
    <section className="hero">
      <div className="banner">
        <h1>Eat , Code , sleep </h1>
        <p>Be water</p>
        {props.children}
      </div>
    </section>
  );
}

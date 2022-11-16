import React from "react";
import "./Heading.css";
import logo from "../images/logo.svg";

export default function Heading() {
  return (
    <div className="heading">
      <div className="heading-text">
        <p>My Balance</p>
        <h2>$921.48</h2>
      </div>
      <div className="heading-logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

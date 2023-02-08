import React from "react";
import mobileImage from "../images/image-web-3-mobile.jpg";
import desktopImage from "../images/image-web-3-desktop.jpg";
import "./Featured.css";

export default function Featured() {
  return (
    <div>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage}></source>
        <img
          src={mobileImage}
          alt="colorful building blocks"
          className="featured-img"
        ></img>
      </picture>
      <h2>The Bright Future of Web 3.0?</h2>
      <p className="featured-text">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="featured-btn">READ MORE</button>
    </div>
  );
}

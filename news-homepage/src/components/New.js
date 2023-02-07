import React from "react";
import mobileImage from "../images/image-web-3-mobile.jpg";
import desktopImage from "../images/image-web-3-desktop.jpg";

export default function New() {
  return (
    <div>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage}></source>
        <img src={mobileImage} alt="colorful shapes"></img>
      </picture>
    </div>
  );
}

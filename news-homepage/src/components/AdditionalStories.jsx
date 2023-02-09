import React from "react";
import "./AdditionalStories.css";
import pic1 from "../images/image-retro-pcs.jpg";
import pic2 from "../images/image-top-laptops.jpg";
import pic3 from "../images/image-gaming-growth.jpg";

export default function AdditionalStories() {
  return (
    <div className="additional-stories">
      <div className="stories story-1">
        <div className="story-img first-half">
          <picture>
            <img src={pic1} alt="" className="story-img" />
          </picture>
        </div>
        <div className="story-content">
          <h2>01</h2>
          <h3 className="story-title">Reviving Retro PCs</h3>
          <p className="story-text">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="stories story-1">
        <div className="story-img first-half">
          <picture>
            <img src={pic2} alt="" className="story-img" />
          </picture>
        </div>
        <div className="story-content">
          <h2>02</h2>
          <h3 className="story-title">Top 10 Laptops of 2022</h3>
          <p className="story-text">
            Our best pics for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="stories story-1">
        <div className="story-img first-half">
          <picture>
            <img src={pic3} alt="" className="story-img" />
          </picture>
        </div>
        <div className="story-content">
          <h2>03</h2>
          <h3 className="story-title">The Growth of Gaming</h3>
          <p className="story-text">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

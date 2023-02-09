import React from "react";
import "./New.css";

export default function New() {
  return (
    <div className="news-section">
      <h3 className="new-title">New</h3>
      <div className="story">
        <h4 className="margin-btm">Hydrogen VS Electric Cars</h4>
        <p className="story-text">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <div className="story-border"></div>
      <div className="story">
        <h4 className="margin-btm">The Downsides of AI Artistry</h4>
        <p className="story-text ">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className="story-border"></div>
      <div className="story">
        <h4 className="margin-btm">Is VC Funding Drying Up?</h4>
        <p className="story-text">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}

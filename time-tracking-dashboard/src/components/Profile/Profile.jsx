import React from "react";
import jeremy from "../../images/image-jeremy.png";
import "./Profile.css";

export default function Profile() {
  const user = { name: "Jeremy Robson" };

  return (
    <div className="user-container">
      <div className="user-display">
        <img src={jeremy} alt="headshot" id="profile-img" />
        <div className="profile-info">
          <p>Report for</p>
          <h1>{user.name}</h1>
        </div>
      </div>
      <div className="nav">
        <div>Daily</div>
        <div className="">Weekly</div>
        <div>Monthly</div>
      </div>
    </div>
  );
}

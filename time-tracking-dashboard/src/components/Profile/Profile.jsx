import React from "react";
import jeremy from "../../images/image-jeremy.png";
import "./Profile.css";

export default function Profile(props) {
  const user = { name: "Jeremy Robson" };

  return (
    <div className="user-container">
      <div className="user-display">
        <div className="img-holder">
          <img src={jeremy} alt="headshot" id="profile-img" />
          <div className="img-border"></div>
        </div>
        <div className="profile-info">
          <p>Report for</p>
          <h1>{user.name}</h1>
        </div>
      </div>
      <div className="nav">
        <div onClick={props.setDaily}>Daily</div>
        <div onClick={props.setWeekly} className="">
          Weekly
        </div>
        <div onClick={props.setMonthly}>Monthly</div>
      </div>
    </div>
  );
}

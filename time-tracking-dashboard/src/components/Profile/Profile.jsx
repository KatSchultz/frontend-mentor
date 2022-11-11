import React from "react";
import jeremy from "../../images/image-jeremy.png";
import "./Profile.css";

export default function Profile(props) {
  const user = { name: "Jeremy Robson" };
  let dailyStyle;
  let weeklyStyle;
  let monthlyStyle;

  if (props.timePeriod === "daily") {
    dailyStyle = {
      color: "hsl(236, 100%, 87%)",
    };
  }

  if (props.timePeriod === "weekly") {
    weeklyStyle = {
      color: "hsl(236, 100%, 87%)",
    };
  }

  if (props.timePeriod === "monthly") {
    monthlyStyle = {
      color: "hsl(236, 100%, 87%)",
    };
  }

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
        <div onClick={props.setDaily}>
          <h4 style={dailyStyle}>Daily</h4>
        </div>
        <div onClick={props.setWeekly} className="">
          <h4 style={weeklyStyle}>Weekly</h4>
        </div>
        <div onClick={props.setMonthly}>
          <h4 style={monthlyStyle}>Monthly</h4>
        </div>
      </div>
    </div>
  );
}

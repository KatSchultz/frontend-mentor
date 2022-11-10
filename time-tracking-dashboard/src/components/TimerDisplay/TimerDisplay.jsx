import React from "react";
import "./TimerDisplay.css";
import iconplay from "../../images/icon-play.svg";
import iconExercise from "../../images/icon-exercise.svg";
import iconSelfCare from "../../images/icon-self-care.svg";
import iconSocial from "../../images/icon-social.svg";
import iconStudy from "../../images/icon-study.svg";
import iconWork from "../../images/icon-work.svg";
import iconElips from "../../images/icon-ellipsis.svg";

export default function TimerDisplay(props) {
  const propTitle = props.timer.title;

  let color, icon;

  if (propTitle === "Work") {
    color = "hsl(15, 100%, 70%)";
    icon = iconWork;
  }
  if (propTitle === "Play") {
    color = "hsl(195, 74%, 62%)";
    icon = iconplay;
  }
  if (propTitle === "Study") {
    color = "hsl(348, 100%, 68%)";
    icon = iconStudy;
  }
  if (propTitle === "Exercise") {
    color = "hsl(145, 58%, 55%)";
    icon = iconExercise;
  }
  if (propTitle === "Social") {
    color = "hsl(264, 64%, 52%)";
    icon = iconSocial;
  }
  if (propTitle === "Self Care") {
    color = "hsl(43, 84%, 65%)";
    icon = iconSelfCare;
  }

  const titleStyles = {
    backgroundColor: color,
  };

  return (
    <div className="timer-container" style={titleStyles}>
      <img src={icon} alt="" className="icon" />
      <div className="timer-info">
        <div className="title">
          <h3>{props.timer.title}</h3>
          <img src={iconElips} alt="" className="ellipsis" />
        </div>
        <div className="time">
          {props.timePeriod === "daily" && (
            <>
              <h2>{props.timer.timeframes.daily.current}hrs</h2>
              <p className="timeP">
                Last Week - {props.timer.timeframes.daily.previous}hrs
              </p>
            </>
          )}
          {props.timePeriod === "weekly" && (
            <>
              <h2>{props.timer.timeframes.weekly.current}hrs</h2>
              <p className="timeP">
                Last Week - {props.timer.timeframes.weekly.previous}hrs
              </p>
            </>
          )}
          {props.timePeriod === "monthly" && (
            <>
              <h2>{props.timer.timeframes.monthly.current}hrs</h2>
              <p className="timeP">
                Last Week - {props.timer.timeframes.monthly.previous}hrs
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./TimerDisplay.css";

export default function TimerDisplay(props) {
  const propTitle = props.timer.title;

  let titleStyles;
  let color;

  if (propTitle === "Work") {
    color = "hsl(15, 100%, 70%)";
  }
  if (propTitle === "Play") {
    color = "hsl(195, 74%, 62%)";
  }
  if (propTitle === "Study") {
    color = "hsl(348, 100%, 68%)";
  }
  if (propTitle === "Exercise") {
    color = "hsl(145, 58%, 55%)";
  }
  if (propTitle === "Social") {
    color = "hsl(264, 64%, 52%)";
  }
  if (propTitle === "Self Care") {
    color = "hsl(43, 84%, 65%)";
  }

  if (propTitle === "Work") {
    titleStyles = {
      backgroundColor: "hsl(15, 100%, 70%)",
    };
  }

  titleStyles = {
    backgroundColor: color,
  };

  return (
    <div className="timer-container" style={titleStyles}>
      <div className="timer-info">
        <div className="title">
          <h3>{props.timer.title}</h3>
          <p className="timeP">...</p>
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

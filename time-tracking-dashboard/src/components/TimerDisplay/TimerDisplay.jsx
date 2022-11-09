import React from "react";
import "./TimerDisplay.css";

export default function TimerDisplay(props) {
  return (
    <div className="timer-container">
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

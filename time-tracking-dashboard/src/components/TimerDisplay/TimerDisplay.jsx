import React from "react";
import "./TimerDisplay.css";

export default function TimerDisplay(props) {
  return (
    <div className="timer-container">
      <div className="timer-info">
        <h3>{props.timer.title}</h3>
      </div>
    </div>
  );
}

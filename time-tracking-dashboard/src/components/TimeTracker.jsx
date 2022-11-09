import React, { useEffect, useState } from "react";
import { getDataAxios } from "../services/api.service";
import Profile from "./Profile/Profile";
import TimerDisplay from "./TimerDisplay/TimerDisplay";

export default function TimeTracker() {
  const [timerData, setTimerData] = useState([]);

  useEffect(() => {
    getDataAxios().then((res) => {
      setTimerData(res.data);
      return res;
    });
  }, []);

  console.log("timerData in TimeTracker: ", timerData);

  return (
    <div>
      <Profile />
      {timerData &&
        timerData.map((timer) => (
          <TimerDisplay timer={timer} key={timer.title} />
        ))}
    </div>
  );
}

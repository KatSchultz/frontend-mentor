import React, { useEffect, useState } from "react";
import { getDataAxios } from "../services/api.service";
import Profile from "./Profile/Profile";
import TimerDisplay from "./TimerDisplay/TimerDisplay";

export default function TimeTracker() {
  const [timerData, setTimerData] = useState([]);
  const [timePeriod, setTimePeriod] = useState("daily");

  useEffect(() => {
    getDataAxios().then((res) => {
      setTimerData(res.data);
      return res;
    });
  }, []);

  function setDaily() {
    setTimePeriod("daily");
    console.log("set to daily");
  }
  function setWeekly() {
    setTimePeriod("weekly");
  }
  function setMonthly() {
    setTimePeriod("monthly");
  }

  console.log("timerData in TimeTracker: ", timerData);

  return (
    <div>
      <Profile
        setDaily={setDaily}
        setWeekly={setWeekly}
        setMonthly={setMonthly}
      />
      {timerData &&
        timerData.map((timer) => (
          <TimerDisplay
            timer={timer}
            key={timer.title}
            timePeriod={timePeriod}
          />
        ))}
    </div>
  );
}

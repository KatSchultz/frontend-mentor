import React, { useEffect } from "react";
import { getData } from "../services/api.service";
import Profile from "./Profile/Profile";

import TimerDisplay from "./TimerDisplay";

export default function TimeTracker() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Profile />
      <TimerDisplay />
    </div>
  );
}

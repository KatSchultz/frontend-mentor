import React from "react";

export default function Bar({ elem }) {
  const styles = {
    height: elem.amount * 5 + "px",
    width: 40 + "px",
    backgroundColor: "hsl(10, 79%, 65%)",
  };
  return (
    <div>
      <div className="bar" style={styles}></div>
      <div className="label">{elem.day}</div>
    </div>
  );
}

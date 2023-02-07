import React from "react";

export default function Bar({ elem, max }) {
  let color = "hsl(10, 79%, 65%)";
  if (elem.amount === max) {
    color = "hsl(186, 34%, 60%)";
  }

  const styles = {
    height: elem.amount * 4 + "px",
    width: 40 + "px",
    backgroundColor: color,
    marginBottom: 1 + "rem",
    borderRadius: 3 + "px",
  };

  return (
    <div>
      <div className="bar" style={styles}></div>
      <div className="label">{elem.day}</div>
    </div>
  );
}

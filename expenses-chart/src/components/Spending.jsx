import React from "react";
import Bar from "./Bar";
import "./Spending.css";

export default function Spending({ data }) {
  const styles = {
    height: 300 + "px",
  };
  return (
    <div>
      <h2>Spending - Last 7 days</h2>
      <div className="barchart" style={styles}>
        {data.map((elem) => (
          <Bar elem={elem} key={elem.amount} />
        ))}
      </div>
    </div>
  );
}

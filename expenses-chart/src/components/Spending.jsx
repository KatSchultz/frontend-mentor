import React from "react";
import Bar from "./Bar";
import "./Spending.css";

export default function Spending({ data }) {
  const styles = {
    height: 300 + "px",
  };

  const amounts = [];
  data.forEach((elem) => {
    amounts.push(elem.amount);
  });
  const max = Math.max(...amounts);
  console.log(max);

  return (
    <div>
      <h2 className="spending">Spending - Last 7 days</h2>
      <div className="barchart" style={styles}>
        {data.map((elem) => (
          <Bar elem={elem} key={elem.amount} max={max} />
        ))}
      </div>
    </div>
  );
}

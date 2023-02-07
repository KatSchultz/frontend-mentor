import React from "react";
import "./Total.css";

export default function Total({ totalSpending }) {
  return (
    <div className="total">
      <div className="this-month">
        <p>Total this month</p>
        <h2>${totalSpending}</h2>
      </div>
      <div className="difference">
        <h3>+2.4%</h3>
        <p>from last month</p>
      </div>
    </div>
  );
}

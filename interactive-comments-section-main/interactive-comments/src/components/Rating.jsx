import React from "react";
import { Plus, Minus } from "tabler-icons-react";

export default function Rating({ score }) {
  return (
    <div className="rating">
      <div className="score-plus">
        <Plus size={18} color={"hsl(239, 57%, 85%)"} />
      </div>
      <div className="score">{score}</div>
      <div className="score-minus">
        <Minus size={18} color={"hsl(239, 57%, 85%)"} />
      </div>
    </div>
  );
}

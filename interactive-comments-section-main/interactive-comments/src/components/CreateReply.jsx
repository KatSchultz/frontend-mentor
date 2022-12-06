import React from "react";
import "./CreateReply.css";

export default function CreateReply({ user }) {
  let icon = user.image.png;

  return (
    <div className="composing-reply">
      <img src={icon} alt="" />
    </div>
  );
}

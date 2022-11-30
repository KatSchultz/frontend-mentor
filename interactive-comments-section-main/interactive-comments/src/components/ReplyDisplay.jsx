import React from "react";
import "./ReplyDisplay.css";

export default function ReplyDisplay({ reply, user }) {
  console.log(reply);
  let icon = reply.user.image.png;

  return (
    <div className="">
      <div className="reply comment-container">
        <div className="comment-info">
          <img src={icon} alt="" />
          <h2>{reply.user.username}</h2>
          <p>{reply.createdAt}</p>
        </div>
        <div className="content">{reply.content}</div>
        <div className="comment-stats">
          <div className="score"></div>
          {reply.user.username === user.username ? (
            <>
              <div className="delete">Delete</div>
              <div className="edit">Edit</div>
            </>
          ) : (
            <div className="reply">Reply</div>
          )}
        </div>
      </div>
    </div>
  );
}

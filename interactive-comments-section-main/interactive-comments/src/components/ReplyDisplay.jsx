import React from "react";
import Rating from "./Rating";
import "./ReplyDisplay.css";

export default function ReplyDisplay({ reply, user }) {
  console.log(reply);
  let icon = reply.user.image.png;

  return (
    <div className="">
      <div className="reply comment-container">
        <div className="comment-info">
          <img src={icon} alt="" />
          <p className="username">{reply.user.username}</p>
          <p className="creation">{reply.createdAt}</p>
        </div>
        <div className="content">{reply.content}</div>
        <div className="comment-stats">
          <div className="score">
            <Rating score={reply.score} />
          </div>
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

import React from "react";
import Rating from "./Rating";
import "./ReplyDisplay.css";
import { ArrowBackUp, Trash, Pencil } from "tabler-icons-react";

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
            <div className="modify">
              <div className="delete">
                {" "}
                <Trash size={18} />
                Delete
              </div>
              <div className="edit">
                <Pencil size={18} /> Edit
              </div>
            </div>
          ) : (
            <div className="reply">
              <ArrowBackUp size={18} /> Reply
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

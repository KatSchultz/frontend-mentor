import React from "react";
import Rating from "./Rating";
import "./ReplyDisplay.css";
import { ArrowBackUp, Trash, Pencil } from "tabler-icons-react";
import CommentInfo from "./CommentInfo";

export default function ReplyDisplay({ reply, user }) {
  console.log(reply);
  let icon = reply.user.image.png;

  return (
    <div className="">
      <div className="reply comment-container">
        <CommentInfo comment={reply} />
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
            <div className="reply-btn">
              <ArrowBackUp size={18} /> Reply
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Rating from "./Rating";
import "./ReplyDisplay.css";
import { ArrowBackUp, Trash, Pencil } from "tabler-icons-react";
import CommentInfo from "./CommentInfo";
import { useState } from "react";
import CreateReply from "./CreateReply";

export default function ReplyDisplay({ reply, user, displayModal }) {
  const [doubleReply, setDoubleReply] = useState(false);
  console.log(reply);
  let icon = reply.user.image.png;
  function startDoubleReply() {
    setDoubleReply(true);
  }

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
              <div className="delete" onClick={displayModal}>
                {" "}
                <Trash size={18} />
                Delete
              </div>
              <div className="edit">
                <Pencil size={18} /> Edit
              </div>
            </div>
          ) : (
            <div className="reply-btn" onClick={startDoubleReply}>
              <ArrowBackUp size={18} /> Reply
            </div>
          )}
        </div>
      </div>
      {doubleReply && <CreateReply user={user} />}
    </div>
  );
}

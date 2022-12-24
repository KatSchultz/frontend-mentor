import React from "react";
import Rating from "./Rating";
import { ArrowBackUp, Trash, Pencil } from "tabler-icons-react";

export default function CommentStats({
  comment,
  user,
  startReply,
  displayModal,
}) {
  return (
    <div className="comment-stats">
      <div className="score">
        <Rating score={comment.score} />
      </div>
      {comment.user === user ? (
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
        <div className="reply-btn" onClick={startReply}>
          {" "}
          <ArrowBackUp size={18} /> Reply
        </div>
      )}
    </div>
  );
}

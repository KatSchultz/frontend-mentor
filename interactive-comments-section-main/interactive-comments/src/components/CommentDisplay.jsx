import { useEffect } from "react";
import { useState } from "react";
import ReplyDisplay from "./ReplyDisplay";
import { ArrowBackUp } from "tabler-icons-react";

import "./CommentDisplay.css";
import Rating from "./Rating";

export default function CommentDisplay({ comment, user }) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    if (comment.replies) {
      setReplies(comment.replies);
    }
  }, []);

  let icon = comment.user.image.png;
  console.log(comment.user.image.png);
  return (
    <div className="">
      <div className="comment-container">
        <div className="comment-info">
          <img src={icon} alt="" />
          <p className="username">{comment.user.username}</p>
          <p className="creation">{comment.createdAt}</p>
        </div>
        <div className="content">{comment.content}</div>
        <div className="comment-stats">
          <div className="score">
            <Rating score={comment.score} />
          </div>
          {comment.user === user ? (
            <div className="modify">
              <div className="delete">Delete</div>
              <div className="edit">Edit</div>
            </div>
          ) : (
            <div className="reply">
              {" "}
              <ArrowBackUp size={18} /> Reply
            </div>
          )}
        </div>
      </div>
      <div className="reply-container">
        {replies &&
          replies.map((reply) => (
            <ReplyDisplay reply={reply} key={reply.id} user={user} />
          ))}
      </div>
    </div>
  );
}

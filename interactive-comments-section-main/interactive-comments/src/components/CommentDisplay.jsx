import { useEffect } from "react";
import { useState } from "react";
import ReplyDisplay from "./ReplyDisplay";
import "./CommentDisplay.css";

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
          <h2>{comment.user.username}</h2>
          <p>{comment.createdAt}</p>
        </div>
        <div className="content">{comment.content}</div>
        <div className="comment-stats">
          <div className="score"></div>
          {comment.user === user ? (
            <>
              <div className="delete">Delete</div>
              <div className="edit">Edit</div>
            </>
          ) : (
            <div className="reply">Reply</div>
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

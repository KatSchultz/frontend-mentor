import { useEffect, useState } from "react";
import ReplyDisplay from "./ReplyDisplay";
import CommentInfo from "./CommentInfo";
import CommentStats from "./CommentStats";
import "./CommentDisplay.css";

export default function CommentDisplay({ comment, user }) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    if (comment.replies) {
      setReplies(comment.replies);
    }
  }, []);

  return (
    <div className="">
      <div className="comment-container">
        <CommentInfo comment={comment} />
        <div className="content">{comment.content}</div>
        <CommentStats comment={comment} user={user} />
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

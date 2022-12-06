import { useEffect, useState } from "react";
import ReplyDisplay from "./ReplyDisplay";
import CommentInfo from "./CommentInfo";
import CommentStats from "./CommentStats";
import "./CommentDisplay.css";
import CreateReply from "./CreateReply";

export default function CommentDisplay({ comment, user }) {
  const [replies, setReplies] = useState([]);
  const [composeReply, setComposeReply] = useState(false);

  useEffect(() => {
    if (comment.replies) {
      setReplies(comment.replies);
    }
  }, []);

  function startReply() {
    setComposeReply(true);
  }

  return (
    <div className="">
      <div className="comment-container">
        <CommentInfo comment={comment} />
        <div className="content">{comment.content}</div>
        <CommentStats comment={comment} user={user} startReply={startReply} />
      </div>
      <div className="reply-container">
        {replies &&
          replies.map((reply) => (
            <ReplyDisplay reply={reply} key={reply.id} user={user} />
          ))}
        {composeReply && <CreateReply user={user} />}
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { useState } from "react";
import ReplyDisplay from "./ReplyDisplay";

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
    <div>
      CommentDisplay
      <div className="comment-info">
        <img src={icon} alt="" />
        <h2>{comment.user.username}</h2>
        <p>{comment.createdAt}</p>
        {replies &&
          replies.map((reply) => <ReplyDisplay reply={reply} key={reply.id} />)}
      </div>
    </div>
  );
}

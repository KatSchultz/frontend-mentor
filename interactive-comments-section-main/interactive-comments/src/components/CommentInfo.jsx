import React from "react";

export default function CommentInfo({ comment }) {
  let icon = comment.user.image.png;

  return (
    <div className="comment-info">
      <img src={icon} alt="" />
      <p className="username">{comment.user.username}</p>
      <p className="creation">{comment.createdAt}</p>
    </div>
  );
}

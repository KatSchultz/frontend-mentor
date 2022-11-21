export default function CommentDisplay({ comment, user }) {
  return (
    <div>
      CommentDisplay
      <div className="comment-info">
        <img src={comment.user.image.png} alt="" />
        <h2>{comment.user.username}</h2>
        <p>{comment.createdAt}</p>
      </div>
    </div>
  );
}

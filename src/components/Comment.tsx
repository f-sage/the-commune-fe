import type { WP_REST_API_Comment as WordpressComment } from "wp-types";

export const Comment = ({ comment }: { comment: WordpressComment }) => {
  const content = { __html: comment.content?.rendered || "" };
  const createdAt = new Date(comment.date).toDateString();

  return (
    <div className="comment">
      <div dangerouslySetInnerHTML={content} />
      <div className="comment-details">
        <div>{comment.author_name}</div>
        <time dateTime={comment.date}>{createdAt}</time>
      </div>
    </div>
  );
};

export default Comment;

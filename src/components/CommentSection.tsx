import type { WP_REST_API_Comment as WordpressComment } from "wp-types";
import { Comment } from "./Comment";
import "./CommentSection.css";

export const CommentSection = ({
  comments,
}: {
  comments: WordpressComment[];
}) => {
  return (
    <article id="comment-section">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </article>
  );
};

export default CommentSection;

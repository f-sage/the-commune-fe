import type { WP_REST_API_Post as WordpressPost } from "wp-types";
import "./PostPreview.css";

export const PostPreview = ({ post }: { post: WordpressPost }) => {
  const content = { __html: post.excerpt.rendered };
  const createdAt = new Date(post.date).toDateString();
  return (
    <article className="post">
      <h3>
        <a href={`/post/${post.id}`}>{post.title.rendered}</a>
      </h3>
      <div dangerouslySetInnerHTML={content} />
      <time dateTime={post.date}>{createdAt}</time>
    </article>
  );
};

export default PostPreview;

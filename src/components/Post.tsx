import "./Post.css";
import type { WP_REST_API_Post as WordpressPost } from "wp-types";

export const Post = ({ post }: { post: WordpressPost }) => {
  const content = { __html: post.content.rendered };
  const createdAt = new Date(post.date).toDateString();

  return (
    <article>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={content} />
      <time dateTime={post.date}>{createdAt}</time>
    </article>
  );
};

export default Post;

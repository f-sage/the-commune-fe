import "./Post.css";
import type { WP_REST_API_Post as WordpressPost } from "wp-types";

const datetimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;

export const Post = ({ post }: { post: WordpressPost }) => {
  const content = { __html: post.content.rendered };
  const createdAt = new Date(post.date).toLocaleDateString(
    "en-US",
    datetimeOptions,
  );

  return (
    <article>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={content} />
      <time dateTime={post.date}>{createdAt}</time>
    </article>
  );
};

export default Post;

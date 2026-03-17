import type { WP_REST_API_Post as WordpressPost } from "wp-types";

export const Post = ({ post }: { post: WordpressPost }) => {
  const content = { __html: post.excerpt.rendered };
  const createdAt = new Date(post.date).toDateString();
  return (
    <article>
      <h3>
        <a href={`/post/${post.id}`}>{post.title.rendered}</a>
      </h3>
      <div dangerouslySetInnerHTML={content} />
      <div>{createdAt}</div>
    </article>
  );
};

export default Post;

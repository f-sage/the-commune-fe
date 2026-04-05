import "./PostPreview.css";
import type { APIMessage as DiscordMessage } from "discord-api-types/v10";

const datetimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;

export const PostPreview = ({ post }: { post: DiscordMessage }) => {
  const content = post.content;
  const createdAt = new Date(post.timestamp).toLocaleDateString(
    "en-US",
    datetimeOptions,
  );

  return (
    <article className="post">
      <h3>{/* <a href={`/post/${post.id}`}>{post.title.rendered}</a> */}</h3>
      <p className="post-content">{content}</p>
      <time dateTime={post.timestamp}>{createdAt}</time>
    </article>
  );
};

export default PostPreview;

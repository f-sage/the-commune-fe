import {
  separateTitleAndContent,
  stripMarkup,
} from "@/helpers/discordPostHelpers";
import "./PostPreview.css";
import type { APIMessage as DiscordMessage } from "discord-api-types/v10";

const datetimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;

export const PostPreview = ({ post }: { post: DiscordMessage }) => {
  const createdAt = new Date(post.timestamp).toLocaleDateString(
    "en-US",
    datetimeOptions,
  );

  let { title, content } = separateTitleAndContent(post.content);
  content = content.trim();
  title = stripMarkup(title);

  return (
    <article className="post">
      <h3>{title}</h3>
      <p className="post-content">{content}</p>
      <time dateTime={post.timestamp}>{createdAt}</time>
    </article>
  );
};

export default PostPreview;

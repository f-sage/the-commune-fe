import {
  htmlWithLineBreaksToParagraphs,
  separateTitleAndContent,
  stripMarkup,
  textToHtmlMarkup,
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

  title = stripMarkup(title);

  content = content.trim();
  const contentAsHtml = htmlWithLineBreaksToParagraphs(
    textToHtmlMarkup(content),
  );

  return (
    <article className="post">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: contentAsHtml }}></div>
      <time dateTime={post.timestamp}>{createdAt}</time>
    </article>
  );
};

export default PostPreview;

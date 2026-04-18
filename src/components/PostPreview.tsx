import {
  htmlWithLineBreaksToParagraphs,
  textToHtmlMarkup,
} from "@/helpers/discordPostHelpers";
import "./PostPreview.css";
import type { APIMessage as DiscordMessage } from "discord-api-types/v10";
import PostAttachments from "./PostAttachments";

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
  let { content } = post;

  content = content.trim();
  const contentAsHtml = htmlWithLineBreaksToParagraphs(
    textToHtmlMarkup(content),
  );

  return (
    <article className="post">
      <div dangerouslySetInnerHTML={{ __html: contentAsHtml }}></div>
      <PostAttachments data={post.attachments} />
      <time dateTime={post.timestamp}>{createdAt}</time>
    </article>
  );
};

export default PostPreview;

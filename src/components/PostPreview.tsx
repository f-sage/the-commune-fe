import {
  htmlWithLineBreaksToParagraphs,
  removeAttentionGrabbers,
  resolveDiscordLinks,
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

export const PostPreview = async ({ post }: { post: DiscordMessage }) => {
  const createdAt = new Date(post.timestamp).toLocaleDateString(
    "en-US",
    datetimeOptions,
  );

  post.content = post.content.trim();
  await resolveDiscordLinks(post);
  removeAttentionGrabbers(post);

  const { content } = post;
  if (!content && post.attachments.length === 0) return;

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

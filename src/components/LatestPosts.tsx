import { PostPreview } from "./PostPreview";
import "./LatestPosts.css";
import type { APIMessage as DiscordMessage } from "discord-api-types/v10";
import { fetchDiscordPosts } from "@/helpers/fetchDiscordPosts";

const MESSAGES_LIMIT = 5;
export const LatestPosts = async () => {
  const posts = await fetchDiscordPosts(MESSAGES_LIMIT);
  // do not display anything if request failed
  if (posts.message) {
    return;
  }

  return (
    <div id="posts">
      <h2>
        <a href="/posts">News</a>
      </h2>

      {posts?.map((item: DiscordMessage) => (
        <PostPreview key={item.id} post={item} />
      ))}
    </div>
  );
};

export default LatestPosts;

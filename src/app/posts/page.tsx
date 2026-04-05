import type { APIMessage as DiscordMessage } from "discord-api-types/v10";
import { PostPreview } from "@/components/PostPreview";
import { fetchDiscordPosts } from "@/helpers/fetchDiscordPosts";

const MESSAGES_LIMIT = 50;
export default async function PostsPage() {
  const posts = await fetchDiscordPosts(MESSAGES_LIMIT);

  return (
    <>
      <h1>News</h1>

      {posts?.map((item: DiscordMessage) => (
        <PostPreview key={item.id} post={item} />
      ))}
    </>
  );
}
